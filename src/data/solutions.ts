import type { SolutionBlueprint } from '../types';

export const solutionsData: SolutionBlueprint[] = [
  {
    id: 'revenue-intelligence',
    title: 'Autonomous Revenue & Deal Intelligence Engine',
    eyebrow: 'FLAGSHIP ARCHITECTURE 01',
    summary: 'A deterministic multi-agent pipeline that autonomously conducts deep account reconnaissance, parses RFP specs against institutional past performance, drafts 90% compliant proposals, and prepares live executive negotiation dossiers.',
    image: '/flagship_revenue_engine.jpg',
    timeframe: '6–8 Week Enterprise Deployment',
    techStack: ['Claude 3.5 Sonnet Engine', 'LangGraph Deterministic Graph', 'Qdrant Vector DB', 'PostgreSQL Audit Store'],
    inputStreams: [
      'Inbound RFPs & Vendor Portal Webhooks',
      'SEC Edgar, Companies House & News APIS',
      'Client Email Threads & Meeting Audio Transcripts',
      'Historical Win/Loss Proposal Repository'
    ],
    reasoningEngine: [
      'Deconstructs multi-stage RFP clauses with zero LLM hallucination leeway',
      'Performs cross-vector past performance synthesis matching team bios and margin profiles',
      'Generates calibrated pricing matrices verified against contractual guardrails',
      'Dispatches instant executive escalation alerts for non-standard indemnities'
    ],
    outputSurfaces: [
      'Executive Deal Briefs (Slack & Webhooks)',
      'Formatted Word/PDF RFP Deliverables',
      'Dynamic Live Negotiation Dossiers with Partner Counterpoints',
      'Real-time Bid/No-Bid Decision Matrix with Margin Thresholds'
    ],
    enterpriseIntegrations: ['Salesforce CRM', 'HubSpot Enterprise', 'Slack API', 'SharePoint Online', 'PostgreSQL', 'Google Drive'],
    metrics: [
      { label: 'RFP Turnaround Acceleration', value: '85%' },
      { label: 'Weekly Partner Hours Saved', value: '42 hrs' },
      { label: 'Proposal Win-Rate Lift', value: '+34%' }
    ]
  },
  {
    id: 'whatsapp-agent',
    title: 'Autonomous WhatsApp Sales & Appointment Booking Agent',
    eyebrow: 'FLAGSHIP ARCHITECTURE 02',
    summary: 'A production-grade, full-stack WhatsApp autonomous sales & booking agent. Powered by structured function calling, token-budgeted sliding context windows, anti-ban outbound lead ingestion, 1-click live human takeover, and real-time Google Calendar scheduling.',
    image: '/flagship_whatsapp_agent.jpg',
    timeframe: '3–4 Week Enterprise Deployment',
    techStack: ['Meta WhatsApp Cloud API', 'Groq / Gemini Tool Engine', 'Prisma SQLite/PostgreSQL', 'Google Calendar Sync API'],
    inputStreams: [
      'Meta WhatsApp Cloud Webhooks & Simulator Pipe',
      'Excel & CSV Bulk Lead Ingestion (SheetJS)',
      'Google Calendar Free/Busy Availability API',
      'Knowledge Base Catalog & FAQ Rules Engine'
    ],
    reasoningEngine: [
      'Deterministic 5-tool execution (recommend_service, get_available_slots, book_appointment, request_human_intervention, mark_not_interested)',
      'Token economy manager (~250 token base prompt with 6-message sliding context window)',
      'Paced anti-ban campaign dispatcher with 5–12s jitter human-rate throttling',
      'Instant human takeover hub with 1-click AI pause/resume state machine'
    ],
    outputSurfaces: [
      'WhatsApp Web Desktop Theme & Business Mobile Simulator',
      'Google Calendar Appointment Bookings & Slot Modal',
      'Real-Time Lead Funnel Analytics & Pipeline Stage Table',
      'Live Specialist Human Intervention Escalation Desk'
    ],
    enterpriseIntegrations: ['Meta WhatsApp API', 'Google Calendar API', 'SheetJS (CSV/Excel)', 'Prisma ORM', 'Groq / Gemini AI', 'Meta Webhooks'],
    metrics: [
      { label: 'Lead-to-Booking Lift', value: '3.8x' },
      { label: 'Avg AI Response Speed', value: '< 3.2s' },
      { label: 'Human Takeover Accuracy', value: '100%' }
    ]
  },
  {
    id: 'document-copilot',
    title: 'Autonomous Knowledge & Document Operations Copilot',
    eyebrow: 'FLAGSHIP ARCHITECTURE 03',
    summary: 'Turns dense corporate knowledge bases, historical engagement reports, contracts, and regulatory filings into an active, deterministic reasoning companion for your high-billing subject matter experts.',
    image: '/flagship_doc_copilot.jpg',
    timeframe: '5–7 Week Enterprise Deployment',
    techStack: ['Hybrid Dense/Sparse Vector Search', 'Unstructured.io Parsing Engine', 'LlamaIndex Enterprise', 'Role-Based ACL Security'],
    inputStreams: [
      'Multi-Terabyte Document Repositories (PDF, DOCX, XLSX)',
      'Legacy ERP Data Extracts & Financial Statements',
      'Master Service Agreements & Vendor Statements of Work',
      'Internal SOPs, IP Guidelines & Governance Frameworks'
    ],
    reasoningEngine: [
      'Multi-hop citation verification with exact page and clause reference anchors',
      'Contradiction detection across legacy amendments and current operating terms',
      'Automatic redlining against firm-approved legal playbook standards',
      'Zero training on client data with cryptographically verified ephemeral sandboxes'
    ],
    outputSurfaces: [
      'Interactive Enterprise Audit Cockpit',
      'Automated Compliance & Redline Matrices',
      'Instant Search with Cited Evidence Cards',
      'Scheduled Weekly Institutional Knowledge Summaries'
    ],
    enterpriseIntegrations: ['Microsoft 365', 'Box Enterprise', 'Notion', 'Confluence', 'Snowflake', 'Custom S3 Buckets'],
    metrics: [
      { label: 'Audit Verification Speed', value: '12x' },
      { label: 'Citation Source Accuracy', value: '99.8%' },
      { label: 'Contract Review Latency Cut', value: '78%' }
    ]
  }
];
