import { chromium } from 'playwright-core'
import AxeBuilder from '@axe-core/playwright'
import { mkdir } from 'node:fs/promises'

const url = process.env.QA_URL ?? 'http://127.0.0.1:5173/MTXFinanceDataRoom/'
const artifacts = process.env.QA_ARTIFACTS ?? '/tmp/mtx-qa'
await mkdir(artifacts, { recursive: true })

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH ?? '/usr/local/bin/google-chrome',
  headless: true,
  args: ['--no-sandbox'],
})

const failures = []
for (const viewport of [
  { name: 'desktop', width: 1440, height: 1000 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
]) {
  const context = await browser.newContext({ viewport })
  const page = await context.newPage()
  const consoleErrors = []
  page.on('console', message => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })
  await page.goto(url, { waitUntil: 'networkidle' })
  const accessibility = await new AxeBuilder({ page }).analyze()
  const blockingViolations = accessibility.violations.filter(violation => ['serious', 'critical'].includes(violation.impact ?? ''))
  if (blockingViolations.length) {
    failures.push(`${viewport.name}: accessibility violations: ${blockingViolations.map(violation => `${violation.id} (${violation.nodes.length}): ${violation.nodes.slice(0, 100).map(node => node.target.join(' ')).join(' | ')}`).join(', ')}`)
  }

  const dimensions = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    maxWindowScroll: (() => {
      window.scrollTo(10000, 0)
      const value = window.scrollX
      window.scrollTo(0, 0)
      return value
    })(),
  }))
  if (dimensions.maxWindowScroll > 2) {
    const offenders = await page.evaluate(() => Array.from(document.querySelectorAll('*'))
      .map(element => {
        const rect = element.getBoundingClientRect()
        return { tag: element.tagName.toLowerCase(), className: element.className?.toString().slice(0, 80), parent: element.parentElement?.className?.toString().slice(0, 80), left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) }
      })
      .filter(rect => rect.right > document.documentElement.clientWidth + 2 || rect.left < -2)
      .slice(0, 8))
    failures.push(`${viewport.name}: window can scroll ${dimensions.maxWindowScroll}px horizontally (${dimensions.scrollWidth}px content, ${dimensions.clientWidth}px viewport); ${JSON.stringify(offenders)}`)
  }

  if (viewport.name !== 'desktop') {
    const menu = page.locator('.menu-button')
    await menu.click()
    if ((await menu.getAttribute('aria-expanded')) !== 'true') failures.push(`${viewport.name}: menu did not open`)
    await page.locator('#primary-navigation a[href="#workspace"]').click()
    await page.waitForTimeout(250)
    if ((await menu.getAttribute('aria-expanded')) !== 'false') failures.push(`${viewport.name}: menu did not close after navigation`)
  }

  await page.locator('#workspace select[aria-label="Select fictional transaction"]').selectOption('Growth financing')
  await page.locator('#workspace input[aria-label="Search fictional documents"]').fill('Debt')
  if (await page.locator('#workspace .document-list > button').count() !== 1) failures.push(`${viewport.name}: workspace search result mismatch`)

  await page.getByRole('button', { name: 'Request a Product Demonstration' }).first().click()
  const dialog = page.getByRole('dialog')
  if (!(await dialog.isVisible())) failures.push(`${viewport.name}: demonstration modal did not open`)
  const focusedLabel = await page.evaluate(() => document.activeElement?.getAttribute('aria-label'))
  if (focusedLabel !== 'Close demonstration request') failures.push(`${viewport.name}: modal did not receive initial focus`)
  await page.keyboard.press('Escape')
  if (await dialog.isVisible()) failures.push(`${viewport.name}: Escape did not close modal`)

  if (consoleErrors.length) failures.push(`${viewport.name}: console errors: ${consoleErrors.join(' | ')}`)
  await page.screenshot({ path: `${artifacts}/${viewport.name}.png`, fullPage: true })
  await context.close()
}

await browser.close()
if (failures.length) {
  console.error(failures.join('\n'))
  process.exit(1)
}
console.log(`Responsive and interaction checks passed. Screenshots: ${artifacts}`)
