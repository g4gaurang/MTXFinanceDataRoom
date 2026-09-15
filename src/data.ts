export type Challenge = {
  title: string
  problem: string
  people: string
  effect: string
  response: string
  measures: string[]
}

export const challenges: Challenge[] = [
  {
    title: 'Sensitive documents shared through email',
    problem: 'Financial, ownership, contract, and legal materials may move through channels with limited control after delivery.',
    people: 'Finance, legal, transaction administrators, and external reviewers',
    effect: 'Disclosure boundaries and access expiration become harder to manage.',
    response: 'Use role-based permissions, controlled viewing, watermarking, download restrictions, and access expiration in a governed workspace.',
    measures: ['External participants', 'Documents shared', 'Expired access', 'Permission exceptions'],
  },
  {
    title: 'Diligence materials are difficult to organize',
    problem: 'Large document sets may arrive with inconsistent names, duplicate versions, incomplete folders, and unclear ownership.',
    people: 'Contributors, administrators, advisors, and reviewers',
    effect: 'Teams spend review time resolving structure and ownership questions.',
    response: 'Use structured indexes, bulk upload, preserved folder hierarchies, metadata, version history, and assigned contributors.',
    measures: ['Document completeness', 'Duplicate indicators', 'Missing items', 'Awaiting classification'],
  },
  {
    title: 'Requests and responses live outside the room',
    problem: 'Diligence questions may be tracked through spreadsheets, email threads, or meeting notes.',
    people: 'Reviewers, response owners, legal teams, and advisors',
    effect: 'Status, source material, approval, and release history become disconnected.',
    response: 'Connect requests, questions, answers, supporting documents, ownership, approval, and status inside the workspace.',
    measures: ['Open questions', 'Response age', 'Awaiting approval', 'Resolved requests'],
  },
  {
    title: 'Permission structures become difficult to manage',
    problem: 'Buyers, investors, lenders, lawyers, auditors, and internal teams may require different access as a transaction changes.',
    people: 'Administrators, security teams, and transaction counsel',
    effect: 'Outdated or conflicting access can create avoidable disclosure risk.',
    response: 'Use participant groups, document-level permissions, role templates, access reviews, and time-bound access.',
    measures: ['Permission changes', 'Access-review status', 'Expired users', 'Restricted requests'],
  },
  {
    title: 'Leaders lack review visibility',
    problem: 'Transaction teams may not know which workstreams are incomplete or where responses are delayed.',
    people: 'Executives, transaction leaders, workstream owners, and advisors',
    effect: 'Incomplete work can remain hidden until a dependency becomes urgent.',
    response: 'Use progress views based on document readiness, open requests, response status, and assigned responsibility.',
    measures: ['Workstream completion', 'Overdue requests', 'Unanswered questions', 'Awaiting approval'],
  },
  {
    title: 'Transaction closeout is inconsistent',
    problem: 'Access, records, exports, retention, and archival decisions may be handled differently after each transaction.',
    people: 'Administrators, records teams, legal, security, and transaction leaders',
    effect: 'Residual access and unfinished recordkeeping tasks may remain after review ends.',
    response: 'Configure closeout workflows for access revocation, record preservation, retention, export, and authorized archival.',
    measures: ['Active users after closeout', 'Retained records', 'Pending exports', 'Closeout tasks'],
  },
]

