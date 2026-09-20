import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { SpecularButton } from '../components/ui/SpecularButton';
import { caseStudiesData } from '../data/caseStudies';

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-sky-canvas min-h-screen">
      {/* Background Cloudscape */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url('/atmospheric_cloud_backdrop.jpg')` }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="mb-3">
            <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-midnight-500 uppercase">
              VERIFIED CLIENT CASE TEARDOWNS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-midnight mt-4 tracking-tight">
            Empirical Results in Scaling Enterprise Environments
          </h1>
          <p className="mt-4 text-base sm:text-lg text-midnight-700 leading-relaxed">
            Detailed architectural teardowns of production multi-agent systems deployed for scaling professional services and high-growth B2B firms ($1M–$50M ARR).
          </p>
        </div>

        {/* 3 Case Study Sections */}
        <div className="space-y-16">
          {caseStudiesData.map((cs, idx) => (
            <section
              key={cs.id}
              id={cs.id}
              className="scroll-mt-32 rounded-3xl p-6 sm:p-10 bg-white/75 backdrop-blur-2xl border border-white/90 shadow-glass-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Column (7 cols): Challenge & Architecture */}
                <div className="lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-mono font-bold text-icy-deep uppercase tracking-widest">
                      CASE 0{idx + 1} • {cs.industry}
                    </span>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-midnight-50 text-midnight-700 border border-midnight-100">
                      {cs.timeframe}
                    </span>
                  </div>

                  <div className="text-sm font-semibold text-midnight-500 font-mono">
                    {cs.clientType}
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-midnight mt-1">
                    {cs.headline}
                  </h2>

                  {/* Challenge Box */}
                  <div className="mt-6 p-5 rounded-2xl bg-midnight-50/70 border border-midnight-100">
                    <div className="text-xs font-mono uppercase tracking-wider text-midnight-500 font-semibold mb-1">
                      Baseline Operational Friction:
                    </div>
                    <p className="text-sm text-midnight-700 leading-relaxed">
                      {cs.challenge}
                    </p>
                  </div>

                  {/* Architecture Blueprint Box */}
                  <div className="mt-6 p-5 rounded-2xl bg-white/80 border border-white/90 shadow-sm">
                    <div className="text-xs font-mono uppercase tracking-wider text-icy-deep font-semibold mb-1">
                      Agentica Deployed Solution:
                    </div>
                    <h3 className="font-heading font-bold text-lg text-midnight">
                      {cs.architecture.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-midnight-600 mt-1 leading-relaxed">
                      {cs.architecture.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-midnight-100 flex flex-wrap gap-2">
                      {cs.architecture.nodes.map((node, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-sky-canvas text-midnight-800 border border-white/90"
                        >
                          Node {i + 1}: {node}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="mt-8 p-6 rounded-2xl bg-white/60 border border-white/80 relative">
                    <Quote className="w-8 h-8 text-icy/40 absolute top-4 right-4" />
                    <blockquote className="text-sm sm:text-base text-midnight-800 italic leading-relaxed">
                      "{cs.quote.text}"
                    </blockquote>
                    <div className="mt-4 pt-4 border-t border-midnight-100/60 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold text-midnight font-heading">
                          {cs.quote.author}
                        </div>
                        <div className="text-[11px] text-midnight-500">{cs.quote.role}</div>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-600 font-semibold uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        Verified Client
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column (5 cols): Metrics Callout Stack */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                  <div className="p-6 rounded-2xl bg-white/90 border border-white/90 shadow-sm">
                    <div className="text-xs font-mono uppercase tracking-wider text-midnight-500 font-semibold mb-4">
                      Quantified Business Impact:
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {cs.metrics.map((m, i) => (
                        <div key={i} className="p-4 rounded-xl bg-sky-canvas/60 border border-white/80">
                          <div className="text-2xl sm:text-3xl font-mono font-bold text-midnight">
                            {m.value}
                          </div>
                          <div className="text-xs font-semibold text-midnight-800 mt-1">
                            {m.label}
                          </div>
                          {m.sublabel && (
                            <div className="text-[10px] text-midnight-500 mt-0.5">
                              {m.sublabel}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Blueprint CTA */}
                  <GlassCard variant="glow" className="p-6 text-center" hoverEffect={false}>
                    <h4 className="font-heading font-bold text-lg text-midnight">
                      Could Your Firm Reclaim Similar Capacity?
                    </h4>
                    <p className="text-xs text-midnight-600 mt-1 mb-4">
                      We conduct a 45-minute whiteboarding audit to estimate your exact operational velocity lift.
                    </p>
                    <SpecularButton
                      to="/book"
                      size="md"
                      variant="dark"
                      className="w-full justify-center"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Audit Your Architecture
                    </SpecularButton>
                  </GlassCard>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ─────────────────────────────────────────────────────────────
            EXECUTIVE COMPARISON BENCHMARK TABLE
        ───────────────────────────────────────────────────────────── */}
        <section className="mt-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="mb-3">
              <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-midnight-500 uppercase">
                PERFORMANCE SNAPSHOT
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-midnight mt-3">
              Operational Velocity Benchmark
            </h2>
            <p className="text-midnight-600 mt-2 text-sm sm:text-base">
              Side-by-side comparison of standard industry operations versus Agentica-One multi-agent execution.
            </p>
          </div>

          <GlassCard className="p-6 sm:p-8 overflow-x-auto" hoverEffect={false}>
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-midnight-100 text-midnight-500 font-mono uppercase tracking-wider text-[11px]">
                  <th className="pb-4 font-semibold">Workflow Domain</th>
                  <th className="pb-4 font-semibold">Traditional Manual Execution</th>
                  <th className="pb-4 font-semibold">Generic SaaS / Wrapper</th>
                  <th className="pb-4 font-semibold text-icy-deep">Agentica Deterministic Swarm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-midnight-100/60 text-midnight-800">
                <tr>
                  <td className="py-4 font-semibold">120-Page RFP Deconstruction</td>
                  <td className="py-4 text-midnight-600">12–14 business days (Partner manual)</td>
                  <td className="py-4 text-red-600">Fails on tokens, hallucinates clauses</td>
                  <td className="py-4 font-bold text-midnight font-mono">28 hours (90% compliant draft)</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold">CRM Activity & Notes Sync</td>
                  <td className="py-4 text-midnight-600">6–8 hrs/wk per rep manual admin</td>
                  <td className="py-4 text-midnight-600">Generic email blast logging</td>
                  <td className="py-4 font-bold text-midnight font-mono">Zero manual entry (100% autonomous)</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold">Multi-Vendor Contract Redlining</td>
                  <td className="py-4 text-midnight-600">5–7 days legal turn time</td>
                  <td className="py-4 text-red-600">Unreliable citation accuracy</td>
                  <td className="py-4 font-bold text-midnight font-mono">4 hours with exact clause anchors</td>
                </tr>
                <tr>
                  <td className="py-4 font-semibold">Data Privacy & Retention</td>
                  <td className="py-4 text-midnight-600">Manual NDAs & spreadsheet silos</td>
                  <td className="py-4 text-red-600">Public cloud multi-tenant caching</td>
                  <td className="py-4 font-bold text-midnight font-mono">SOC2 Zero-Data-Retention (ZDR)</td>
                </tr>
              </tbody>
            </table>
          </GlassCard>
        </section>

        {/* Bottom Booking Block */}
        <div className="mt-24 p-8 sm:p-12 rounded-3xl bg-midnight text-white text-center max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-heading font-bold">
            Ready to Replace Delivery Bottlenecks with Systems Engineering?
          </h3>
          <p className="text-midnight-200 mt-2 text-sm sm:text-base max-w-xl mx-auto">
            Reserve a 45-minute whiteboarding session. We evaluate your current toolchain and map out a production multi-agent graph.
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
