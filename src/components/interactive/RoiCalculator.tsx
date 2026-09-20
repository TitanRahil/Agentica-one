import React, { useState, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Calculator,
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Clock,
  Users,
  Sparkles,
  Send,
  SlidersHorizontal,
  FileText,
  Activity,
  FileCheck2,
} from 'lucide-react';
import { SpecularButton } from '../ui/SpecularButton';
import confetti from 'canvas-confetti';

interface BottleneckOption {
  id: string;
  label: string;
  factor: number; // hours saved per person per week
  hourlyRate: number;
  description: string;
}

const bottlenecks: BottleneckOption[] = [
  {
    id: 'rfp-prep',
    label: 'RFP & Deal Intelligence',
    factor: 12,
    hourlyRate: 185,
    description: 'Deconstruct complex multi-stage RFPs and synthesize partner past-performance dossiers in minutes.',
  },
  {
    id: 'crm-admin',
    label: 'CRM & Pipeline Hygiene',
    factor: 8,
    hourlyRate: 140,
    description: 'Eliminate manual data entry, auto-enrich stakeholder threads, and detect deal slippage risk.',
  },
  {
    id: 'document-review',
    label: 'Contract & Document Ops',
    factor: 10,
    hourlyRate: 165,
    description: 'Autonomous multi-hop redlining and audit synthesis across legal and compliance repositories.',
  },
];

