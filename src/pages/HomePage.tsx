import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Shield,
  Lock,
  Server,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Send,
} from 'lucide-react';
import { SpecularButton } from '../components/ui/SpecularButton';
import { StitchHeroVisual } from '../components/visual/StitchHeroVisual';
import { ArchitecturalMoats } from '../components/visual/ArchitecturalMoats';
import { PersonalisedScaleTransition } from '../components/visual/PersonalisedScaleTransition';
import { RoiCalculator } from '../components/interactive/RoiCalculator';
import { FlagshipBlueprintsCarousel } from '../components/interactive/FlagshipBlueprintsCarousel';
import { AgentFlowVisualizer } from '../components/visual/AgentFlowVisualizer';
import { AtmosphericTransitionSection } from '../components/visual/AtmosphericTransitionSection';
import { caseStudiesData } from '../data/caseStudies';

export const HomePage: React.FC = () => {
  const [whiteboardEmail, setWhiteboardEmail] = React.useState('');
  const [whiteboardSubmitted, setWhiteboardSubmitted] = React.useState(false);

  const handleWhiteboardSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (whiteboardEmail.trim()) {
      setWhiteboardSubmitted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-sky-canvas overflow-x-hidden">
      {/* ─────────────────────────────────────────────────────────────
          UNIFIED CLOUDSCAPE BACKDROP (Spans 100% of Hero + Extends into Section 2 with Smooth Downward Fade)
      ───────────────────────────────────────────────────────────── */}
      <div
        className="absolute top-0 inset-x-0 pointer-events-none mix-blend-multiply opacity-70 z-0"
        style={{
          height: 'calc(100vh + 100px)',
          backgroundImage: `url('/atmospheric_cloud_backdrop.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) calc(100vh - 20px), transparent calc(100vh + 100px))',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) calc(100vh - 20px), transparent calc(100vh + 100px))',
        }}
      />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 1: HERO VIEWPORT (Stitch Ethereal Cloudscape)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[100dvh] flex flex-col justify-between pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-transparent">
        {/* Ambient Radial Gradient for Daylight Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-white/90 via-sky-mist/60 to-transparent blur-3xl pointer-events-none -z-0" />

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
            {/* Left Content (7 Cols) - Moved Upward & Sized Proportionally */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left -translate-y-2 sm:-translate-y-6 lg:-translate-y-8"
            >
              {/* Sleek Eyebrow Header Badge with Live Pulse */}
              <div className="mb-4 sm:mb-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-midnight-900/15 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                  <span className="text-[10px] sm:text-xs font-mono font-bold tracking-[0.16em] text-midnight uppercase">
                    BESPOKE MULTI-AGENT AI SYSTEMS
                  </span>
                </div>
              </div>

              {/* Main Headline - Fluid Responsive Typography */}
              <h1 className="font-heading font-extrabold text-[2.35rem] xs:text-[2.75rem] sm:text-5xl lg:text-[3.75rem] xl:text-[4.25rem] tracking-tight text-midnight leading-[1.04]">
                UNIQUELY PERSONALISED FOR YOUR BUSINESS
              </h1>

              {/* Sub-headline - Crisp Typography & Focused Density */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-midnight-700 max-w-xl font-sans leading-relaxed px-1 sm:px-0">
                We architect deterministic multi-agent AI systems for scaling enterprises ($1M–$50M ARR). No fragile chatbot wrappers. No generic SaaS. Just industrial-grade automation engineered for your exact operational bottlenecks.
              </p>

              {/* Specular CTA Row */}
              <div className="mt-6 sm:mt-7 flex flex-col sm:flex-row items-center gap-3 sm:gap-3.5 w-full sm:w-auto">
                <SpecularButton
                  to="/solutions"
                  size="md"
                  variant="dark"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full sm:w-auto shadow-[0_10px_30px_rgba(10,17,40,0.18)]"
                >
                  Explore Flagship Blueprints
                </SpecularButton>
                <SpecularButton
                  to="/book"
                  size="md"
                  variant="primary"
                  className="w-full sm:w-auto"
                >
                  Schedule 45-Min Architecture Review
                </SpecularButton>
              </div>

              {/* Enterprise Trust Micro-Credentials (Responsive Glass Badges) */}
              <div className="mt-8 sm:mt-9 pt-5 sm:pt-6 border-t border-midnight-900/10 w-full flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-[11px] sm:text-xs font-mono text-midnight-700">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-sm border border-midnight-900/15 shadow-2xs">
                  <Shield className="w-3.5 h-3.5 text-icy-deep shrink-0" /> SOC2 Type II Aligned
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-sm border border-midnight-900/15 shadow-2xs">
                  <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> Zero Data Retention
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/75 backdrop-blur-sm border border-midnight-900/15 shadow-2xs">
                  <Server className="w-3.5 h-3.5 text-midnight-600 shrink-0" /> Dedicated Tenant VPC
                </span>
              </div>
            </motion.div>

            {/* Right Visual Anchor (5 Cols): The 3D Robot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center lg:justify-end w-full mt-2 lg:mt-0"
            >
              <StitchHeroVisual />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 2: THE ARCHITECTURAL MOATS (Deterministic Systems vs. Brittle Wrappers)
      ───────────────────────────────────────────────────────────── */}
      <ArchitecturalMoats />

      {/* ─────────────────────────────────────────────────────────────
          TRANSITIONAL HERO STATEMENT: UNIQUELY ENGINEERED. INFINITELY SCALABLE.
      ───────────────────────────────────────────────────────────── */}
      <PersonalisedScaleTransition />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 3: INTERACTIVE ROI & BOTTLENECK CALCULATOR
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-sky-canvas">
        <RoiCalculator />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 4: ASYMMETRIC 1+2 BENTO GRID (Flagship Systems)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-12 sm:pt-16 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 bg-sky-canvas">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
            <div>
              <div className="mb-2 sm:mb-3 text-left">
                <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-midnight-500 uppercase">
                  PRODUCTION ARCHITECTURES
                </span>
              </div>
              <h2 className="text-[clamp(2.75rem,6.2vw,5.2rem)] font-heading font-extrabold text-midnight tracking-tighter leading-[1.04]">
                Three Flagship Multi-Agent Blueprints
              </h2>
              <p className="text-midnight-600 mt-3 text-sm sm:text-base lg:text-[17px] max-w-2xl leading-relaxed">
                Pre-engineered, battle-tested system foundations tailored and deployed to your private infrastructure in weeks.
              </p>
            </div>
            <SpecularButton to="/solutions" size="md" variant="outline" icon={<ChevronRight className="w-4 h-4" />}>
              View Technical Architecture Specs
            </SpecularButton>
          </div>

          {/* 3D Depth Circular Coverflow Carousel */}
          <FlagshipBlueprintsCarousel />
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 5: INTERACTIVE MULTI-AGENT FLOW VISUALIZER
      ───────────────────────────────────────────────────────────── */}
      <section className="relative pt-8 sm:pt-14 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-sky-canvas">
        <AgentFlowVisualizer />
      </section>

      {/* ─────────────────────────────────────────────────────────────
          TRANSITIONAL SECTION: EMPIRICAL PROOF (ATMOSPHERIC CLOUDSCAPE)
      ───────────────────────────────────────────────────────────── */}
      <AtmosphericTransitionSection />

      {/* ─────────────────────────────────────────────────────────────
          SECTION 6: QUANTIFIED CASE STUDIES TEARDOWN
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-sky-canvas">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <div className="mb-2 sm:mb-3 text-left">
                <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-midnight-500 uppercase">
                  EMPIRICAL PROOF
                </span>
              </div>
              <h2 className="text-[clamp(2.75rem,6.2vw,5.2rem)] font-heading font-extrabold text-midnight tracking-tighter leading-[1.04]">
                Verified Production Deployments
              </h2>
              <p className="text-midnight-600 mt-3 text-sm sm:text-base lg:text-[17px] max-w-2xl leading-relaxed">
                Real metrics from scaling advisory firms and enterprise tech consultancies running Agentica multi-agent state machines in production.
              </p>
            </div>
            <SpecularButton to="/case-studies" size="md" variant="outline" icon={<ChevronRight className="w-4 h-4" />}>
              All Case Studies & Teardowns
            </SpecularButton>
          </div>

          {/* Shorter Case Study Cards Matching Estimated Return on Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {caseStudiesData.slice(0, 2).map((cs) => (
              <div
                key={cs.id}
                className="p-6 sm:p-8 flex flex-col justify-between rounded-3xl bg-white/90 backdrop-blur-xl border border-midnight-900/35 hover:border-midnight-900/70 text-midnight shadow-[0_10px_35px_rgba(10,17,40,0.06)] hover:shadow-[0_15px_45px_rgba(10,17,40,0.12)] transition-all duration-300 group"
              >
                <div>
                  {/* Eyebrow + Timeframe */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono uppercase tracking-widest text-midnight-500 font-semibold flex items-center gap-1.5 truncate">
                      <Sparkles className="w-3.5 h-3.5 text-icy-deep shrink-0" />
                      <span className="truncate">{cs.industry}</span>
                    </span>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-midnight text-white font-semibold shadow-xs shrink-0">
                      {cs.timeframe}
                    </span>
                  </div>

                  {/* Primary Highlight Ticker (Matching Estimated Return on Architecture) */}
                  <div className="mt-3 pb-5 border-b border-midnight-900/20">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-midnight-500">
                      Primary Production Outcome
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-4xl sm:text-5xl font-heading font-bold text-midnight tracking-tight">
                        {cs.metrics[0].value}
                      </span>
                      <span className="text-xs font-mono text-midnight-500 font-semibold">
                        {cs.metrics[0].label}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-midnight-600 mt-2 line-clamp-2 leading-relaxed font-sans">
                      {cs.headline}
                    </p>
                  </div>

                  {/* 3 Sub-Metrics Grid (Matching ROI Sub-metrics) */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 my-5">
                    {cs.metrics.slice(1, 4).map((m, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:p-3.5 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs flex flex-col justify-between"
                      >
                        <div className="text-[10px] sm:text-[11px] text-midnight-500 font-sans font-medium line-clamp-1">
                          {m.label}
                        </div>
                        <div className="text-lg sm:text-xl font-mono font-bold text-midnight mt-1">
                          {m.value}
                        </div>
                        <div className="text-[9px] text-midnight-400 font-mono mt-0.5 line-clamp-1">
                          {m.sublabel}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Attribution & Action Button */}
                <div className="pt-4 border-t border-midnight-900/20 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-full bg-midnight text-white font-bold text-xs flex items-center justify-center font-heading shrink-0 shadow-2xs">
                      {cs.quote.author.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-bold text-midnight leading-tight truncate">
                        {cs.quote.author}
                      </div>
                      <div className="text-[10px] text-midnight-500 leading-tight truncate">
                        {cs.quote.role}
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/case-studies#${cs.id}`}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-midnight text-white text-xs font-semibold hover:bg-midnight-800 transition-colors shadow-xs shrink-0 group/btn"
                  >
                    <span>Teardown</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SECTION 7: THE 45-MINUTE ENGINEERING CHARTER (Atmospheric Cloudscape)
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden">
        {/* Rich Cloud Backdrop with Clean Edge Feathering */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-80 z-0"
          style={{
            backgroundImage: `url('/atmospheric_cloud_backdrop.webp')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            maskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 85%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 85%, transparent 100%)',
          }}
        />

        {/* Atmospheric Daylight Glow (Non-washing) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-white/85 via-sky-mist/40 to-transparent blur-3xl pointer-events-none z-0" />

        {/* Symmetrical Top & Bottom Soft Blend Overlays into adjacent sky-canvas */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-canvas via-sky-canvas/70 to-transparent pointer-events-none z-0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sky-canvas via-sky-canvas/70 to-transparent pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          {/* Section Eyebrow */}
          <div className="mb-2 sm:mb-3 text-center">
            <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-midnight-500 uppercase">
              ENGINEERING ADVISORY CHARTER
            </span>
          </div>

          {/* Display Giant Headline in Exactly 2 Lines */}
          <h2 className="text-[clamp(2.1rem,4.2vw,4.1rem)] font-heading font-extrabold text-midnight tracking-tighter leading-[1.08] max-w-4xl mx-auto mb-8 sm:mb-10">
            <span className="block">Reserve Your 45-Minute</span>
            <span className="block">Technical Whiteboarding Session</span>
          </h2>

          {/* Large Visual Card Matching Estimated Return on Architecture Design System */}
          <div className="max-w-4xl lg:max-w-5xl mx-auto p-6 sm:p-9 lg:p-10 flex flex-col justify-between rounded-3xl bg-white/90 backdrop-blur-xl border border-midnight-900/35 hover:border-midnight-900/70 text-midnight shadow-[0_10px_35px_rgba(10,17,40,0.06)] hover:shadow-[0_15px_45px_rgba(10,17,40,0.12)] transition-all duration-300 text-left">
            <div>
              {/* Top Eyebrow with Sparkles & Status Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs font-mono uppercase tracking-widest text-midnight-500 font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-icy-deep" />
                  Principal Systems Architecture Review
                </span>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 border border-midnight-900/20 text-[11px] font-mono text-midnight shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>4 Slots Available This Week</span>
                </div>
              </div>

              {/* Big Ticker matching Estimated Return on Architecture */}
              <div className="mt-4 pb-6 border-b border-midnight-900/20">
                <div className="text-[11px] font-mono uppercase tracking-wider text-midnight-500">
                  Session Architecture & Deliverable Window
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 mt-1.5">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-midnight tracking-tight">
                      45 Min
                    </span>
                    <span className="text-xs sm:text-sm font-mono text-midnight-500 font-semibold">
                      / 1-on-1 Whiteboard Session
                    </span>
                  </div>
                  <div className="text-xs font-mono text-midnight-700 bg-white/95 px-3.5 py-1.5 rounded-xl border border-midnight-900/20 shadow-2xs self-start sm:self-auto flex items-center gap-1.5">
                    <span className="text-midnight-400">Deliverable:</span>
                    <span className="font-semibold text-midnight">48-Hr Graph Architecture Spec</span>
                  </div>
                </div>
              </div>

              {/* Sub-Metrics Grid (Matching ROI Sub-metrics Style) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                <div className="p-4 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-midnight-600 text-xs font-medium">
                      <Clock className="w-3.5 h-3.5 text-icy-deep" />
                      <span>Session Protocol</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-mono font-bold text-midnight mt-1.5">
                      Engineers Only
                    </div>
                  </div>
                  <div className="text-[11px] text-midnight-500 mt-1 leading-relaxed">
                    Direct whiteboard with principal AI systems architects. 100% zero-sales call.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-midnight-600 text-xs font-medium">
                      <Sparkles className="w-3.5 h-3.5 text-icy-deep" />
                      <span>Output Deliverable</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-mono font-bold text-midnight mt-1.5">
                      State Machine Spec
                    </div>
                  </div>
                  <div className="text-[11px] text-midnight-500 mt-1 leading-relaxed">
                    Custom node-and-edge graph blueprint with latency & ROI models.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-midnight-600 text-xs font-medium">
                      <Shield className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Enterprise Security</span>
                    </div>
                    <div className="text-xl sm:text-2xl font-mono font-bold text-midnight mt-1.5">
                      Air-Gapped & ZDR
                    </div>
                  </div>
                  <div className="text-[11px] text-midnight-500 mt-1 leading-relaxed">
                    Zero data retention and signed mutual NDA protection standard.
                  </div>
                </div>
              </div>
            </div>

            {/* Email Report Form & Direct Booking CTA */}
            <div className="pt-5 border-t border-midnight-900/20 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-5">
              <div className="flex-1 max-w-md">
                <AnimatePresence mode="wait">
                  {!whiteboardSubmitted ? (
                    <form onSubmit={handleWhiteboardSubmit} className="space-y-1.5">
                      <label className="text-xs font-medium text-midnight-700 block">
                        Receive custom architecture roadmap for this session:
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="email"
                          required
                          placeholder="work@company.com"
                          value={whiteboardEmail}
                          onChange={(e) => setWhiteboardEmail(e.target.value)}
                          className="flex-1 px-4 py-2.5 rounded-full bg-white/95 border border-midnight-900/20 text-xs text-midnight placeholder:text-midnight-400 focus:outline-none focus:ring-2 focus:ring-midnight shadow-2xs"
                        />
                        <button
                          type="submit"
                          className="p-2.5 rounded-full bg-midnight text-white hover:bg-midnight-800 transition-colors shadow-sm shrink-0 cursor-pointer"
                          title="Send roadmap"
                        >
                          <Send className="w-4 h-4" />
                        </button>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Architecture roadmap dispatched to {whiteboardEmail}!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="shrink-0 flex items-center">
                <SpecularButton
                  to="/book"
                  size="lg"
                  variant="dark"
                  className="w-full sm:w-auto shadow-[0_10px_35px_rgba(10,17,40,0.18)] hover:shadow-[0_15px_45px_rgba(10,17,40,0.28)]"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Schedule 45-Min Architecture Review
                </SpecularButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