export const useCases = {
  'Mergers & Acquisitions': {
    participants: ['Corporate development', 'Seller finance', 'Transaction counsel', 'Buyer group'],
    folders: ['Corporate records', 'Financial information', 'Material contracts', 'Commercial information', 'Technology & security'],
    checklist: ['Ownership records', 'Historical financials', 'Material agreements', 'Disclosure review'],
    questions: ['Which version is approved for release?', 'Are related supporting schedules available?'],
    phases: ['Preparation', 'Bidder review', 'Confirmatory diligence', 'Closeout'],
  },
  'Private Equity': {
    participants: ['Deal team', 'Operating partner', 'Management', 'External advisors'],
    folders: ['Investment overview', 'Financial performance', 'Ownership', 'Commercial diligence', 'Exit considerations'],
    checklist: ['Quality of earnings inputs', 'Management materials', 'Capitalization', 'Operating plans'],
    questions: ['What source supports this operating metric?', 'Has the ownership schedule been reviewed?'],
    phases: ['Screening', 'Diligence', 'Committee review', 'Closeout'],
  },
  Fundraising: {
    participants: ['Company leadership', 'Finance team', 'Investors', 'Transaction counsel'],
    folders: ['Investment materials', 'Historical financials', 'Forecasts', 'Capitalization', 'Use of funds'],
    checklist: ['Current pitch materials', 'Forecast assumptions', 'Capitalization review', 'Corporate records'],
    questions: ['Which forecast is current?', 'What material supports the use-of-funds plan?'],
    phases: ['Preparation', 'Investor access', 'Diligence', 'Closing'],
  },
  Financing: {
    participants: ['Borrower team', 'Lenders', 'Legal counsel', 'Financial advisors'],
    folders: ['Borrower information', 'Financial statements', 'Debt schedule', 'Collateral', 'Covenants'],
    checklist: ['Debt schedule', 'Collateral support', 'Forecasts', 'Legal documents'],
    questions: ['Does this replace the prior debt schedule?', 'Which covenant package applies?'],
    phases: ['Preparation', 'Lender review', 'Documentation', 'Closeout'],
  },
  'Audit & Governance': {
    participants: ['Finance team', 'Auditors', 'Board reviewers', 'Control owners'],
    folders: ['Financial records', 'Policies', 'Control evidence', 'Board materials', 'Findings'],
    checklist: ['Request list', 'Control evidence', 'Management responses', 'Remediation status'],
    questions: ['Who approved this control evidence?', 'Is a current policy version available?'],
    phases: ['Planning', 'Evidence collection', 'Review', 'Remediation'],
  },
  'Nonprofit & Grant': {
    participants: ['Fundraising team', 'Program leaders', 'Grant reviewers', 'Board representatives'],
    folders: ['Organization', 'Programs & outcomes', 'Financial statements', 'Governance', 'Grant requirements'],
    checklist: ['Program evidence', 'Funding sources', 'Governance records', 'Required policies'],
    questions: ['Which program period does this evidence cover?', 'Has the policy been approved?'],
    phases: ['Preparation', 'Funder review', 'Clarification', 'Record retention'],
  },
}

export const journey = [
  ['Prepare', 'Create the workspace, select a template, identify administrators, establish security settings, and assign document owners.', 'Administrators · transaction leaders', 'Templates · owner assignments · baseline settings', 'Confirm administrator roles and approved defaults', 'Workspace readiness · assigned owners'],
  ['Organize', 'Upload files, preserve folder structures, classify content, identify possible duplicates, add metadata, and flag missing materials.', 'Contributors · finance · legal', 'Bulk upload · metadata · version history', 'Review labels before wider access', 'Completeness · missing items · duplicates'],
  ['Configure Access', 'Create participant groups, set permissions, restrict sensitive folders, apply watermarks, and define access periods.', 'Administrators · security · legal', 'Group templates · document controls · expiry', 'Use least-privilege settings and review conflicts', 'Exceptions · expiring access'],
  ['Invite Participants', 'Verify authorized participants, require configured authentication, accept terms, and record access.', 'Administrators · external participants', 'Invitations · identity integration · terms', 'Validate recipient and authentication policy', 'Accepted invites · failed access'],
  ['Review & Respond', 'Review permitted documents, submit questions, manage request lists, and receive approved responses.', 'Reviewers · workstream owners', 'Q&A · request tracking · assignments', 'Keep internal discussion separate', 'Open questions · response age'],
  ['Manage Disclosure', 'Add information, maintain version history, redact sensitive content, approve releases, and notify authorized groups.', 'Legal · finance · administrators', 'Redaction · approvals · release controls', 'Require authorized human approval', 'Awaiting approval · releases'],
  ['Close & Retain', 'Revoke access, preserve records, export authorized materials, apply retention settings, and record closeout.', 'Administrators · records · legal', 'Revocation · exports · retention', 'Confirm residual access and export scope', 'Active users · closeout tasks'],
]

export const roles = [
  ['Transaction Administrator', 'Configure the room, organize documents, manage participants, monitor requests, approve releases, and coordinate closeout.'],
  ['Company Finance Team', 'Prepare financial statements, forecasts, supporting schedules, capitalization information, and finance responses.'],
  ['Legal & Compliance Team', 'Review disclosure materials, manage privilege-sensitive content, oversee redactions, and approve selected responses.'],
  ['Buyer or Investor', 'Review permitted materials, maintain a request list, submit questions, and monitor approved responses.'],
  ['Lender', 'Review permitted borrower, collateral, covenant, and supporting diligence materials.'],
  ['Auditor or Advisor', 'Review assigned evidence, submit requests, and track approved responses within engagement boundaries.'],
  ['Executive Sponsor', 'View transaction readiness, open decisions, access reviews, and closeout progress without internal reviewer detail.'],
  ['Security Administrator', 'Review authentication settings, participant access, unusual activity, permission changes, and access expiration.'],
]

