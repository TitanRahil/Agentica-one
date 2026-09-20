import React, { useState } from 'react';
import {
  ArrowRight,
  Cpu,
  CheckCircle2,
  Database,
  Terminal,
} from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { Badge } from '../components/ui/Badge';
import { SpecularButton } from '../components/ui/SpecularButton';
import { solutionsData } from '../data/solutions';

const enterpriseIntegrations = [
  { name: 'Salesforce Enterprise', category: 'CRM', icon: '☁️', desc: 'Bidirectional sync, custom object schema mapping, automated stage transition.' },
  { name: 'HubSpot Enterprise', category: 'CRM', icon: '🟠', desc: 'Real-time contact enrichment, timeline event tracking, automated deal tasks.' },
  { name: 'Slack Enterprise Grid', category: 'Communication', icon: '💬', desc: 'Real-time deal briefs, executive HITL approval buttons, risk alerts.' },
  { name: 'Microsoft 365 / SharePoint', category: 'Knowledge', icon: '📑', desc: 'Continuous vector ingestion, Word proposal exports, audit trail logs.' },
  { name: 'PostgreSQL / Supabase', category: 'Data & Cloud', icon: '🐘', desc: 'ACID-compliant immutable audit trails, state serialization stores.' },
  { name: 'Qdrant & Pinecone', category: 'Data & Cloud', icon: '⚡', desc: 'Hybrid dense/sparse vector search with multi-tenant payload isolation.' },
  { name: 'Gong & Chorus Audio', category: 'Communication', icon: '🎙️', desc: 'Automatic diarized transcript ingestion and objection detection.' },
  { name: 'Snowflake / BigQuery', category: 'Data & Cloud', icon: '❄️', desc: 'Large-scale analytical data warehouse sync and financial modeling.' },
];

export const SolutionsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'CRM', 'Communication', 'Knowledge', 'Data & Cloud'];

  const filteredIntegrations =
    selectedCategory === 'All'
      ? enterpriseIntegrations
      : enterpriseIntegrations.filter((i) => i.category === selectedCategory);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-sky-canvas min-h-screen">
      {/* Background Cloud Overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url('/atmospheric_cloud_backdrop.jpg')` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Badge variant="glass" withDot>
            ENTERPRISE ARCHITECTURE SPECIFICATIONS
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-midnight mt-4 tracking-tight">
            Deterministic Flagship Multi-Agent Systems
          </h1>
          <p className="mt-4 text-base sm:text-lg text-midnight-700 leading-relaxed">
            Every system is an industrial-grade, multi-agent state graph deployed inside your private infrastructure. Explore the input streams, reasoning nodes, and deterministic validation gates of our flagship blueprints.
          </p>
        </div>

        {/* The 3 Deep Blueprint Teardowns */}
        <div className="space-y-20">
          {solutionsData.map((sol) => (
            <section
              key={sol.id}
              id={sol.id}
              className="scroll-mt-32 rounded-3xl p-6 sm:p-10 bg-white/70 backdrop-blur-2xl border border-white/90 shadow-glass-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column (7 cols): Architecture Details */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-bold tracking-widest text-icy-deep uppercase">
                      {sol.eyebrow}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-midnight-50 text-midnight-700 border border-midnight-100">
                      {sol.timeframe}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-midnight">
                    {sol.title}
                  </h2>

                  <p className="mt-4 text-base text-midnight-700 leading-relaxed">
                    {sol.summary}
                  </p>

                  {/* Architecture Breakdown Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                    {/* Input Streams */}
                    <div className="p-5 rounded-2xl bg-white/80 border border-white/90 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-midnight uppercase tracking-wider mb-3">
                        <Database className="w-4 h-4 text-icy-deep" />
                        <span>Input Streams & Webhooks</span>
                      </div>
                      <ul className="space-y-2 text-xs text-midnight-700">
                        {sol.inputStreams.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-icy-deep font-bold font-mono">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Reasoning Engine */}
                    <div className="p-5 rounded-2xl bg-white/80 border border-white/90 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold text-midnight uppercase tracking-wider mb-3">
                        <Cpu className="w-4 h-4 text-icy-deep" />
                        <span>Reasoning & State Graph</span>
                      </div>
                      <ul className="space-y-2 text-xs text-midnight-700">
                        {sol.reasoningEngine.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold font-mono">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Output Surfaces */}
                  <div className="mt-6 p-5 rounded-2xl bg-midnight-50/60 border border-midnight-100/80">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-midnight uppercase tracking-wider mb-3">
                      <Terminal className="w-4 h-4 text-midnight-700" />
                      <span>Deterministic Output Surfaces</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-midnight-700">
                      {sol.outputSurfaces.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 bg-white/70 px-3 py-2 rounded-xl border border-white/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-icy-deep shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-midnight-500 font-semibold mr-1">
                      Engine Stack:
                    </span>
                    {sol.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-mono px-3 py-1 rounded-full bg-white text-midnight-800 border border-white/90 shadow-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column (5 cols): High-Fidelity Hologram Visual & Metrics */}
                <div className="lg:col-span-5 flex flex-col gap-6">
                  {/* Visual Anchor Frame */}
                  <div className="rounded-2xl overflow-hidden border border-white/90 shadow-glass-md relative aspect-[4/3]">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-mono flex items-center justify-between">
                      <span className="bg-midnight/80 px-2.5 py-1 rounded-lg backdrop-blur-md">
                        Node Graph Active
                      </span>
                      <span className="bg-emerald-500/80 px-2.5 py-1 rounded-lg backdrop-blur-md">
                        Latency: &lt;200ms
                      </span>
                    </div>
                  </div>

                  {/* Metrics Box */}
                  <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-white/80 border border-white/90">
                    {sol.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-xl sm:text-2xl font-mono font-bold text-midnight">
                          {m.value}
                        </span>
                        <span className="text-[11px] text-midnight-500 mt-1 leading-tight">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Booking Trigger */}
                  <SpecularButton
                    to="/book"
                    size="md"
                    variant="dark"
                    className="w-full justify-center"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Deploy This Architecture
                  </SpecularButton>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            ENTERPRISE INTEGRATION STACK MATRIX
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="cyan" withDot>
              SYSTEM OF RECORD CONNECTIVITY
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-midnight mt-3">
              Enterprise Integration Ecosystem
            </h2>
            <p className="text-midnight-600 mt-2 text-sm sm:text-base">
              Agentica agents operate directly inside your existing systems of record with granular role permissions and zero disruptive migrations.
            </p>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-midnight text-white shadow-sm'
                      : 'bg-white/70 text-midnight-600 hover:bg-white border border-white/80'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Integrations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredIntegrations.map((item, idx) => (
              <GlassCard key={idx} className="p-5" hoverEffect>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/80 border border-white text-midnight-500 uppercase">
                    {item.category}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-base text-midnight">{item.name}</h4>
                <p className="text-xs text-midnight-600 mt-2 leading-relaxed">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-midnight text-white relative overflow-hidden text-center max-w-4xl mx-auto">
          <div className="relative z-10">
            <h3 className="text-2xl sm:text-3xl font-heading font-bold">
              Have a Proprietary Internal Database or Custom API?
            </h3>
            <p className="text-midnight-200 mt-2 text-sm sm:text-base max-w-xl mx-auto">
              Our engineering team builds custom bidirectional connectors for proprietary on-premises ERPs, legacy mainframe data, and specialized industry databases.
            </p>
            <div className="mt-6 flex justify-center">
              <SpecularButton to="/book" size="md" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
                Discuss Custom API Connectors
              </SpecularButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
