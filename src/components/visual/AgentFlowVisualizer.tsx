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
    <div className="w-full max-w-4xl mx-auto mt-0 mb-4 sm:mb-8">
      {/* Compact Container matching the Estimated Return on Architecture Card */}
      <div className="p-3.5 xs:p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-xl border border-midnight-900/35 hover:border-midnight-900/70 text-midnight shadow-[0_10px_35px_rgba(10,17,40,0.06)] hover:shadow-[0_15px_45px_rgba(10,17,40,0.12)] transition-all duration-300">
        {/* Eyebrow with Icon */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-midnight-500 font-semibold flex items-center gap-1.5 truncate">
            <Sparkles className="w-3.5 h-3.5 text-icy-deep shrink-0" />
            <span className="truncate">Multi-Agent State Graph Protocol</span>
          </span>
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/95 border border-midnight-900/20 text-[10px] sm:text-[11px] font-mono text-midnight shadow-2xs shrink-0">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="hidden xs:inline">All Nodes</span> Synchronized
          </div>
        </div>

        {/* Big Text Telemetry Ticker */}
        <div className="mt-2 sm:mt-4 pb-2.5 sm:pb-6 border-b border-midnight-900/20 flex flex-row items-baseline justify-between gap-2">
          <div>
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-midnight-500">
              Live State Graph Latency & Reliability
            </div>
            <div className="flex items-baseline gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
              <span className="text-2xl xs:text-3xl sm:text-5xl font-heading font-bold text-midnight tracking-tight">
                {activeNode.telemetry.latency}
              </span>
              <span className="text-xs sm:text-sm font-mono text-midnight-500 font-semibold">
                / {activeNode.telemetry.accuracy}
              </span>
            </div>
          </div>
          <div className="text-[10px] sm:text-xs font-mono text-midnight-700 bg-white/95 px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl border border-midnight-900/20 shadow-2xs shrink-0 flex items-center gap-1">
            <span className="text-midnight-400">{activeNode.step}:</span>
            <span className="font-semibold">{activeNode.title}</span>
          </div>
        </div>

        {/* Compact Node Selector Tabs (4 in a single horizontal row on mobile) */}
        <div className="grid grid-cols-4 gap-1.5 sm:gap-2.5 my-2.5 sm:my-5">
          {pipelineNodes.map((node) => {
            const isSelected = activeNodeId === node.id;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                type="button"
                className={`p-1.5 xs:p-2 sm:p-3 rounded-xl sm:rounded-2xl border text-center sm:text-left transition-all duration-200 cursor-pointer flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-2.5 ${
                  isSelected
                    ? 'bg-midnight text-white border-midnight shadow-md'
                    : 'bg-white/70 hover:bg-white text-midnight border-midnight-900/20 shadow-2xs hover:border-midnight-900/40'
                }`}
              >
                <div
                  className={`w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-white/15 text-icy' : 'bg-midnight-900/5 text-midnight'
                  }`}
                >
                  {node.icon}
                </div>
                <div className="min-w-0 w-full">
                  <div className={`text-[8px] xs:text-[9px] font-mono uppercase tracking-wider truncate ${isSelected ? 'text-icy font-medium' : 'text-midnight-500'}`}>
                    {node.step}
                  </div>
                  <div className="hidden xs:block sm:block text-[10px] sm:text-xs font-semibold truncate leading-tight mt-0.5">
                    {node.title.split(' ')[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Sub-Metrics Grid (Compact high-density cards) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 my-2.5 sm:my-5">
          <div className="p-2 xs:p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
            <div className="flex items-center gap-1 sm:gap-1.5 text-midnight-600 text-[10px] sm:text-xs font-medium">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-icy-deep shrink-0" />
              <span>Response</span>
            </div>
            <div className="text-sm xs:text-base sm:text-2xl font-mono font-bold text-midnight mt-0.5 sm:mt-1">
              {activeNode.telemetry.latency}
            </div>
            <div className="text-[9px] sm:text-[10px] text-midnight-500 mt-0.5 hidden xs:block">Pipeline turnaround</div>
          </div>

          <div className="p-2 xs:p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
            <div className="flex items-center gap-1 sm:gap-1.5 text-midnight-600 text-[10px] sm:text-xs font-medium">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
              <span>Accuracy</span>
            </div>
            <div className="text-sm xs:text-base sm:text-2xl font-mono font-bold text-midnight mt-0.5 sm:mt-1">
              {activeNode.telemetry.accuracy.split(' ')[0]}
            </div>
            <div className="text-[9px] sm:text-[10px] text-midnight-500 mt-0.5 hidden xs:block">Schema validation</div>
          </div>

          <div className="p-2 xs:p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
            <div className="flex items-center gap-1 sm:gap-1.5 text-midnight-600 text-[10px] sm:text-xs font-medium">
              <Activity className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-icy-deep shrink-0" />
              <span>Throughput</span>
            </div>
            <div className="text-sm xs:text-base sm:text-2xl font-mono font-bold text-midnight mt-0.5 sm:mt-1 truncate">
              {activeNode.telemetry.throughput.split(' ')[0]}
            </div>
            <div className="text-[9px] sm:text-[10px] text-midnight-500 mt-0.5 truncate hidden xs:block">
              {activeNode.telemetry.throughput.split(' ').slice(1).join(' ') || 'events/hr'}
            </div>
          </div>

          <div className="p-2 xs:p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
            <div className="flex items-center gap-1 sm:gap-1.5 text-midnight-600 text-[10px] sm:text-xs font-medium">
              <Cpu className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-600 shrink-0" />
              <span>Model Engine</span>
            </div>
            <div className="text-xs xs:text-sm sm:text-base font-mono font-bold text-midnight mt-0.5 sm:mt-1 truncate" title={activeNode.telemetry.activeModel}>
              {activeNode.telemetry.activeModel.split('/')[0]}
            </div>
            <div className="text-[9px] sm:text-[10px] text-midnight-500 mt-0.5 truncate hidden xs:block">
              {activeNode.telemetry.activeModel.split('/').slice(-1)[0] || 'Engine'}
            </div>
          </div>
        </div>

        {/* Verification and Guarantee box */}
        <div className="p-2.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/70 border border-midnight-900/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-start gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <span className="text-[11px] sm:text-xs font-bold text-midnight block">
                {activeNode.subtitle} — Telemetry Verification
              </span>
              <p className="text-[10px] sm:text-xs text-midnight-600 mt-0.5 leading-relaxed">
                {activeNode.signals[0]}
              </p>
            </div>
          </div>
          <span className="text-[9px] sm:text-[10px] font-mono text-midnight-500 uppercase tracking-wider font-semibold self-start sm:self-center shrink-0 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg bg-white border border-midnight-900/20 shadow-2xs">
            Deterministic IO
          </span>
        </div>
      </div>
    </div>
  );
};

