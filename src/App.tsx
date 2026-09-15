import {
  Activity, AlertTriangle, ArrowRight, BarChart3, BookOpen, Bot, Check, CheckCircle2,
  ChevronDown, ChevronRight, CircleUserRound, Clock3, Database, Download, Eye,
  FileCheck2, FileLock2, FileSearch, FileText, Filter, Folder, FolderOpen, History,
  KeyRound, Layers3, Link2, LockKeyhole, Menu, MessageSquareText, Network, PanelLeft,
  Plus, Search, Send, Settings2, ShieldCheck, Sparkles, Upload, UserRoundCheck, Users,
  WandSparkles, X,
} from 'lucide-react'
import { useEffect, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { architecture, capabilities, challenges, journey, requests as initialRequests, roles, transactions, useCases } from './data'

const nav = [
  ['Product', 'product'], ['Challenges', 'challenges'], ['Use Cases', 'use-cases'],
  ['Journey', 'journey'], ['Workspace', 'workspace'], ['Security', 'security'],
  ['AI Assistance', 'ai'], ['Architecture', 'architecture'], ['Adoption', 'adoption'],
]

const cn = (...values: Array<string | false | undefined>) => values.filter(Boolean).join(' ')

function Button({ children, variant = 'primary', onClick, type = 'button', className = '', ariaLabel }: {
  children: ReactNode; variant?: 'primary' | 'secondary' | 'quiet'; onClick?: () => void; type?: 'button' | 'submit'; className?: string; ariaLabel?: string
}) {
  return <button type={type} className={cn('button', `button-${variant}`, className)} onClick={onClick} aria-label={ariaLabel}>{children}</button>
}

function SectionIntro({ eyebrow, title, copy, align = 'left' }: { eyebrow: string; title: string; copy?: string; align?: 'left' | 'center' }) {
  return <div className={cn('section-intro', align === 'center' && 'center')}>
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
}

function Label({ children, tone = 'neutral' }: { children: ReactNode; tone?: 'neutral' | 'good' | 'warning' | 'blue' }) {
  return <span className={`label label-${tone}`}>{children}</span>
}

function DemoLabel({ children = 'Illustrative product view using fictional data.' }: { children?: ReactNode }) {
  return <div className="demo-label"><Sparkles size={14} aria-hidden="true" />{children}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [demoOpen, setDemoOpen] = useState(false)

  return <>
    <a className="skip-link" href="#main">Skip to main content</a>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="MTX Finance Data Room home">
        <span className="brand-mark">MTX</span>
        <span className="brand-name">Finance Data Room</span>
      </a>
      <button className="menu-button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X /> : <Menu />}<span className="sr-only">Toggle navigation</span>
      </button>
      <nav id="primary-navigation" className={cn('nav', menuOpen && 'open')} aria-label="Primary navigation">
        {nav.map(([name, id]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{name}</a>)}
        <Button onClick={() => { setDemoOpen(true); setMenuOpen(false) }}>Request a Demo</Button>
      </nav>
    </header>

    <main id="main">
      <Hero onDemo={() => setDemoOpen(true)} />
      <ValueStrip />
      <Challenges />
      <UseCases />
      <Journey />
      <Roles />
      <CapabilityFamilies />
      <Workspace />
      <Permissions />
      <RequestTracker />
      <QAWorkflow />
      <Redaction />
      <AISection />
      <ActivityCenter />
      <Analytics />
      <Security />
      <Architecture />
      <Integrations />
      <Configuration />
      <Adoption />
      <Delivery />
      <Why />
      <FinalCTA onDemo={() => setDemoOpen(true)} />
    </main>
    <Footer />
    <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
  </>
}

function Hero({ onDemo }: { onDemo: () => void }) {
  const stats = [
    ['Documents uploaded', '124', FileText], ['Diligence requests', '18', FileCheck2],
    ['Open questions', '7', MessageSquareText], ['Participant groups', '5', Users],
  ]
  return <section className="hero" id="top">
    <div className="hero-glow" />
    <div className="container hero-grid">
      <div className="hero-copy">
        <span className="eyebrow light">MTX Financial Services</span>
        <h1>Give every transaction a controlled place to move forward.</h1>
        <p>MTX Finance Data Room brings sensitive documents, participant access, diligence requests, questions, responses, and review activity into one governed transaction workspace.</p>
        <div className="hero-actions">
          <Button onClick={onDemo}>Request a Product Demonstration <ArrowRight size={17} /></Button>
          <a className="button button-secondary" href="#workspace">Explore the Transaction Workspace</a>
        </div>
        <div className="trust-line"><ShieldCheck size={18} />Designed for controlled disclosure, clear accountability, and informed review.</div>
      </div>
      <div className="hero-product">
        <DemoLabel />
        <div className="product-window">
          <div className="window-top">
            <div><span className="window-kicker">Project Northstar</span><strong>Acquisition diligence</strong></div>
            <Label tone="blue">Confirmatory review</Label>
          </div>
          <div className="hero-stats">
            {stats.map(([label, value, Icon]) => <div className="mini-stat" key={label as string}><Icon size={17} /><strong>{value as string}</strong><span>{label as string}</span></div>)}
          </div>
          <div className="hero-workspace-grid">
            <div className="hero-folders">
              <div className="panel-title"><PanelLeft size={16} /> Document index</div>
              {['01 Corporate', '02 Financial', '03 Commercial', '04 Legal'].map((folder, i) =>
                <div className={cn('folder-row', i === 1 && 'active')} key={folder}><Folder size={16} />{folder}<span>{[22, 34, 19, 28][i]}</span></div>)}
            </div>
            <div className="hero-review">
              <div className="panel-title">Review attention</div>
              <div className="review-item"><Clock3 size={16} /><span><strong>6 documents</strong> awaiting approval</span></div>
              <div className="review-item warning"><AlertTriangle size={16} /><span><strong>2 access items</strong> need review</span></div>
              <div className="activity-line"><span>Material contract register viewed</span><small>Buyer group · 12m</small></div>
              <div className="activity-line"><span>Finance response submitted</span><small>Finance lead · 28m</small></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

function ValueStrip() {
  const items = [
    [FileLock2, 'Controlled document access', 'Shape disclosure by role, folder, document, and review period.'],
    [MessageSquareText, 'Coordinated diligence', 'Connect requests, questions, responses, and supporting material.'],
    [History, 'Traceable participant activity', 'Maintain time-stamped records for configured workspace events.'],
    [Layers3, 'Reusable transaction workspaces', 'Adapt approved structures, roles, and workflows for future work.'],
  ]
  return <section id="product" className="value-strip" aria-label="Product objectives"><div className="container value-grid">
    {items.map(([Icon, title, copy]) => <article key={title as string}><Icon size={23} /><div><h3>{title as string}</h3><p>{copy as string}</p></div></article>)}
  </div></section>
}

function Challenges() {
  const [active, setActive] = useState(0)
  const item = challenges[active]
  return <section id="challenges" className="section pale">
    <div className="container">
      <SectionIntro eyebrow="Fragmented diligence" title="Sensitive transactions slow down when documents, requests, and decisions become fragmented." copy="Select a common operating challenge to see how the workspace can structure the response." />
      <div className="challenge-layout">
        <div className="challenge-tabs" role="tablist" aria-label="Transaction challenges">
          {challenges.map((challenge, i) => <button role="tab" aria-selected={active === i} key={challenge.title} onClick={() => setActive(i)}><span>0{i + 1}</span>{challenge.title}<ChevronRight size={18} /></button>)}
        </div>
        <div className="detail-panel" role="tabpanel">
          <Label tone="warning">Challenge {active + 1}</Label>
          <h3>{item.title}</h3>
          <DetailRow label="What happens" value={item.problem} />
          <DetailRow label="Who experiences it" value={item.people} />
          <DetailRow label="Transaction effect" value={item.effect} />
          <div className="response-box"><ShieldCheck size={20} /><div><strong>MTX product response</strong><p>{item.response}</p></div></div>
          <strong className="minor-heading">Suggested operational measures</strong>
          <div className="chip-row">{item.measures.map(m => <span className="chip" key={m}>{m}</span>)}</div>
        </div>
      </div>
    </div>
  </section>
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return <div className="detail-row"><span>{label}</span><p>{value}</p></div>
}

function UseCases() {
  const keys = Object.keys(useCases) as Array<keyof typeof useCases>
  const [active, setActive] = useState<keyof typeof useCases>(keys[0])
  const item = useCases[active]
  return <section id="use-cases" className="section">
    <div className="container">
      <SectionIntro eyebrow="Configurable by transaction" title="Start with the work at hand." copy="These examples are configurable starting points, not mandatory legal or diligence checklists." />
      <div className="pill-tabs" role="tablist" aria-label="Use cases">
        {keys.map(key => <button role="tab" aria-selected={active === key} onClick={() => setActive(key)} key={key}>{key}</button>)}
      </div>
      <div className="usecase-grid">
        <div className="usecase-summary">
          <Label tone="blue">{active}</Label>
          <h3>A workspace shaped around the transaction</h3>
          <InfoList title="Participants" icon={<Users />} items={item.participants} />
          <InfoList title="Expected phases" icon={<Activity />} items={item.phases} />
        </div>
        <div className="folder-card">
          <div className="panel-title"><FolderOpen size={18} /> Suggested folder structure</div>
          {item.folders.map((f, i) => <div className="folder-list-row" key={f}><span>{String(i + 1).padStart(2, '0')}</span>{f}<ChevronRight size={16} /></div>)}
        </div>
        <div className="check-card">
          <div className="panel-title"><FileCheck2 size={18} /> Diligence checklist</div>
          {item.checklist.map(c => <div className="check-row" key={c}><CheckCircle2 size={17} />{c}</div>)}
          <div className="example-question"><MessageSquareText size={17} /><div><small>Example question</small><p>{item.questions[0]}</p></div></div>
        </div>
      </div>
    </div>
  </section>
}

function InfoList({ title, icon, items }: { title: string; icon: ReactNode; items: string[] }) {
  return <div className="info-list"><strong>{icon}{title}</strong><p>{items.join(' · ')}</p></div>
}

function Journey() {
  const [active, setActive] = useState(0)
  const stage = journey[active]
  return <section id="journey" className="section navy-section">
    <div className="container">
      <SectionIntro eyebrow="Transaction journey" title="A governed path from preparation to closeout." copy="Each stage connects work, responsibility, control, and an observable operating measure." />
      <div className="stepper" role="tablist" aria-label="Transaction stages">
        {journey.map((s, i) => <button role="tab" aria-selected={active === i} onClick={() => setActive(i)} key={s[0]}><span>{i < active ? <Check size={16} /> : i + 1}</span><small>{s[0]}</small></button>)}
      </div>
      <div className="journey-panel" role="tabpanel">
        <div><Label tone="blue">Stage {active + 1}</Label><h3>{stage[0]}</h3><p className="large-copy">{stage[1]}</p></div>
        <div className="journey-details">
          <DetailRow label="Primary users" value={stage[2]} />
          <DetailRow label="Product capabilities" value={stage[3]} />
          <DetailRow label="Security consideration" value={stage[4]} />
          <DetailRow label="Suggested measures" value={stage[5]} />
        </div>
      </div>
    </div>
  </section>
}

function Roles() {
  const [active, setActive] = useState(0)
  return <section className="section"><div className="container">
    <SectionIntro eyebrow="Role-based experiences" title="Give each participant the context needed for their work." />
    <div className="role-layout">
      <div className="role-grid">{roles.map(([title], i) => <button aria-pressed={active === i} onClick={() => setActive(i)} key={title}><CircleUserRound />{title}</button>)}</div>
      <div className="role-focus"><div className="role-icon"><UserRoundCheck /></div><Label tone="blue">Selected experience</Label><h3>{roles[active][0]}</h3><p>{roles[active][1]}</p><div className="boundary-note"><LockKeyhole size={18} /> Views and actions remain limited by configured permissions.</div></div>
    </div>
  </div></section>
}

function CapabilityFamilies() {
  const keys = Object.keys(capabilities) as Array<keyof typeof capabilities>
  const [active, setActive] = useState<keyof typeof capabilities>(keys[0])
  return <section className="section pale"><div className="container">
    <SectionIntro eyebrow="Product capability families" title="Connected controls for active transaction work." />
    <div className="cap-layout">
      <div className="cap-tabs" role="tablist">{keys.map((key, i) => <button role="tab" aria-selected={key === active} onClick={() => setActive(key)} key={key}><span>0{i + 1}</span>{key}<ChevronRight /></button>)}</div>
      <div className="cap-panel"><Label tone="blue">{active}</Label><div className="cap-grid">{capabilities[active].map(item => <div key={item}><CheckCircle2 />{item}</div>)}</div></div>
    </div>
  </div></section>
}

function Workspace() {
  const txKeys = Object.keys(transactions) as Array<keyof typeof transactions>
  const [tx, setTx] = useState<keyof typeof transactions>(txKeys[0])
  const [folder, setFolder] = useState(0)
  const [search, setSearch] = useState('')
  const [workstream, setWorkstream] = useState('Any')
  const [selected, setSelected] = useState(0)
  const [question, setQuestion] = useState('')
  const [questionSent, setQuestionSent] = useState(false)
  const data = transactions[tx]
  const docs = data.documents.filter(d => d[0].toLowerCase().includes(search.toLowerCase()) && (workstream === 'Any' || d[1] === workstream))
  const document = docs[selected] ?? docs[0]
  useEffect(() => setSelected(0), [tx, search, workstream])
  return <section id="workspace" className="section workspace-section"><div className="container wide">
    <SectionIntro eyebrow="Interactive workspace" title="Explore the transaction, not just the file list." copy="Switch transactions, navigate folders, search documents, inspect access, and submit a fictional question." />
    <DemoLabel>Fictional transaction data shown for demonstration purposes.</DemoLabel>
    <div className="workspace-shell">
      <div className="workspace-topbar">
        <div className="tx-switcher"><small>Transaction</small><select aria-label="Select fictional transaction" value={tx} onChange={e => { setTx(e.target.value as keyof typeof transactions); setFolder(0) }}>{txKeys.map(k => <option key={k}>{k}</option>)}</select></div>
        <Label tone="blue">{data.phase}</Label>
        <div className="workspace-search"><Search size={17} /><input aria-label="Search fictional documents" placeholder="Search documents" value={search} onChange={e => setSearch(e.target.value)} /></div>
        <select aria-label="Filter by workstream" value={workstream} onChange={e => setWorkstream(e.target.value)}><option>Any</option><option>Corporate</option><option>Financial</option><option>Legal</option><option>Technology</option><option>Programs</option></select>
      </div>
      <div className="workspace-body">
        <aside className="doc-tree" aria-label="Document folders">
          <div className="panel-title"><FolderOpen size={17} /> Document index</div>
          {data.folders.map((f, i) => <button className={cn(folder === i && 'active')} onClick={() => setFolder(i)} key={f}><ChevronRight size={14} /><Folder size={16} />{f}</button>)}
          <div className="tree-divider" />
          <button><MessageSquareText size={16} /> Questions <Label tone="warning">7</Label></button>
          <button><FileCheck2 size={16} /> Requests <Label>18</Label></button>
          <button><Activity size={16} /> Activity</button>
          <button><Settings2 size={16} /> Security settings</button>
        </aside>
        <div className="document-list">
          <div className="list-head"><span>Document</span><span>Workstream</span><span>Access</span><span>Version</span></div>
          {docs.map((d, i) => <button className={cn(selected === i && 'active')} onClick={() => setSelected(i)} key={d[0]}><span><FileText size={18} />{d[0]}</span><span>{d[1]}</span><span><LockKeyhole size={14} />{d[2]}</span><span>{d[3]}</span></button>)}
          {!docs.length && <div className="empty-state">No fictional documents match this filter.</div>}
        </div>
        <aside className="preview-panel">
          {document ? <>
            <div className="preview-page" aria-label="Generic fictional document preview"><div className="fake-logo">MTX / PLACEHOLDER</div><div className="fake-title">{document[0]}</div><div className="fake-line w80" /><div className="fake-line" /><div className="fake-line w60" /><div className="fake-table" /></div>
            <h3>{document[0]}</h3>
            <div className="metadata-grid"><span>Classification<strong>{document[1]}</strong></span><span>Permission<strong>{document[2]}</strong></span><span>Owner<strong>Assigned team</strong></span><span>Version<strong>{document[3]}</strong></span></div>
            <details><summary><History size={16} /> Inspect version history</summary><p>Current version reviewed · Prior version retained · Fictional history</p></details>
            <div className="question-compose"><label htmlFor="workspace-question">Ask about this document</label><textarea id="workspace-question" value={question} onChange={e => setQuestion(e.target.value)} placeholder="Enter a fictional review question" /><Button onClick={() => { if (question.trim()) { setQuestionSent(true); setQuestion('') } }}><Send size={15} /> Submit question</Button>{questionSent && <p role="status" className="success-text"><Check size={15} /> Sent for internal assignment.</p>}</div>
          </> : <div className="empty-state">Select a document to preview.</div>}
        </aside>
      </div>
    </div>
  </div></section>
}

type Access = 'No access' | 'View' | 'Watermarked' | 'Download' | 'Upload' | 'Questions' | 'Administrator'
function Permissions() {
  const groups = ['Internal Deal Team', 'Executive Reviewers', 'Buyer or Investor Group', 'External Counsel', 'Financial Advisors', 'Auditors', 'Restricted Review Group']
  const folders = ['Corporate', 'Financial', 'Commercial', 'Legal', 'Restricted']
  const options: Access[] = ['No access', 'View', 'Watermarked', 'Download', 'Upload', 'Questions', 'Administrator']
  const [group, setGroup] = useState(groups[2])
  const [permissions, setPermissions] = useState<Record<string, Access>>({ Corporate: 'View', Financial: 'Watermarked', Commercial: 'View', Legal: 'No access', Restricted: 'No access' })
  const [pending, setPending] = useState<Record<string, Access> | null>(null)
  const [applied, setApplied] = useState(false)
  const warning = Object.entries(pending ?? permissions).filter(([f, p]) => (f === 'Restricted' && p !== 'No access') || p === 'Download')
  return <section className="section pale"><div className="container wide">
    <SectionIntro eyebrow="Permission matrix" title="Preview disclosure before applying a change." copy="This demonstration does not change real access." />
    <div className="permission-toolbar"><label>Participant group<select value={group} onChange={e => setGroup(e.target.value)}>{groups.map(g => <option key={g}>{g}</option>)}</select></label><div><Clock3 /> Access review due in 3 days</div></div>
    <div className="permission-layout">
      <div className="permission-table">
        <div className="permission-head"><span>Folder</span>{options.map(o => <span key={o}>{o}</span>)}</div>
        {folders.map(folderName => <div className="permission-row" key={folderName}><strong><Folder size={16} />{folderName}</strong>{options.map(option => <label key={option}><input type="radio" name={folderName} checked={(pending ?? permissions)[folderName] === option} onChange={() => { setPending({ ...(pending ?? permissions), [folderName]: option }); setApplied(false) }} /><span><span className="sr-only">{option} for {folderName}</span></span></label>)}</div>)}
      </div>
      <aside className="permission-preview">
        <Label tone="blue">Participant preview</Label><h3>{group}</h3>
        {folders.map(f => <div key={f}><span><Folder size={16} />{f}</span><Label tone={(pending ?? permissions)[f] === 'No access' ? 'neutral' : 'good'}>{(pending ?? permissions)[f]}</Label></div>)}
        {warning.length > 0 && <div className="warning-box"><AlertTriangle /><div><strong>Review recommended</strong><p>{warning.map(([f, p]) => `${f}: ${p}`).join(' · ')} may expose or permit download of restricted material.</p></div></div>}
        {pending && <div className="confirm-box"><strong>Confirm fictional changes?</strong><p>Review newly exposed folders, download rights, access expiry, and conflicting permissions.</p><div><Button variant="secondary" onClick={() => setPending(null)}>Cancel</Button><Button onClick={() => { setPermissions(pending); setPending(null); setApplied(true) }}>Apply in demo</Button></div></div>}
        {applied && <p role="status" className="success-text"><CheckCircle2 /> Demonstration permissions applied.</p>}
      </aside>
    </div>
  </div></section>
}

function RequestTracker() {
  const [rows, setRows] = useState(initialRequests)
  const [filter, setFilter] = useState('Any')
  const [selected, setSelected] = useState(0)
  const [note, setNote] = useState('')
  const [response, setResponse] = useState('')
  const shown = rows.filter(r => filter === 'Any' || r.workstream === filter)
  const item = shown[selected] ?? shown[0]
  const update = (field: 'owner' | 'status', value: string) => setRows(rows.map(r => r.id === item.id ? { ...r, [field]: value } : r))
  useEffect(() => setSelected(0), [filter])
  return <section className="section"><div className="container wide">
    <SectionIntro eyebrow="Diligence request tracker" title="Keep requests, evidence, ownership, and release status connected." />
    <DemoLabel />
    <div className="tracker-shell">
      <div className="tracker-tools"><div><Filter size={17} /> Workstream <select value={filter} onChange={e => setFilter(e.target.value)}><option>Any</option><option>Financial</option><option>Legal</option><option>Corporate</option><option>Technology</option></select></div><Button variant="secondary"><Plus size={16} /> New request</Button></div>
      <div className="tracker-content">
        <div className="request-table">
          <div className="request-head"><span>Request</span><span>Workstream</span><span>Owner</span><span>Due</span><span>Status</span></div>
          {shown.map((r, i) => <button className={cn(selected === i && 'active')} onClick={() => setSelected(i)} key={r.id}><span><strong>{r.id}</strong>{r.request}</span><span>{r.workstream}</span><span>{r.owner}</span><span>{r.due}</span><span><Label tone={r.status.includes('Approved') ? 'good' : r.priority === 'High' ? 'warning' : 'neutral'}>{r.status}</Label></span></button>)}
        </div>
        {item && <aside className="request-drawer">
          <Label tone="blue">{item.id}</Label><h3>{item.request}</h3>
          <div className="drawer-stats"><span><Link2 />{item.docs} linked documents</span><span><MessageSquareText />{item.questions} open questions</span></div>
          <label>Assigned owner<select value={item.owner} onChange={e => update('owner', e.target.value)}><option>Finance lead</option><option>Legal lead</option><option>Room admin</option><option>Technology lead</option></select></label>
          <label>Status<select value={item.status} onChange={e => update('status', e.target.value)}>{['Not started', 'In progress', 'Ready for internal review', 'Approved for release', 'Shared', 'Clarification requested', 'Closed'].map(s => <option key={s}>{s}</option>)}</select></label>
          <div className="internal-note"><div><LockKeyhole /> Internal note <Label>Not visible externally</Label></div><textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Add an internal note" /></div>
          <label>External response draft<textarea value={response} onChange={e => setResponse(e.target.value)} placeholder="Prepare a fictional response" /></label>
          <Button onClick={() => response && update('status', 'Ready for internal review')}><Send size={15} /> Submit for approval</Button>
        </aside>}
      </div>
    </div>
  </div></section>
}

function QAWorkflow() {
  const steps = ['External question', 'Internal assignment', 'Draft response', 'Legal review', 'Approval', 'Authorized release']
  const [step, setStep] = useState(2)
  const [audience, setAudience] = useState('Requesting participant only')
  return <section className="section navy-section"><div className="container">
    <SectionIntro eyebrow="Questions and responses" title="Move an external question through controlled internal review." copy="Internal discussion remains separated from external participant views." />
    <div className="qa-shell">
      <div className="qa-flow">{steps.map((s, i) => <div className={cn(i <= step && 'active')} key={s}><span>{i < step ? <Check /> : i + 1}</span><small>{s}</small></div>)}</div>
      <div className="qa-grid">
        <div className="external-card"><Label tone="blue">External question</Label><h3>Is there a current version of the material contract register?</h3><p>Submitted by Buyer or Investor Group · Related to Material contract register.pdf</p><div className="published-preview"><Eye /> External view includes the question and released response only.</div></div>
        <div className="internal-card"><div className="internal-header"><LockKeyhole /> Internal work area <Label>Hidden from external users</Label></div><label>Assigned responder<select><option>Legal lead</option><option>Finance lead</option></select></label><label>Draft response<textarea defaultValue="A current placeholder register is available for authorized review. Supporting items remain subject to release approval." /></label><div className="internal-thread"><strong>Internal discussion</strong><p>Confirm release scope and selected supporting documents before approval.</p></div></div>
        <div className="release-card"><Label tone={step >= 4 ? 'good' : 'warning'}>{step >= 4 ? 'Approved' : 'Review pending'}</Label><h3>Release control</h3><label>Release response to<select value={audience} onChange={e => setAudience(e.target.value)}><option>Requesting participant only</option><option>Selected participant groups</option><option>Authorized external participants</option></select></label><p>Current audience: <strong>{audience}</strong></p><Button onClick={() => setStep(s => Math.min(s + 1, 5))} disabled={undefined}>{step < 4 ? 'Advance human review' : step === 4 ? 'Release approved response' : 'Response released'} <ArrowRight size={16} /></Button></div>
      </div>
    </div>
  </div></section>
}

function Redaction() {
  const regions = [
    ['Personal information', 'Header reference', true], ['Bank account details', 'Payment instructions placeholder', true],
    ['Commercially sensitive information', 'Pricing section', false], ['Privileged content', 'Review note', false],
  ]
  const [decisions, setDecisions] = useState<Record<number, boolean>>(Object.fromEntries(regions.map((_, i) => [i, false])))
  const [approved, setApproved] = useState(false)
  return <section className="section"><div className="container">
    <SectionIntro eyebrow="Redaction workspace" title="Review suggested sensitive regions before release." copy="AI may suggest possible sensitive content; an authorized reviewer confirms each redaction." />
    <DemoLabel />
    <div className="redaction-grid">
      <div className="redaction-doc"><div className="doc-toolbar"><FileText /> Original fictional document <Label>v2</Label></div><div className="document-page"><h4>COMMERCIAL SCHEDULE — PLACEHOLDER</h4><p>This fictional document contains generic text for interaction testing.</p><div className={cn('sensitive-line', decisions[0] && 'redacted')}>PERSONAL INFORMATION PLACEHOLDER</div><p>No real customer, employee, banking, or transaction information is shown.</p><div className={cn('sensitive-line', decisions[1] && 'redacted')}>PAYMENT INFORMATION PLACEHOLDER</div><p>Generic commercial terms appear in this illustrative section.</p></div></div>
      <div className="suggestion-panel"><div className="panel-title"><WandSparkles /> Suggested regions</div>{regions.map(([category, location, confidence], i) => <div className="suggestion" key={category as string}><div><strong>{category as string}</strong><small>{location as string} · {confidence ? 'Review suggested' : 'Optional review'}</small></div><button aria-pressed={decisions[i]} onClick={() => { setDecisions({ ...decisions, [i]: !decisions[i] }); setApproved(false) }}>{decisions[i] ? <><Check /> Confirmed</> : 'Review'}</button></div>)}<label>Redaction reason<select><option>Personal information</option><option>Bank account details</option><option>Commercially sensitive information</option><option>Privileged content</option><option>Employee information</option><option>Customer information</option></select></label><Button onClick={() => setApproved(true)}><UserRoundCheck /> Approve reviewed version</Button>{approved && <p role="status" className="success-text"><CheckCircle2 /> Human-reviewed version approved in this demo.</p>}</div>
    </div>
    <div className="required-statement"><AlertTriangle /> Suggested redactions require authorized review before a document is released.</div>
  </div></section>
}

function AISection() {
  const queries = ['Show the latest audited financial statements.', 'Which material contracts have change-of-control provisions?', 'Find documents related to outstanding debt.', 'Show open finance diligence requests.', 'What documents were added this week?']
  const [query, setQuery] = useState(queries[0])
  const [searched, setSearched] = useState(true)
  const capabilitiesAI = ['Classify uploaded documents', 'Suggest folder placement', 'Identify possible duplicate versions', 'Detect potentially sensitive information', 'Summarize a permitted document', 'Compare document versions', 'Identify missing checklist items', 'Suggest related documents', 'Prepare a response draft', 'Summarize open questions', 'Support natural-language search']
  const controls = ['Processes only content the user is authorized to access', 'Search respects document and folder permissions', 'Summaries link to source documents', 'Generated content is identified as a draft', 'Redactions require human confirmation', 'External responses require authorized approval', 'Model and prompt versions may be recorded when configured', 'Customer data is not used for external model training without authorization']
  return <section id="ai" className="section ai-section"><div className="container">
    <SectionIntro eyebrow="AI-assisted diligence" title="AI assistance within the boundaries of each participant’s access." copy="AI can support preparation and review. Human reviewers remain responsible for disclosures, redactions, responses, and transaction decisions." />
    <div className="ai-process" aria-label="Controlled AI process">{['Permitted documents', 'AI-assisted analysis', 'Source-linked result', 'Human review', 'Authorized action', 'Recorded history'].map((s, i) => <div key={s}><span>{i + 1}</span>{s}{i < 5 && <ArrowRight />}</div>)}</div>
    <div className="ai-grid">
      <div className="ai-search-card">
        <div className="ai-card-title"><Sparkles /> Natural-language search <Label tone="blue">Fictional</Label></div>
        <div className="search-input"><Search /><input value={query} onChange={e => setQuery(e.target.value)} aria-label="Fictional natural-language search" /><Button onClick={() => setSearched(true)}>Search</Button></div>
        <div className="query-chips">{queries.map(q => <button key={q} onClick={() => { setQuery(q); setSearched(true) }}>{q}</button>)}</div>
        {searched && <div className="search-results">
          <div className="summary-label"><Bot /> AI-assisted summary — verify against source documents.</div>
          <p>Permission-filtered results include a current fictional index and related review request. No legal, accounting, valuation, or investment conclusion is provided.</p>
          <a href="#workspace"><FileText /> Historical financial index.xlsx <span>Source · Financial / permitted</span></a>
          <a href="#workspace"><FileCheck2 /> FIN-014 current statement index <span>Source · Request / permitted</span></a>
        </div>}
      </div>
      <div className="ai-capabilities"><h3>Assistance patterns</h3><div>{capabilitiesAI.map(c => <span key={c}><Check />{c}</span>)}</div></div>
    </div>
    <div className="guardrail-grid">{controls.map(c => <div key={c}><ShieldCheck />{c}</div>)}<div><AlertTriangle /> AI does not provide legal, tax, accounting, or investment advice, or decide whether a transaction should proceed.</div></div>
  </div></section>
}

function ActivityCenter() {
  const events = [
    ['Participant sign-in', 'External reviewer', 'Expected activity', '12 min'],
    ['Restricted folder access', 'Buyer group', 'Access denied', '24 min'],
    ['Permission changed', 'Room administrator', 'Review recommended', '41 min'],
    ['Watermarked document viewed', 'External counsel', 'Expected activity', '1 hr'],
    ['Response released', 'Transaction administrator', 'Expected activity', '2 hr'],
    ['Participant access', 'Financial advisors', 'Access expired', '3 hr'],
  ]
  const [filter, setFilter] = useState('Any activity')
  const visible = events.filter(e => filter === 'Any activity' || e[0] === filter)
  return <section className="section pale"><div className="container">
    <SectionIntro eyebrow="Activity and security center" title="Review participant and administrative events in context." copy="Ordinary activity is not characterized as harmful without supporting evidence." />
    <div className="activity-shell">
      <div className="activity-filters"><Filter /> <select value={filter} onChange={e => setFilter(e.target.value)}><option>Any activity</option>{events.map(e => <option key={e[0]}>{e[0]}</option>)}</select><select aria-label="Participant filter"><option>Any participant</option><option>External reviewer</option><option>Room administrator</option></select><select aria-label="Date filter"><option>Last 7 days</option><option>Today</option><option>Last 30 days</option></select></div>
      <div className="activity-list">{visible.map(([event, actor, status, time]) => <div key={event}><span className="event-icon">{status === 'Access denied' ? <AlertTriangle /> : <Activity />}</span><span><strong>{event}</strong><small>{actor}</small></span><Label tone={status === 'Expected activity' ? 'good' : status === 'Review recommended' ? 'warning' : 'neutral'}>{status}</Label><time>{time}</time></div>)}</div>
    </div>
  </div></section>
}

function Analytics() {
  const readiness = [{ name: 'Corp', value: 88 }, { name: 'Finance', value: 72 }, { name: 'Commercial', value: 64 }, { name: 'Legal', value: 81 }, { name: 'Tech', value: 57 }]
  const trend = [{ day: 'Mon', views: 18 }, { day: 'Tue', views: 34 }, { day: 'Wed', views: 26 }, { day: 'Thu', views: 48 }, { day: 'Fri', views: 39 }]
  return <section className="section"><div className="container">
    <SectionIntro eyebrow="Transaction analytics" title="See readiness, review activity, and pending decisions." />
    <DemoLabel>Illustrative analytics — not MTX or customer results.</DemoLabel>
    <div className="analytics-stats">{[['Documents awaiting approval', '6'], ['Open questions', '7'], ['Average response age', '2.4 days'], ['Expiring access', '3 groups']].map(([l, v]) => <div key={l}><span>{l}</span><strong>{v}</strong></div>)}</div>
    <div className="chart-grid">
      <figure><figcaption>Readiness by folder</figcaption><ResponsiveContainer width="100%" height={220}><BarChart data={readiness}><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="name" /><YAxis domain={[0, 100]} /><Tooltip /><Bar dataKey="value" fill="#1a8f85" radius={[5, 5, 0, 0]} /></BarChart></ResponsiveContainer><p className="chart-summary">Text summary: fictional folder readiness ranges from 57% to 88%; Technology has the most remaining checklist items.</p></figure>
      <figure><figcaption>Permitted participant activity</figcaption><ResponsiveContainer width="100%" height={220}><AreaChart data={trend}><defs><linearGradient id="area" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor="#2776a8" stopOpacity={0.35}/><stop offset="95%" stopColor="#2776a8" stopOpacity={0}/></linearGradient></defs><CartesianGrid strokeDasharray="3 3" vertical={false} /><XAxis dataKey="day" /><YAxis /><Tooltip /><Area type="monotone" dataKey="views" stroke="#2776a8" fill="url(#area)" /></AreaChart></ResponsiveContainer><p className="chart-summary">Text summary: fictional permitted document views vary across the selected week, peaking on Thursday.</p></figure>
    </div>
    <div className="analytics-bottom"><span><FileCheck2 /> Diligence requests: 5 in progress · 4 ready for review · 3 released</span><span><KeyRound /> Access review: 4 of 5 participant groups reviewed</span><span><History /> Closeout progress: not started</span></div>
  </div></section>
}

function Security() {
  const controls = ['Encryption in transit and at rest', 'Multifactor authentication support', 'Single sign-on integration', 'Role-based access', 'Least-privilege configuration', 'Time-bound access', 'Document-level controls', 'Dynamic watermarking', 'Redaction', 'Download and printing controls', 'Activity logging', 'Retention configuration', 'Backup and recovery', 'Monitoring', 'Data-residency configuration', 'Access recertification', 'Secure closeout']
  return <section id="security" className="section security-section"><div className="container">
    <div className="security-lead"><div><span className="eyebrow light">Security and governance</span><h2>Configurable control across the transaction lifecycle.</h2><p>MTX Finance Data Room provides configurable controls that can support an organization’s security, privacy, recordkeeping, and transaction-governance requirements.</p></div><div className="security-orbit"><ShieldCheck /><span>Identity</span><span>Access</span><span>Content</span><span>Activity</span></div></div>
    <div className="security-controls">{controls.map(c => <div key={c}><CheckCircle2 />{c}</div>)}</div>
    <p className="security-note">Control configuration, deployment architecture, data residency, and operating responsibilities depend on customer requirements. The product does not replace customer security, privacy, legal, or compliance review.</p>
  </div></section>
}

function Architecture() {
  const [active, setActive] = useState(0)
  return <section id="architecture" className="section"><div className="container">
    <SectionIntro eyebrow="Platform-neutral architecture" title="Fit the transaction workspace into the approved enterprise environment." copy="Select a layer to inspect its role. Actual architecture depends on customer security, privacy, data-residency, and transaction requirements." />
    <div className="architecture-layout">
      <div className="architecture-stack">{architecture.map(([title], i) => <button className={cn(active === i && 'active')} onClick={() => setActive(i)} key={title}><span>{i === 0 ? <CircleUserRound /> : i === 1 ? <Layers3 /> : i === 2 ? <Bot /> : i === 3 ? <Network /> : i === 4 ? <Database /> : i === 5 ? <ShieldCheck /> : <Settings2 />}</span>{title}<ChevronRight /></button>)}</div>
      <div className="architecture-detail"><Label tone="blue">Layer {active + 1}</Label><h3>{architecture[active][0]}</h3><p>{architecture[active][1]}</p><div className="architecture-boundary"><LockKeyhole /> Customer-approved deployment and access boundaries apply across this layer.</div></div>
    </div>
  </div></section>
}

function Integrations() {
  const cats = ['Enterprise identity providers', 'Multifactor authentication services', 'Document and content-management platforms', 'Electronic-signature services', 'CRM platforms', 'Financial and ERP systems', 'Accounting platforms', 'Records-management systems', 'Email and notification services', 'Security monitoring platforms', 'Data warehouses and analytics tools', 'Backup and archival services']
  return <section className="section pale"><div className="container">
    <SectionIntro eyebrow="Integration ecosystem" title="Connect through approved enterprise patterns." copy="Integration availability and implementation depend on customer systems and requirements; not every connector is prebuilt." />
    <div className="integration-map"><div className="integration-core"><span>MTX</span><strong>Finance Data Room</strong></div>{cats.map((c, i) => <div className={`integration-node node-${i % 4}`} key={c}><Link2 />{c}</div>)}</div>
    <div className="pattern-row"><strong>Supported patterns may include</strong>{['REST APIs', 'Events', 'Webhooks', 'Secure files', 'Identity federation', 'Approved middleware', 'Batch synchronization'].map(p => <span key={p}>{p}</span>)}</div>
    <p className="ownership-note"><ShieldCheck /> Customers retain ownership of documents, metadata, permissions, and transaction records.</p>
  </div></section>
}

function Configuration() {
  const types = {
    Acquisition: { folders: 'Corporate · Financial · Commercial · Legal', groups: 'Deal team · Buyer group · Counsel', checklist: 'Transaction readiness', approval: 'Owner → Legal → Release', retention: 'Customer-selected transaction profile' },
    Financing: { folders: 'Borrower · Financials · Debt · Collateral', groups: 'Borrower · Lenders · Advisors', checklist: 'Financing diligence', approval: 'Owner → Finance → Release', retention: 'Customer-selected financing profile' },
    'Grant review': { folders: 'Organization · Programs · Financials · Governance', groups: 'Program team · Reviewers · Board', checklist: 'Grant evidence', approval: 'Owner → Program lead → Release', retention: 'Customer-selected grant profile' },
  }
  const [type, setType] = useState<keyof typeof types>('Acquisition')
  const selected = types[type]
  return <section className="section"><div className="container">
    <SectionIntro eyebrow="Configuration studio" title="Adapt the workspace without rebuilding the product." copy="Illustrative configuration demonstration." />
    <div className="config-layout">
      <aside><label>Transaction type<select value={type} onChange={e => setType(e.target.value as keyof typeof types)}>{Object.keys(types).map(t => <option key={t}>{t}</option>)}</select></label><div className="config-options">{['Folder templates', 'Diligence checklists', 'Participant roles', 'Permission templates', 'Authentication requirements', 'Watermark rules', 'Download restrictions', 'Redaction reasons', 'Q&A approval paths', 'Response visibility', 'Notification rules', 'Access expiration', 'Retention settings', 'Closeout procedures', 'Reports and dashboards', 'Integration mappings'].map(x => <span key={x}><Settings2 />{x}</span>)}</div></aside>
      <div className="config-preview"><div className="preview-header"><WandSparkles /><div><small>Workspace preview</small><h3>{type}</h3></div><Label tone="good">Illustrative</Label></div>{Object.entries(selected).map(([key, value]) => <div className="config-line" key={key}><span>{key}</span><strong>{value}</strong></div>)}</div>
    </div>
  </div></section>
}

function Adoption() {
  const phases = [
    ['Prepare the Workspace', ['Select the transaction type', 'Configure the folder structure', 'Establish security requirements', 'Assign administrators', 'Import initial materials']],
    ['Open Controlled Review', ['Configure participant groups', 'Apply permissions', 'Invite authorized reviewers', 'Begin request and Q&A workflows', 'Monitor activity']],
    ['Manage Active Diligence', ['Release approved documents', 'Coordinate responses', 'Track workstreams', 'Review access', 'Monitor transaction readiness']],
    ['Close and Reuse', ['Revoke external access', 'Complete required exports', 'Apply retention rules', 'Preserve the authorized record', 'Reuse approved templates']],
  ]
  const [active, setActive] = useState(0)
  return <section id="adoption" className="section navy-section"><div className="container">
    <SectionIntro eyebrow="Modular adoption roadmap" title="Begin with one transaction and establish a reusable operating pattern." copy="Sequencing and controls depend on the transaction and customer policies." />
    <div className="roadmap-tabs" role="tablist">{phases.map(([title], i) => <button role="tab" aria-selected={active === i} onClick={() => setActive(i)} key={title as string}><span>Phase {i + 1}</span>{title as string}</button>)}</div>
    <div className="roadmap-panel"><div><Label tone="blue">Phase {active + 1}</Label><h3>{phases[active][0] as string}</h3><p>Configure the next operating boundary before expanding participant access or disclosure.</p></div><div>{(phases[active][1] as string[]).map(item => <span key={item}><CheckCircle2 />{item}</span>)}</div></div>
  </div></section>
}

function Delivery() {
  const cards = [
    ['Product', 'Reusable workspaces, document organization, permission management, diligence tracking, Q&A, redaction, activity reporting, templates, and administrative controls.', Layers3],
    ['Implementation Services', 'Requirements discovery, security design, configuration, identity integration, document migration, testing, training, deployment, and transaction setup.', Settings2],
    ['Managed Services', 'User administration, workspace support, monitoring, release coordination, reporting assistance, configuration changes, and authorized closeout support.', Users],
    ['Advisory Services', 'Data-room readiness assessment, document-index design, diligence process mapping, security planning, and transaction governance.', BookOpen],
  ]
  return <section className="section"><div className="container"><SectionIntro eyebrow="Product and delivery model" title="A reusable product, supported by defined service options." /><div className="delivery-grid">{cards.map(([title, copy, Icon], i) => <article className={cn(i === 0 && 'featured')} key={title as string}><Icon /><Label tone={i === 0 ? 'good' : 'neutral'}>{i === 0 ? 'Core offering' : 'Optional service'}</Label><h3>{title as string}</h3><p>{copy as string}</p></article>)}</div></div></section>
}

function Why() {
  const items = [
    ['Active transaction workspace', 'Bring document review, requests, Q&A, approvals, activity, and closeout into a governed operating flow.'],
    ['Granular disclosure controls', 'Configure access by participant, group, folder, document, action, and time period.'],
    ['Connected diligence requests and Q&A', 'Keep questions, evidence, ownership, review, approval, and release history connected.'],
    ['Human-reviewed AI assistance', 'Support permitted review tasks while people retain disclosure and decision responsibility.'],
    ['Platform and deployment flexibility', 'Align architecture with approved infrastructure, systems, identity, and data-residency needs.'],
    ['Reusable transaction templates', 'Adapt approved folder, checklist, role, and workflow patterns for future transactions.'],
  ]
  return <section className="section why-section"><div className="container"><SectionIntro eyebrow="Why MTX Finance Data Room" title="Designed around how controlled transactions move." align="center" /><div className="why-grid">{items.map(([title, copy], i) => <article key={title}><span>0{i + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
}

function FinalCTA({ onDemo }: { onDemo: () => void }) {
  return <section className="final-cta"><div className="container"><div><span className="eyebrow light">Start the conversation</span><h2>Move sensitive transactions forward with greater control.</h2><p>Explore how MTX Finance Data Room can help your organization prepare documents, manage participant access, coordinate diligence, and preserve a traceable transaction record.</p></div><div><Button onClick={onDemo}>Request a Product Demonstration <ArrowRight /></Button><Button variant="secondary" onClick={onDemo}>Discuss Your Transaction Requirements</Button></div></div></section>
}

function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialog = useRef<HTMLDivElement>(null)
  const closeButton = useRef<HTMLButtonElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  useEffect(() => {
    if (!open) return
    const previous = document.activeElement as HTMLElement
    closeButton.current?.focus()
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab' && dialog.current) {
        const items = Array.from(dialog.current.querySelectorAll<HTMLElement>('button, input, select, textarea, [href]')).filter(el => !el.hasAttribute('disabled'))
        const first = items[0], last = items[items.length - 1]
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', handler); document.body.style.overflow = ''; previous?.focus() }
  }, [open, onClose])
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    if (!String(form.get('email')).includes('@')) { setError('Enter a valid work email address.'); return }
    setError(''); setSubmitted(true)
  }
  if (!open) return null
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" ref={dialog}>
      <button ref={closeButton} className="modal-close" onClick={onClose} aria-label="Close demonstration request"><X /></button>
      {submitted ? <div className="confirmation" role="status"><span><CheckCircle2 /></span><h2 id="modal-title">Your demonstration request is ready.</h2><p>This prototype did not send, store, or transmit your information. In a production workflow, the request would move to an approved contact process.</p><Button onClick={() => { setSubmitted(false); onClose() }}>Close</Button></div> :
      <>
        <div className="modal-intro"><Label tone="blue">Product demonstration</Label><h2 id="modal-title">Discuss your transaction workspace.</h2><p>Fields are processed only in this browser session and are not sent, stored, or transmitted.</p></div>
        <form onSubmit={submit} noValidate>
          <div className="form-grid">
            <label>Name *<input name="name" required autoComplete="name" /></label>
            <label>Organization *<input name="organization" required autoComplete="organization" /></label>
            <label>Work email *<input name="email" type="email" required autoComplete="email" aria-describedby={error ? 'form-error' : undefined} /></label>
            <label>Role *<input name="role" required /></label>
            <label>Transaction type *<select name="type" required><option value="">Select</option><option>Mergers and acquisitions</option><option>Private equity</option><option>Fundraising</option><option>Financing</option><option>Audit and governance</option><option>Nonprofit and grant diligence</option></select></label>
            <label>Expected participant range<select name="participants"><option>Fewer than 25</option><option>25–100</option><option>More than 100</option><option>Not yet known</option></select></label>
            <label>Approximate document volume<select name="volume"><option>Fewer than 500</option><option>500–5,000</option><option>More than 5,000</option><option>Not yet known</option></select></label>
            <label>Current data-room approach<select name="approach"><option>Shared folders</option><option>Existing data-room product</option><option>Document-management system</option><option>Under review</option></select></label>
          </div>
          <label>Primary requirement *<input name="requirement" required placeholder="e.g., controlled external diligence" /></label>
          <label>Optional message<textarea name="message" rows={3} /></label>
          {error && <p className="form-error" id="form-error" role="alert">{error}</p>}
          <div className="modal-actions"><span><LockKeyhole /> Prototype only — no submission leaves this page.</span><Button type="submit">Prepare demonstration request <ArrowRight /></Button></div>
        </form>
      </>}
    </div>
  </div>
}

function Footer() {
  return <footer><div className="container"><div><span className="brand-mark">MTX</span><strong>Finance Data Room</strong><p>A controlled workspace for sensitive transaction review.</p></div><div><a href="#product">Product</a><a href="#security">Security</a><a href="#architecture">Architecture</a><a href="#top">Back to top</a></div><small>Prototype uses fictional information. Deployment architecture and data residency depend on customer requirements.</small></div></footer>
}

export default App