export const RoiCalculator: React.FC = () => {
  const sliderId = useId();
  const [teamSize, setTeamSize] = useState<number>(25);
  const [selectedBottleneck, setSelectedBottleneck] = useState<string>('rfp-prep');
  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>('');

  const currentBottleneck = bottlenecks.find((b) => b.id === selectedBottleneck) || bottlenecks[0];

  // Calculations
  const weeklyHoursPerPerson = currentBottleneck.factor;
  const totalWeeklyHours = teamSize * weeklyHoursPerPerson;
  const totalMonthlyHours = Math.round(totalWeeklyHours * 4.33);
  const annualSavings = Math.round(totalWeeklyHours * currentBottleneck.hourlyRate * 50);

  const handleCelebrate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    confetti({
      particleCount: 75,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#38BDF8', '#0A1128', '#BAE6FD', '#0284C7'],
    });
    setEmailSubmitted(true);
  };

  return (
    <div id="roi-calculator" className="relative w-full max-w-5xl mx-auto scroll-mt-24">
      {/* Header */}
      <div className="text-center mb-12 sm:mb-16">
        <div className="mb-2 sm:mb-3 text-center">
          <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-midnight-500 uppercase inline-flex items-center gap-2">
            <Calculator className="w-3.5 h-3.5 text-icy-deep" />
            <span>INTERACTIVE VALUE MODELING ENGINE</span>
          </span>
        </div>
        <h2 className="text-[clamp(2.4rem,5.5vw,4.5rem)] font-heading font-extrabold text-midnight tracking-tighter leading-[1.08] max-w-4xl mx-auto">
          Quantify Your Human Capital Velocity Unlocked
        </h2>
        <p className="mt-4 text-midnight-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Calculate the direct billable hours and enterprise capital reclaimed by replacing manual administrative friction with deterministic multi-agent systems.
        </p>
      </div>

      {/* Main Calculator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Inputs (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-midnight-900/35 hover:border-midnight-900/70 text-midnight shadow-[0_10px_35px_rgba(10,17,40,0.06)] hover:shadow-[0_15px_45px_rgba(10,17,40,0.12)] transition-all duration-300">
          <div>
            {/* Top Eyebrow */}
            <span className="text-xs font-mono uppercase tracking-widest text-midnight-500 font-semibold flex items-center gap-1.5 mb-6">
              <SlidersHorizontal className="w-3.5 h-3.5 text-icy-deep" />
              Operational Parameters & Scope
            </span>

            <div className="space-y-7">
              {/* Input 1: Team Size Slider */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label htmlFor={sliderId} className="flex items-center gap-2 text-sm font-semibold text-midnight">
                    <Users className="w-4 h-4 text-icy-deep" />
                    <span>Knowledge Workers / Fee Earners</span>
                  </label>
                  <span className="font-mono text-base sm:text-lg font-bold text-midnight bg-white/95 px-3.5 py-1 rounded-xl border border-midnight-900/20 shadow-2xs inline-flex items-center gap-1.5">
                    {teamSize} <span className="text-xs font-sans text-midnight-500 font-normal">{teamSize >= 100 ? 'People+' : 'People'}</span>
                  </span>
                </div>
                <input
                  id={sliderId}
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2.5 bg-midnight-100 rounded-lg appearance-none cursor-pointer accent-midnight focus:outline-none"
                />
                <div className="flex justify-between text-[11px] font-mono mt-2.5 gap-1">
                  {[
                    { val: 5, label: '5 Boutique' },
                    { val: 25, label: '25 Mid-Market' },
                    { val: 50, label: '50 Scaling' },
                    { val: 100, label: '100+ Enterprise' },
                  ].map((tier) => (
                    <button
                      key={tier.val}
                      type="button"
                      onClick={() => setTeamSize(tier.val)}
                      className={`px-2 py-0.5 rounded-md transition-all cursor-pointer ${
                        teamSize === tier.val
                          ? 'bg-midnight text-white font-semibold shadow-2xs'
                          : 'text-midnight-500 hover:text-midnight hover:bg-white/80'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 2: Primary Bottleneck Pills */}
              <div>
                <label className="block text-sm font-semibold text-midnight mb-3">
                  Select Primary Workflow Friction:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {bottlenecks.map((item) => {
                    const isSelected = selectedBottleneck === item.id;
                    const IconComponent =
                      item.id === 'rfp-prep'
                        ? FileText
                        : item.id === 'crm-admin'
                        ? Activity
                        : FileCheck2;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setSelectedBottleneck(item.id)}
                        className={`text-left p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between cursor-pointer group ${
                          isSelected
                            ? 'bg-midnight text-white border-midnight shadow-md'
                            : 'bg-white/70 hover:bg-white/95 text-midnight border-midnight-900/20 shadow-2xs hover:border-midnight-900/40'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <IconComponent
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isSelected ? 'text-icy' : 'text-midnight-600 group-hover:text-midnight'
                            }`}
                          />
                          <span className="text-xs font-semibold leading-snug">{item.label}</span>
                        </div>
                        <span
                          className={`text-[10px] font-mono mt-1 ${
                            isSelected ? 'text-icy font-medium' : 'text-midnight-500'
                          }`}
                        >
                          ~{item.factor} hrs/wk saved
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Polished Active Description Pill */}
                <div className="mt-3.5 p-3 rounded-xl bg-white/70 border border-midnight-900/15 text-xs text-midnight-700 flex items-start gap-2 shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-icy-deep mt-1.5 shrink-0" />
                  <p className="leading-relaxed font-sans">{currentBottleneck.description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee footer */}
          <div className="mt-8 pt-5 border-t border-midnight-900/20 flex items-center justify-between gap-3 text-xs text-midnight-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-sans">Empirical time-study benchmarks from active deployments.</span>
            </div>
            <span className="hidden sm:inline-block text-[10px] font-mono text-midnight-400 uppercase tracking-wider font-semibold">
              Verified Model
            </span>
          </div>
        </div>

        {/* Right Column: Output Ticker & PDF CTA (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between rounded-3xl bg-white/90 backdrop-blur-xl border border-midnight-900/35 hover:border-midnight-900/70 text-midnight shadow-[0_10px_35px_rgba(10,17,40,0.06)] hover:shadow-[0_15px_45px_rgba(10,17,40,0.12)] transition-all duration-300">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-midnight-500 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-icy-deep" />
                Estimated Return on Architecture
              </span>

              {/* Annual Value Ticker */}
              <div className="mt-4 pb-6 border-b border-midnight-900/20">
                <div className="text-[11px] font-mono uppercase tracking-wider text-midnight-500">
                  Annual Reclaimed Enterprise Value
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-4xl sm:text-5xl font-heading font-bold text-midnight tracking-tight">
                    ${annualSavings.toLocaleString()}
                  </span>
                  <span className="text-xs font-mono text-midnight-500 font-semibold">/ year</span>
                </div>
              </div>

              {/* Sub-metrics */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-3.5 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-midnight-600 text-xs font-medium">
                    <Clock className="w-3.5 h-3.5 text-icy-deep" />
                    <span>Monthly Hours</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-midnight mt-1">
                    {totalMonthlyHours.toLocaleString()} hrs
                  </div>
                  <div className="text-[10px] text-midnight-500 mt-0.5">Direct labor capacity</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/95 border border-midnight-900/20 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-midnight-600 text-xs font-medium">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Team Equivalent</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-mono font-bold text-midnight mt-1">
                    {Math.max(1, Math.round(teamSize * 0.28))} FTEs
                  </div>
                  <div className="text-[10px] text-midnight-500 mt-0.5">Capacity unlocked</div>
                </div>
              </div>
            </div>

            {/* Email Report or Direct Booking */}
            <div className="pt-2">
              <AnimatePresence mode="wait">
                {!emailSubmitted ? (
                  <form onSubmit={handleCelebrate} className="space-y-3">
                    <label className="text-xs font-medium text-midnight-700 block">
                      Receive custom architecture roadmap for this model:
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        required
                        placeholder="work@company.com"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
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
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Architecture roadmap dispatched to {emailInput}!</span>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-4">
                <SpecularButton
                  to="/book"
                  size="md"
                  variant="dark"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Schedule 45-Min Architecture Review
                </SpecularButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
