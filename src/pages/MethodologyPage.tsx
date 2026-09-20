import React from 'react';
import {
  ShieldCheck,
  Lock,
  CheckCircle2,
  ArrowRight,
  GitBranch,
  FileCode2,
} from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { SpecularButton } from '../components/ui/SpecularButton';
import { methodologyStages, securityStandards } from '../data/methodology';

export const MethodologyPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-sky-canvas min-h-screen">
      {/* Ambient Cloud Backdrop */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url('/atmospheric_cloud_backdrop.jpg')` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mb-3">
            <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-midnight-500 uppercase">
              SYSTEMS ENGINEERING PROTOCOL
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-midnight mt-4 tracking-tight">
            The 4-Stage Deterministic Engineering Protocol
          </h1>
          <p className="mt-4 text-base sm:text-lg text-midnight-700 leading-relaxed">
            We don't sell speculative prompt experiments. We engineer production-grade multi-agent software following a rigorous 8-week path from forensic workflow audit to sandboxed validation and production cutover.
          </p>
        </div>

        {/* 4-Stage Protocol Timeline */}
        <div className="space-y-8 relative">
          {/* Vertical Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b from-icy via-midnight-300 to-icy/20 z-0" />

          {methodologyStages.map((stage) => (
            <div key={stage.step} className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Step Bubble (Desktop 1 col) */}
              <div className="hidden lg:flex lg:col-span-1 justify-center pt-8">
                <div className="w-14 h-14 rounded-2xl bg-midnight text-white flex items-center justify-center font-mono font-bold text-lg border-2 border-white/90 shadow-glass-md">
                  {stage.step}
                </div>
              </div>

              {/* Right Content Card (11 cols) */}
              <div className="lg:col-span-11">
                <GlassCard className="p-6 sm:p-8" hoverEffect={false}>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="lg:hidden px-2.5 py-0.5 rounded-lg bg-midnight text-white text-xs font-mono font-bold">
                        {stage.step}
                      </span>
                      <span className="text-xs font-mono font-bold tracking-widest text-icy-deep uppercase">
                        {stage.phase}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-midnight-50 border border-midnight-100 text-midnight-700">
                      Duration: {stage.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-midnight">
                    {stage.name}
                  </h3>

                  <p className="mt-3 text-base text-midnight-700 leading-relaxed max-w-3xl">
                    {stage.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="mt-6 pt-6 border-t border-midnight-100">
                    <div className="text-xs font-mono uppercase tracking-wider text-midnight-500 font-semibold mb-3">
                      Contractual Engineering Deliverables:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {stage.deliverables.map((deliv, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2.5 p-3 rounded-xl bg-white/70 border border-white/90 text-xs text-midnight-800"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Contractual Gate Guarantee */}
                  <div className="mt-6 p-4 rounded-xl bg-icy-tint/50 border border-icy/30 flex items-center gap-3 text-xs text-midnight-800">
                    <ShieldCheck className="w-4 h-4 text-icy-deep shrink-0" />
                    <span>
                      <strong>Gate Guarantee:</strong> {stage.gateGuarantee}
                    </span>
                  </div>
                </GlassCard>
              </div>
            </div>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            DETERMINISTIC STATE MACHINES & GUARDRAILS
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-3">
              <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-midnight-500 uppercase">
                MATHEMATICAL RELIABILITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-midnight mt-3">
              Deterministic Guardrail Architecture
            </h2>
            <p className="text-midnight-600 mt-2 text-base">
              Why our systems never hallucinate in production. We isolate probabilistic LLM generation within deterministic state machine boundaries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <GlassCard className="p-6 sm:p-8" hoverEffect>
              <div className="w-10 h-10 rounded-2xl bg-midnight-50 flex items-center justify-center text-midnight-800 mb-4">
                <FileCode2 className="w-5 h-5 text-icy-deep" />
              </div>
              <h4 className="font-heading font-bold text-xl text-midnight">Schema-Bound Contracts</h4>
              <p className="text-sm text-midnight-600 mt-2 leading-relaxed">
                Every agent communication passes through rigid Pydantic schemas. If an agent generates an invalid field, out-of-range margin, or unverified citation, the state machine halts and invokes a self-correcting retry loop.
              </p>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8" hoverEffect>
              <div className="w-10 h-10 rounded-2xl bg-midnight-50 flex items-center justify-center text-midnight-800 mb-4">
                <GitBranch className="w-5 h-5 text-icy-deep" />
              </div>
              <h4 className="font-heading font-bold text-xl text-midnight">State Checkpointing & Replay</h4>
              <p className="text-sm text-midnight-600 mt-2 leading-relaxed">
                Using LangGraph and Temporal, every agent state transition is durably persisted to an immutable ledger. Workflows can be paused, rewound, or replayed with zero data corruption or partial commits.
              </p>
            </GlassCard>

            <GlassCard className="p-6 sm:p-8" hoverEffect>
              <div className="w-10 h-10 rounded-2xl bg-midnight-50 flex items-center justify-center text-midnight-800 mb-4">
                <ShieldCheck className="w-5 h-5 text-icy-deep" />
              </div>
              <h4 className="font-heading font-bold text-xl text-midnight">Human-in-the-Loop Thresholds</h4>
              <p className="text-sm text-midnight-600 mt-2 leading-relaxed">
                Define exact monetary thresholds, contractual clauses, or outbound email categories where autonomous execution must pause and ping senior partners via Slack/Teams for explicit cryptographic sign-off.
              </p>
            </GlassCard>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            ENTERPRISE SECURITY & COMPLIANCE
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="mb-3">
              <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-midnight-500 uppercase">
                DEFENSE-GRADE SECURITY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-midnight mt-3">
              Zero-Trust Architecture Standards
            </h2>
            <p className="text-midnight-600 mt-2 text-base">
              Built for regulated professional services, financial advisory, and enterprise healthcare contexts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {securityStandards.map((std, idx) => (
              <GlassCard key={idx} className="p-6 sm:p-8 flex flex-col justify-between" hoverEffect>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-icy-deep uppercase tracking-widest">
                      {std.badge}
                    </span>
                    <Lock className="w-4 h-4 text-emerald-600" />
                  </div>
                  <h4 className="font-heading font-bold text-xl text-midnight">{std.title}</h4>
                  <p className="text-sm text-midnight-600 mt-3 leading-relaxed">{std.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* Bottom Booking Charter */}
        <div className="mt-24 text-center max-w-3xl mx-auto p-8 sm:p-12 rounded-3xl bg-midnight text-white">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold">
            Audit Your Firm's Multi-Agent Readiness
          </h3>
          <p className="text-midnight-200 mt-3 text-sm sm:text-base">
            Book a 45-minute technical whiteboarding audit to review your workflow topology and receive a formal architecture roadmap.
          </p>
          <div className="mt-6 flex justify-center">
            <SpecularButton to="/book" size="lg" variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Reserve Architecture Session
            </SpecularButton>
          </div>
        </div>
      </div>
    </div>
  );
};
