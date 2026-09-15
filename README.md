# MTX Finance Data Room

Interactive React prototype for a governed financial transaction workspace. The page demonstrates document organization, participant access, diligence requests, Q\&A, redaction review, activity oversight, permission\-bound AI assistance, and transaction closeout.

## Local setup

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
npm run qa
npm run preview
```

`npm run qa` expects the local Vite server at `http://127.0.0.1:5173/MTXFinanceDataRoom/`. It checks desktop, tablet, and mobile layouts; keyboard modal behavior; selected interactions; console errors; and serious or critical automated accessibility findings. Set `QA_URL` to test another local URL.

## Technical foundation

* React and TypeScript
* Vite with the repository base path `/MTXFinanceDataRoom/`
* Lucide icons
* Recharts for two analytics views with accompanying text summaries
* Local CSS and SVG artwork
* Local fictional data only
* No backend, database, authentication flow, external API call, or submitted form transport

## Fictional\-data controls

Interface data is created for demonstration. It uses generic transaction names, placeholder files, generic participant roles, and non\-sensitive document previews. Analytics are labeled as illustrative rather than MTX or customer results. The demonstration request form does not send, store, or transmit entered information.

Do not add customer documents, recognizable transaction details, credentials, personal information, financial account details, or secrets to this repository.

## Security assumptions

This prototype illustrates configurable controls; it does not implement production authentication, authorization, encryption, storage, logging, malware scanning, retention, or integration services. Permission changes, response releases, and redaction approvals affect browser state only.

Production architecture, control configuration, data residency, integrations, and operational responsibilities depend on customer requirements and approved infrastructure. AI examples remain within the fictional user’s permitted sources, link to source items, identify generated text as a draft or assisted summary, and require human review for disclosure actions.

## GitHub Pages

The deployment workflow in `.github/workflows/deploy-pages.yml` builds the project and publishes `dist`. Repository settings must use **GitHub Actions** as the Pages source. The configured site path is:

`https://g4gaurang.github.io/MTXFinanceDataRoom/`

The app uses in\-page anchors rather than client\-side routes, so refreshes do not require a fallback route.