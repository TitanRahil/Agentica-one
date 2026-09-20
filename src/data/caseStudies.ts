import type { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'b2b-specialized-advisory',
    clientType: '35-Person Specialized B2B Advisory Firm',
    industry: 'Management & Financial Advisory ($8M ARR)',
    timeframe: '6-Week Rapid Deployment',
    headline: 'Saved 42 partner hours per week and increased proposal turnaround velocity by 85%.',
    challenge: 'Managing Partners and Practice Leads were burning 15+ hours weekly manually extracting data from 120-page RFP documents, writing repetitive methodology chapters, and calculating staffing margin models by hand, creating massive delivery bottlenecks.',
    architecture: {
      title: 'Agentica Multi-Stage RFP Synthesis & Pricing Engine',
      description: 'A deterministic 4-agent LangGraph system that ingests client RFPs, performs historical win/loss retrieval via vector search, generates custom methodology matrices, and enforces strict partner billing rate guardrails.',
      nodes: ['RFP Clause Extraction Agent', 'Past Performance Vector Ranker', 'Staffing Margin Calculator', 'Compliance Redline Gate']
    },
    metrics: [
      { label: 'Weekly Partner Hours Saved', value: '42 hrs', sublabel: 'Direct billable capacity reclaimed' },
      { label: 'RFP Turnaround Acceleration', value: '85%', sublabel: 'From 12 days down to 28 hours' },
      { label: 'Net Annual Value Reclaimed', value: '$340,000+', sublabel: 'Based on $380/hr partner rate' },
      { label: 'Proposal Win Rate Lift', value: '+28%', sublabel: 'Measured across 4 quarters' }
    ],
    quote: {
      text: "Agentica didn't give us a toy chatbot. They engineered an industrial-grade intelligence layer that thinks exactly like our senior partners. Our RFP response time collapsed from nearly two weeks to under two days.",
      author: 'Marcus Vance',
      role: 'Managing Partner, Vance & Holbrook Advisory'
    }
  },
  {
    id: 'scaleup-tech-consultancy',
    clientType: '$14M ARR High-Growth Tech Consultancy',
    industry: 'Cloud Infrastructure & Enterprise Modernization',
    timeframe: '8-Week Production Rollout',
    headline: '4.2x pipeline velocity with zero SDR headcount expansion across 14 enterprise verticals.',
    challenge: 'Sales engineers and account directors were drowning in CRM data upkeep, missing crucial client follow-up windows, and losing high-six-figure enterprise deals due to silent champion churn that took weeks to detect.',
    architecture: {
      title: 'Autonomous CRM & Real-Time Stakeholder Multi-Threading Engine',
      description: 'Temporal-orchestrated continuous listener that ingests Gong call audio, email exchanges, and calendar metadata, automatically keeping Salesforce 100% pristine while dispatching proactive executive interventions.',
      nodes: ['Conversational Intent Parser', 'Sentiment & Risk Evaluator', 'Auto-CRM Sync Worker', 'Executive Escalation Dispatcher']
    },
    metrics: [
      { label: 'Enterprise Pipeline Velocity', value: '4.2x', sublabel: 'Median days to close reduced by 44%' },
      { label: 'SDR Headcount Avoided', value: '4 Full-Time', sublabel: '$420,000 saved annually' },
      { label: 'CRM Accuracy & Hygiene', value: '99.4%', sublabel: 'Zero manual rep data entry needed' },
      { label: 'Prevented Deal Slippage', value: '$1.8M', sublabel: 'Identified before quarter close' }
    ],
    quote: {
      text: "Every AI agency we talked to tried to pitch us ChatGPT wrapper prompt chains. Agentica-One was the only team that came in with systems engineering discipline, deterministic state machines, and bulletproof security.",
      author: 'Elena Rostova',
      role: 'Chief Revenue Officer, HyperScale Systems'
    }
  },
  {
    id: 'private-equity-portfolio',
    clientType: 'Middle-Market Private Equity Operating Team',
    industry: 'Portfolio Operations ($650M AUM)',
    timeframe: '7-Week Pilot to Portfolio Rollout',
    headline: 'Automated 100-day value creation tracking across 12 mid-market portfolio companies.',
    challenge: 'Operating partners spent the first 3 weeks of every quarter manually chasing 12 disparate ERP, payroll, and CRM data exports, reconciling conflicting spreadsheet models, and generating delayed board decks.',
    architecture: {
      title: 'Agentica Autonomous Portfolio Telemetry & Financial Synthesis Swarm',
      description: 'Private VPC-hosted multi-agent cluster that continuously polls portfolio company data feeds, reconciles KPI anomalies against underwriting covenants, and produces instant board-ready executive summaries.',
      nodes: ['ERP Ledger Ingestor', 'Variance & Anomaly Auditor', 'Covenant Compliance Checker', 'Executive Brief Compiler']
    },
    metrics: [
      { label: 'Quarterly Close Latency', value: '-82%', sublabel: 'From 21 days down to 4 days' },
      { label: 'Data Reconciled Without Errors', value: '$84M', sublabel: 'Cross-company monthly transaction volume' },
      { label: 'Zero Data Retention Compliance', value: '100%', sublabel: 'Full SOC2 Type II & air-gapped isolation' },
      { label: 'Annual Labor Cost Saved', value: '$260,000', sublabel: 'In outsourced financial analyst hours' }
    ],
    quote: {
      text: "The speed and deterministic accuracy are unprecedented. We now have real-time visibility into operating margin slippage across our entire portfolio before the monthly board meetings even occur.",
      author: 'David K. Stern',
      role: 'Operating Partner, Crestview Capital Partners'
    }
  }
];
