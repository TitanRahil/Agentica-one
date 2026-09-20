import React, { useState } from 'react';
import { Database, Cpu, ShieldCheck, Send, CheckCircle2, Activity, Clock, Sparkles } from 'lucide-react';

interface PipelineNode {
  id: string;
  step: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  telemetry: {
    latency: string;
    accuracy: string;
    throughput: string;
    activeModel: string;
  };
  signals: string[];
  description: string;
}

const pipelineNodes: PipelineNode[] = [
  {
    id: 'ingestion',
    step: 'NODE 01',
    title: 'Enterprise Ingestion',
    subtitle: 'Multi-Modal Stream Parser',
    icon: <Database className="w-4 h-4" />,
    telemetry: {
      latency: '24ms',
      accuracy: '100%',
      throughput: '12,400 events/hr',
      activeModel: 'Unstructured.io / Webhook Workers',
    },
    signals: [
      '14-page RFP PDF parsed into structured JSON clauses',
      'Bidirectional HubSpot email thread delta indexed',
      'Meeting transcript speaker-diarized with timestamps',
    ],
    description:
      'Continuous real-time listener that ingests raw PDFs, emails, CRM events, and ERP files, sanitizing PII before downstream routing.',
  },
  {
    id: 'reasoning',
    step: 'NODE 02',
    title: 'Autonomous Swarm',
    subtitle: 'LangGraph State Graph',
    icon: <Cpu className="w-4 h-4" />,
    telemetry: {
      latency: '180ms',
      accuracy: '99.4%',
      throughput: '1,850 inferences/hr',
      activeModel: 'Claude 3.5 Sonnet / DeepSeek Engine',
    },
    signals: [
      'Multi-hop cross-reference across 4 historical client win dossiers',
      'Margin optimization matrix computed for 4-tier staffing mix',
      'Competitive counterpoint generated against incumbent pricing',
    ],
    description:
      'Parallel agentic workers deconstruct requirements, retrieve historical institutional knowledge, and draft compliant deliverables.',
  },
  {
    id: 'guardrails',
    step: 'NODE 03',
    title: 'Deterministic Gate',
    subtitle: 'Zero-Hallucination Barrier',
    icon: <ShieldCheck className="w-4 h-4" />,
    telemetry: {
      latency: '12ms',
      accuracy: '100% Deterministic',
      throughput: 'Continuous Verification',
      activeModel: 'Pydantic Strict Schemas / ZDR Gate',
    },
    signals: [
      'Contractual indemnity risk flagged: clause exceeds $500k ceiling',
      'Human-in-the-Loop Partner alert dispatched to private Slack channel',
      'Schema validation passed with 0 unverified citations',
    ],
    description:
      'Hard mathematical & rule-based validation barrier. Ensures zero hallucinations, halts unauthorized actions, and triggers HITL approvals.',
  },
  {
    id: 'execution',
    step: 'NODE 04',
    title: 'Execution & Sync',
    subtitle: 'Enterprise API Delivery',
    icon: <Send className="w-4 h-4" />,
    telemetry: {
      latency: '45ms',
      accuracy: '99.9%',
      throughput: 'Real-time Webhook Push',
      activeModel: 'Salesforce REST / Slack API / M365',
    },
    signals: [
      'Executive deal briefing pushed to #revenue-leads channel',
      'Formatted Word/PDF RFP proposal committed to SharePoint folder',
      'Salesforce opportunity stage updated with automated next steps',
    ],
    description:
      'Deterministic output writers commit verified state changes to your systems of record, updating CRMs and notifying partners seamlessly.',
  },
];

