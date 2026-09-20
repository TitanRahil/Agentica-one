import React from 'react';
import {
  ShieldCheck,
  Lock,
  ArrowRight,
  CheckCircle2,
  UserCheck,
} from 'lucide-react';
import { SpecularButton } from '../ui/SpecularButton';

export const ArchitecturalMoats: React.FC = () => {
  return (
    <section className="relative py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
      {/* Section 2 Background Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#DFECF5] to-sky-canvas pointer-events-none -z-10" />

      {/* Subtle Ethereal Blueprint Dot Matrix with Smooth Radial Mask */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage: 'radial-gradient(#0A1128 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 75% 65% at 50% 50%, black 30%, transparent 85%)',
        }}
      />

      {/* Atmospheric ambient lighting glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-white/90 via-sky-200/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[400px] bg-sky-300/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ─────────────────────────────────────────────────────────────
            TOP LABEL & SINGLE-LINE GIANT HEADLINE (NO DIVIDER)
        ───────────────────────────────────────────────────────────── */}
        <div className="mb-2 sm:mb-3 text-left">
          <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-midnight-500 uppercase">
            THE PRODUCTION STANDARD
          </span>
        </div>

        {/* Main Giant Headline (Guaranteed Single Line & Centered) */}
        <div className="w-full flex justify-center text-center my-3 sm:my-4">
          <h2 className="text-[clamp(3.5rem,9.5vw,9.8rem)] font-heading font-extrabold text-midnight tracking-tighter leading-none whitespace-nowrap text-center">
            Built for Production.
          </h2>
        </div>

        {/* Right-Aligned Descriptive Subhead Below Title */}
        <div className="flex justify-end mb-16 sm:mb-20 mt-8 sm:mt-11">
          <p className="text-xs sm:text-sm md:text-[15px] font-sans text-midnight-600 max-w-lg text-left sm:text-right leading-relaxed">
            Replacing fragile prompt wrappers with mathematically verified multi-agent state machines deployed directly into your private enterprise cloud.
          </p>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            3 COMPACT CARDS (GATE 2 & 3 PRODUCTION STANDARDS)
        ───────────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* CARD 01: DETERMINISTIC STATE GUARDRAILS */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-midnight-900/35 hover:border-midnight-900/70 p-6 sm:p-7 text-midnight shadow-[0_10px_35px_rgba(10,17,40,0.06)] hover:shadow-[0_15px_45px_rgba(10,17,40,0.12)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-midnight text-white flex items-center justify-center shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-midnight-500 uppercase">
                    01 // RELIABILITY
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-midnight text-white font-semibold shadow-xs">
                  Schema Enforced
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-heading font-bold text-midnight tracking-tight">
                Deterministic State Guardrails
              </h3>
              <p className="text-xs text-midnight-600 mt-2 leading-relaxed">
                Mathematical schema validation and strict state boundaries ensure predictable execution across enterprise workflows.
              </p>

              {/* Sub-Stat Chips (Reference UI Pattern) */}
              <div className="grid grid-cols-2 gap-2 my-4">
                <div className="p-3 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
                  <span className="block text-xs sm:text-sm font-heading font-bold text-midnight">Typed Schema</span>
                  <span className="text-[10px] text-midnight-500 font-sans block mt-0.5 leading-tight">Strict IO Enforcement</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
                  <span className="block text-xs sm:text-sm font-heading font-bold text-midnight">Vector RAG</span>
                  <span className="text-[10px] text-midnight-500 font-sans block mt-0.5 leading-tight">Document Grounding</span>
                </div>
              </div>

              {/* Concise Feature Bullets */}
              <div className="pt-3 border-t border-midnight-900/20 space-y-2 text-xs text-midnight-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-midnight shrink-0" />
                  <span>Strict typed schema validation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-midnight shrink-0" />
                  <span>Self-healing automated retry loops</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 02: HUMAN-IN-THE-LOOP OVERSIGHT */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-midnight-900/35 hover:border-midnight-900/70 p-6 sm:p-7 text-midnight shadow-[0_10px_35px_rgba(10,17,40,0.06)] hover:shadow-[0_15px_45px_rgba(10,17,40,0.12)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-midnight text-white flex items-center justify-center shadow-xs">
                    <UserCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-midnight-500 uppercase">
                    02 // GOVERNANCE
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-midnight text-white font-semibold shadow-xs">
                  Human-in-the-Loop
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-heading font-bold text-midnight tracking-tight">
                Human-in-the-Loop Oversight
              </h3>
              <p className="text-xs text-midnight-600 mt-2 leading-relaxed">
                High-stakes proposals, contract pricing, and client communications automatically queue for 1-click partner review.
              </p>

              {/* Sub-Stat Chips (Reference UI Pattern) */}
              <div className="grid grid-cols-2 gap-2 my-4">
                <div className="p-3 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
                  <span className="block text-xs sm:text-sm font-heading font-bold text-midnight">1-Click</span>
                  <span className="text-[10px] text-midnight-500 font-sans block mt-0.5 leading-tight">Executive Gates</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
                  <span className="block text-xs sm:text-sm font-heading font-bold text-midnight">Audit Trail</span>
                  <span className="text-[10px] text-midnight-500 font-sans block mt-0.5 leading-tight">Immutable Event Logs</span>
                </div>
              </div>

              {/* Concise Feature Bullets */}
              <div className="pt-3 border-t border-midnight-900/20 space-y-2 text-xs text-midnight-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-midnight shrink-0" />
                  <span>Automated confidence score routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-midnight shrink-0" />
                  <span>Instant Slack & Email approval triggers</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 03: DEDICATED PRIVATE CLOUD VPC */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-midnight-900/35 hover:border-midnight-900/70 p-6 sm:p-7 text-midnight shadow-[0_10px_35px_rgba(10,17,40,0.06)] hover:shadow-[0_15px_45px_rgba(10,17,40,0.12)] transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-midnight text-white flex items-center justify-center shadow-xs">
                    <Lock className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-wider text-midnight-500 uppercase">
                    03 // SOVEREIGNTY
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-midnight text-white font-semibold shadow-xs">
                  Zero Model Retention
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-heading font-bold text-midnight tracking-tight">
                Dedicated Private Cloud VPC
              </h3>
              <p className="text-xs text-midnight-600 mt-2 leading-relaxed">
                Deployed directly into your AWS, GCP, or Azure perimeter. Your data is isolated and never trains public AI models.
              </p>

              {/* Sub-Stat Chips (Reference UI Pattern) */}
              <div className="grid grid-cols-2 gap-2 my-4">
                <div className="p-3 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
                  <span className="block text-xs sm:text-sm font-heading font-bold text-midnight">Single-Tenant</span>
                  <span className="text-[10px] text-midnight-500 font-sans block mt-0.5 leading-tight">Isolated Containers</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
                  <span className="block text-xs sm:text-sm font-heading font-bold text-midnight">Full IP Rights</span>
                  <span className="text-[10px] text-midnight-500 font-sans block mt-0.5 leading-tight">100% Client Owned</span>
                </div>
              </div>

              {/* Concise Feature Bullets */}
              <div className="pt-3 border-t border-midnight-900/20 space-y-2 text-xs text-midnight-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-midnight shrink-0" />
                  <span>Air-gapped TLS 1.3 & customer KMS keys</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-midnight shrink-0" />
                  <span>SOC2 & HIPAA aligned security baseline</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Section Bottom Navigation Link */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-midnight-600 px-2">
          <span>Explore our end-to-end delivery methodology and enterprise testing sandbox protocol:</span>
          <SpecularButton to="/methodology" size="sm" variant="dark" icon={<ArrowRight className="w-3.5 h-3.5" />}>
            Explore 4-Stage Protocol
          </SpecularButton>
        </div>

      </div>
    </section>
  );
};