export const capabilities = {
  'Workspace Preparation': ['Transaction templates', 'Folder structures', 'Bulk upload', 'Folder preservation', 'Drag-and-drop organization', 'Document metadata', 'Version history', 'Duplicate indicators', 'Document ownership', 'Readiness checklists'],
  'Access & Permissions': ['Participant groups', 'Role-based permissions', 'Folder-level access', 'Document-level access', 'Time-bound access', 'Multifactor authentication support', 'Single sign-on integration', 'Download restrictions', 'Print restrictions', 'Access revocation'],
  'Document Protection': ['Encryption configuration', 'Dynamic watermarking', 'Redaction workflows', 'View-only access', 'Sensitive-content labels', 'Version control', 'Download tracking', 'Retention settings', 'Backup configuration'],
  'Diligence Workflow': ['Request lists', 'Questions and responses', 'Assignments', 'Due dates', 'Response approval', 'Supporting-document links', 'Workstream status', 'Escalations', 'Internal collaboration', 'External communication boundaries'],
  'Reporting & Oversight': ['Participant activity', 'Document access', 'Open questions', 'Request status', 'Workstream progress', 'Permission changes', 'Security events', 'Closeout status', 'Audit exports'],
  'Administration & Integration': ['Workspace configuration', 'Identity integration', 'Document-system integration', 'Notification settings', 'Data export', 'API services', 'Records-management integration', 'Monitoring', 'Support administration'],
}

export const transactions = {
  'Acquisition diligence': {
    phase: 'Confirmatory review',
    folders: ['01 Corporate', '02 Financial', '03 Commercial', '04 Legal', '05 Technology'],
    documents: [
      ['Board approvals — placeholder.pdf', 'Corporate', 'View with watermark', 'v2'],
      ['Historical financial index.xlsx', 'Financial', 'View', 'v3'],
      ['Material contract register.pdf', 'Legal', 'View with watermark', 'v1'],
      ['Security overview — placeholder.pdf', 'Technology', 'View', 'v2'],
    ],
  },
  'Growth financing': {
    phase: 'Lender review',
    folders: ['01 Borrower', '02 Financials', '03 Debt', '04 Collateral', '05 Legal'],
    documents: [
      ['Borrower overview.pdf', 'Corporate', 'View', 'v1'],
      ['Financial statement index.xlsx', 'Financial', 'View with watermark', 'v2'],
      ['Debt schedule — placeholder.xlsx', 'Financial', 'Restricted', 'v3'],
      ['Covenant summary — draft.pdf', 'Legal', 'View', 'v1'],
    ],
  },
  'Nonprofit funding review': {
    phase: 'Evidence review',
    folders: ['01 Organization', '02 Programs', '03 Financials', '04 Governance', '05 Grant'],
    documents: [
      ['Organization overview.pdf', 'Corporate', 'View', 'v1'],
      ['Program evidence index.xlsx', 'Programs', 'View', 'v2'],
      ['Financial statement index.pdf', 'Financial', 'View with watermark', 'v1'],
      ['Governance policy register.pdf', 'Legal', 'View', 'v2'],
    ],
  },
}

export const requests = [
  { id: 'FIN-014', workstream: 'Financial', request: 'Provide the current historical financial statement index.', priority: 'High', owner: 'Finance lead', due: 'Sep 18', status: 'Ready for internal review', docs: 2, questions: 1, approval: 'Pending' },
  { id: 'LEG-008', workstream: 'Legal', request: 'Provide the material contract register and approved supporting items.', priority: 'High', owner: 'Legal lead', due: 'Sep 20', status: 'In progress', docs: 1, questions: 2, approval: 'Not submitted' },
  { id: 'COR-005', workstream: 'Corporate', request: 'Provide the corporate records index for the review period.', priority: 'Normal', owner: 'Room admin', due: 'Sep 22', status: 'Approved for release', docs: 3, questions: 0, approval: 'Approved' },
  { id: 'TEC-011', workstream: 'Technology', request: 'Provide the technology and security document index.', priority: 'Normal', owner: 'Technology lead', due: 'Sep 24', status: 'Clarification requested', docs: 1, questions: 1, approval: 'Needs update' },
]

export const architecture = [
  ['Participant Experiences', 'Administrator workspace · contributor workspace · external reviewer portal · executive dashboard · mobile-responsive access'],
  ['Product Services', 'Document management · permissions · Q&A · request tracking · redaction · search · reporting · closeout'],
  ['Intelligence Services', 'Classification · sensitive-content suggestions · summaries · comparison · search · checklist analysis'],
  ['Integration Layer', 'APIs · events · webhooks · secure file exchange · approved middleware · identity federation'],
  ['Enterprise Systems', 'Identity provider · document repositories · CRM · financial systems · electronic signature · records management · analytics'],
  ['Security & Governance', 'Encryption · access control · monitoring · retention · audit history · backup · recovery · data residency'],
  ['Deployment Foundation', 'Customer-approved public cloud · private cloud · virtual private environment · on-premises · hybrid infrastructure'],
]