export const AgentFlowVisualizer: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('reasoning');
  const activeNode = pipelineNodes.find((n) => n.id === activeNodeId) || pipelineNodes[1];

  return (
    <div className="w-full max-w-4xl mx-auto mt-0 mb-6 sm:mb-8">
      {/* Compact Container matching the Estimated Return on Architecture Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-midnight-900/35 hover:border-midnight-900/70 text-midnight shadow-[0_10px_35px_rgba(10,17,40,0.06)] hover:shadow-[0_15px_45px_rgba(10,17,40,0.12)] transition-all duration-300">
        {/* Eyebrow with Icon */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-midnight-500 font-semibold flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-icy-deep" />
            Deterministic Multi-Agent Execution Protocol
          </span>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-midnight-900/20 text-[11px] font-mono text-midnight shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>All Nodes Synchronized</span>
          </div>
        </div>

        {/* Big Text Telemetry Ticker (matches Annual Reclaimed Enterprise Value style) */}
        <div className="mt-4 pb-6 border-b border-midnight-900/20 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-midnight-500">
              Live State Graph Latency & Reliability Floor
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-4xl sm:text-5xl font-heading font-bold text-midnight tracking-tight">
                {activeNode.telemetry.latency}
              </span>
              <span className="text-xs sm:text-sm font-mono text-midnight-500 font-semibold">
                / {activeNode.telemetry.accuracy}
              </span>
            </div>
          </div>
          <div className="text-xs font-mono text-midnight-700 bg-white/95 px-3 py-1.5 rounded-xl border border-midnight-900/20 shadow-2xs self-start sm:self-auto flex items-center gap-1.5">
            <span className="text-midnight-400">{activeNode.step}:</span>
            <span className="font-semibold">{activeNode.title}</span>
          </div>
        </div>

        {/* Compact Node Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5">
          {pipelineNodes.map((node) => {
            const isSelected = activeNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                type="button"
                className={`p-3 rounded-2xl border text-left transition-all duration-200 cursor-pointer flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-midnight text-white border-midnight shadow-md'
                    : 'bg-white/70 hover:bg-white text-midnight border-midnight-900/20 shadow-2xs hover:border-midnight-900/40'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-white/15 text-icy' : 'bg-midnight-900/5 text-midnight'
                  }`}
                >
                  {node.icon}
                </div>
                <div className="min-w-0">
                  <div className={`text-[9px] font-mono uppercase tracking-wider ${isSelected ? 'text-icy font-medium' : 'text-midnight-500'}`}>
                    {node.step}
                  </div>
                  <div className="text-xs font-semibold truncate leading-tight mt-0.5">
                    {node.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Sub-Metrics Grid (Exact style of Monthly Hours / Team Equivalent) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-5">
          <div className="p-3.5 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
            <div className="flex items-center gap-1.5 text-midnight-600 text-xs font-medium">
              <Clock className="w-3.5 h-3.5 text-icy-deep" />
              <span>Response Time</span>
            </div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-midnight mt-1">
              {activeNode.telemetry.latency}
            </div>
            <div className="text-[10px] text-midnight-500 mt-0.5">Pipeline turnaround</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
            <div className="flex items-center gap-1.5 text-midnight-600 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Accuracy Gate</span>
            </div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-midnight mt-1">
              {activeNode.telemetry.accuracy.split(' ')[0]}
            </div>
            <div className="text-[10px] text-midnight-500 mt-0.5">Schema validation</div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
            <div className="flex items-center gap-1.5 text-midnight-600 text-xs font-medium">
              <Activity className="w-3.5 h-3.5 text-icy-deep" />
              <span>Throughput</span>
            </div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-midnight mt-1 truncate">
              {activeNode.telemetry.throughput.split(' ')[0]}
            </div>
            <div className="text-[10px] text-midnight-500 mt-0.5 truncate">
              {activeNode.telemetry.throughput.split(' ').slice(1).join(' ') || 'events/hr'}
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
            <div className="flex items-center gap-1.5 text-midnight-600 text-xs font-medium">
              <Cpu className="w-3.5 h-3.5 text-indigo-600" />
              <span>Model Engine</span>
            </div>
            <div className="text-sm sm:text-base font-mono font-bold text-midnight mt-1 truncate" title={activeNode.telemetry.activeModel}>
              {activeNode.telemetry.activeModel.split('/')[0]}
            </div>
            <div className="text-[10px] text-midnight-500 mt-0.5 truncate">
              {activeNode.telemetry.activeModel.split('/').slice(-1)[0] || 'Inference engine'}
            </div>
          </div>
        </div>

        {/* Verification and Guarantee box (matches Deployment ROI Floor style) */}
        <div className="p-4 rounded-2xl bg-white/70 border border-midnight-900/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-midnight block">
                {activeNode.subtitle} — Telemetry Verification
              </span>
              <p className="text-xs text-midnight-600 mt-0.5 leading-relaxed">
                {activeNode.signals[0]}
              </p>
            </div>
          </div>
          <span className="text-[10px] font-mono text-midnight-500 uppercase tracking-wider font-semibold self-start sm:self-center shrink-0 px-2.5 py-1 rounded-lg bg-white border border-midnight-900/20 shadow-2xs">
            Deterministic IO
          </span>
        </div>
      </div>
    </div>
  );
};

