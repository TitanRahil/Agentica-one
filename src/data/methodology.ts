import type { MethodologyStage } from '../types';

export const methodologyStages: MethodologyStage[] = [
  {
    step: '01',
    phase: 'DISCOVERY & ARCHITECTURAL AUDIT',
    duration: 'Week 1–2',
    name: 'Bottleneck Mapping & System Topology',
    description: 'We do not start with code or prompt writing. We conduct forensic workflow audits across your senior teams, inspecting knowledge flows, data friction points, API access boundaries, and security perimeters.',
    deliverables: [
      'Comprehensive Workflow Friction Map & ROI Model',
      'System Architecture Blueprint (Nodes, State Machines, Fallbacks)',
      'Security, Privacy & Zero-Data-Retention Compliance Charter',
      'Deterministic Success Gate Metrics'
    ],
    gateGuarantee: 'Formal Architecture Sign-Off before a single production line is committed.'
  },
  {
    step: '02',
    phase: 'BESPOKE AGENTIC ENGINEERING',
    duration: 'Week 3–5',
    name: 'State Machine & Multi-Agent Swarm Build',
    description: 'We construct your custom multi-agent architecture using deterministic graph frameworks (LangGraph, Temporal, FastAPI). Every agent is equipped with strict validation gates, human-in-the-loop triggers, and fallback fail-safes.',
    deliverables: [
      'Isolated Private VPC / Dedicated Tenant Deployment',
      'Custom Multi-Agent State Graph Implementation',
      'Bidirectional Enterprise API Connectors (CRM, ERP, Files)',
      'Deterministic Guardrail & Redline Engine Integration'
    ],
    gateGuarantee: '100% test coverage on edge cases and contractually bounded error tolerances.'
  },
  {
    step: '03',
    phase: 'SANDBOX & SHADOW DEPLOYMENT',
    duration: 'Week 6–7',
    name: 'Parallel Run & Empirical Tuning',
    description: 'Your agents run in shadow mode alongside your live human team on real-world workloads. Outputs are compared side-by-side, latency is benchmarked, and the deterministic feedback loop is honed.',
    deliverables: [
      'Real-time Telemetry Dashboard (Accuracy, Latency, Token Cost)',
      'Shadow Mode Validation Report & Error Root-Cause Log',
      'User Acceptance Testing with Senior Stakeholders',
      'Human-in-the-Loop Approval Escalation Calibration'
    ],
    gateGuarantee: '99%+ operational fidelity required to authorize full production switchover.'
  },
  {
    step: '04',
    phase: 'PRODUCTION HANDOFF & EVOLUTION',
    duration: 'Week 8 & Ongoing',
    name: 'Autonomous Operations & Model Evolution',
    description: 'Full production cutover with continuous monitoring, model upgrades, and dedicated engineering support. Your firm maintains 100% intellectual property ownership of all custom graph architectures and workflows.',
    deliverables: [
      'Full Source Code & Architecture IP Transfer',
      'Executive Operations Playbook & Team Training',
      '24/7 Production Incident SLA & Health Monitoring',
      'Quarterly Model Refresh & Tool Capability Upgrades'
    ],
    gateGuarantee: 'Contractually guaranteed zero-pitch support and dedicated senior architect access.'
  }
];

export const securityStandards = [
  {
    title: 'Zero Data Retention (ZDR)',
    description: 'Your proprietary operational data, customer records, and internal IP never enter public training sets or persistent external caches. All data is processed ephemerally with cryptographic proof.',
    badge: 'SOC2 Type II Aligned'
  },
  {
    title: 'Dedicated VPC & On-Premises',
    description: 'Deploy in your existing AWS, GCP, Azure private VPC or dedicated single-tenant infrastructure with strict IAM role separation, IP allowlisting, and enterprise KMS encryption.',
    badge: 'Private Tenant'
  },
  {
    title: 'Deterministic Guardrails',
    description: 'We do not rely on hopeful system prompts. Every agent decision passes through rigid schema validators, Pydantic type models, and deterministic state gates that halt anomalies before execution.',
    badge: 'Zero-Hallucination Gate'
  },
  {
    title: 'Human-in-the-Loop (HITL) Controls',
    description: 'Define exact dollar amounts, risk thresholds, or high-consequence actions where an agent MUST halt execution and request explicit Slack/Teams approval from a human partner.',
    badge: 'Executive Oversight'
  }
];
