import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Mail,
  Building,
  ArrowRight,
  Lock,
  ChevronLeft,
} from 'lucide-react';
import { GlassCard } from '../components/ui/GlassCard';
import { SpecularButton } from '../components/ui/SpecularButton';
import confetti from 'canvas-confetti';

const timeSlots = [
  '09:00 AM EST',
  '10:30 AM EST',
  '01:00 PM EST',
  '02:30 PM EST',
  '04:00 PM EST',
];

const availableDays = [
  { day: 'Tue', date: 'Sep 15' },
  { day: 'Wed', date: 'Sep 16' },
  { day: 'Thu', date: 'Sep 17' },
  { day: 'Fri', date: 'Sep 18' },
  { day: 'Mon', date: 'Sep 21' },
];

export const BookingPage: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    companyName: '',
    firmSize: '25–50 Knowledge Workers',
    primaryBottleneck: 'RFP & Deal Intelligence Synthesis',
    selectedDay: availableDays[0].date,
    selectedTime: timeSlots[1],
  });

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.workEmail || !formData.companyName) return;
    setStep(2);
  };

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#38BDF8', '#0A1128', '#7DD3FC', '#0284C7'],
    });
    setStep(3);
  };

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-sky-canvas min-h-screen">
      {/* Background Cloud Overlay */}
      <div
        className="fixed inset-0 bg-cover bg-center opacity-30 pointer-events-none mix-blend-multiply"
        style={{ backgroundImage: `url('/atmospheric_cloud_backdrop.jpg')` }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mb-3">
            <span className="text-xs sm:text-sm font-mono font-semibold tracking-[0.25em] text-midnight-500 uppercase">
              TECHNICAL WHITEBOARDING CHARTER
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-midnight mt-4 tracking-tight">
            Reserve Your 45-Minute Architecture Review
          </h1>
          <p className="mt-4 text-base sm:text-lg text-midnight-700 leading-relaxed">
            Direct 1-on-1 session with a senior multi-agent systems architect. Zero sales pressure. 100% technical whiteboarding and workflow feasibility mapping.
          </p>
        </div>

        {/* 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column (5 cols): The Charter Commitments */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <GlassCard className="p-6 sm:p-8" hoverEffect={false}>
              <h3 className="font-heading font-bold text-xl text-midnight mb-4">
                The Engineering Advisory Guarantee
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-midnight text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-midnight">Zero-Sales Rep Guarantee</h4>
                    <p className="text-xs text-midnight-600 mt-1 leading-relaxed">
                      You will speak exclusively with senior multi-agent systems architects. We do not employ quota-carrying sales reps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-midnight text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-midnight">Tailored Architecture Blueprint</h4>
                    <p className="text-xs text-midnight-600 mt-1 leading-relaxed">
                      Within 48 hours of our session, receive a custom node-and-state graph diagram with estimated ROI and risk bounds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-midnight text-white flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-midnight">Mutual NDA & Zero-Retention</h4>
                    <p className="text-xs text-midnight-600 mt-1 leading-relaxed">
                      All workflow details discussed are strictly protected under mutual non-disclosure and SOC2-aligned protocols.
                    </p>
                  </div>
                </div>
              </div>

              {/* Client endorsement */}
              <div className="mt-8 pt-6 border-t border-midnight-100">
                <p className="text-xs text-midnight-700 italic leading-relaxed">
                  "The 45-minute whiteboarding call was more valuable than months of vendor sales demos. We walked away with a complete systems diagram."
                </p>
                <div className="mt-3 text-[11px] font-mono font-bold text-midnight">
                  — Marcus Vance, Managing Partner
                </div>
              </div>
            </GlassCard>

            <div className="flex items-center justify-center gap-6 text-xs font-mono text-midnight-600">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" /> SOC2 Type II
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-icy-deep" /> Ephemeral Data
              </span>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Intake & Booking Form */}
          <div className="lg:col-span-7">
            <GlassCard variant="glow" className="p-6 sm:p-10" hoverEffect={false}>
              <AnimatePresence mode="wait">
                {/* STEP 1: Organizational Context */}
                {step === 1 && (
                  <motion.form
                    key="step1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    onSubmit={handleStep1Submit}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-midnight-100">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-icy-deep font-semibold">
                          Step 01 of 02
                        </span>
                        <h3 className="text-xl font-heading font-bold text-midnight">
                          Organizational Context
                        </h3>
                      </div>
                      <span className="text-xs font-mono text-midnight-400">Takes 60 seconds</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-midnight mb-1.5">
                          Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-midnight-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="text"
                            required
                            placeholder="Sarah Jenkins"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/90 border border-white text-sm text-midnight placeholder:text-midnight-400 focus:outline-none focus:ring-2 focus:ring-icy shadow-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-midnight mb-1.5">
                          Corporate Work Email *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-midnight-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                          <input
                            type="email"
                            required
                            placeholder="sarah@firm.com"
                            value={formData.workEmail}
                            onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                            className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/90 border border-white text-sm text-midnight placeholder:text-midnight-400 focus:outline-none focus:ring-2 focus:ring-icy shadow-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-midnight mb-1.5">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building className="w-4 h-4 text-midnight-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Acme Global Advisors"
                          value={formData.companyName}
                          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/90 border border-white text-sm text-midnight placeholder:text-midnight-400 focus:outline-none focus:ring-2 focus:ring-icy shadow-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-midnight mb-1.5">
                          Firm Headcount
                        </label>
                        <select
                          value={formData.firmSize}
                          onChange={(e) => setFormData({ ...formData, firmSize: e.target.value })}
                          className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-white text-sm text-midnight focus:outline-none focus:ring-2 focus:ring-icy shadow-sm"
                        >
                          <option>5–20 Knowledge Workers</option>
                          <option>25–50 Knowledge Workers</option>
                          <option>50–100 Knowledge Workers</option>
                          <option>100+ Enterprise</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-midnight mb-1.5">
                          Primary Bottleneck
                        </label>
                        <select
                          value={formData.primaryBottleneck}
                          onChange={(e) =>
                            setFormData({ ...formData, primaryBottleneck: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-white text-sm text-midnight focus:outline-none focus:ring-2 focus:ring-icy shadow-sm"
                        >
                          <option>RFP & Deal Intelligence Synthesis</option>
                          <option>Real-Time CRM & Pipeline Hygiene</option>
                          <option>Contract & Document Knowledge Copilot</option>
                          <option>Custom Multi-Agent State Machine</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <SpecularButton
                        type="submit"
                        size="lg"
                        variant="dark"
                        className="w-full justify-center"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Proceed to Calendar Selection
                      </SpecularButton>
                    </div>
                  </motion.form>
                )}

                {/* STEP 2: Calendar Slot Selection */}
                {step === 2 && (
                  <motion.form
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    onSubmit={handleBookingConfirm}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-midnight-100">
                      <div>
                        <span className="text-xs font-mono uppercase tracking-widest text-icy-deep font-semibold">
                          Step 02 of 02
                        </span>
                        <h3 className="text-xl font-heading font-bold text-midnight">
                          Select Whiteboard Slot
                        </h3>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs text-midnight-500 hover:text-midnight flex items-center gap-1 font-mono"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" /> Back
                      </button>
                    </div>

                    {/* Day Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-midnight mb-2 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-icy-deep" />
                        <span>Select Business Day:</span>
                      </label>
                      <div className="grid grid-cols-5 gap-2">
                        {availableDays.map((d) => {
                          const isSelected = formData.selectedDay === d.date;
                          return (
                            <button
                              key={d.date}
                              type="button"
                              onClick={() => setFormData({ ...formData, selectedDay: d.date })}
                              className={`p-3 rounded-2xl border text-center transition-all ${
                                isSelected
                                  ? 'bg-midnight text-white border-midnight shadow-md'
                                  : 'bg-white/80 hover:bg-white text-midnight border-white'
                              }`}
                            >
                              <div className="text-[10px] font-mono uppercase opacity-75">{d.day}</div>
                              <div className="text-sm font-bold font-heading mt-0.5">{d.date}</div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Time Slot Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-midnight mb-2 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-icy-deep" />
                        <span>Select Time Slot:</span>
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {timeSlots.map((time) => {
                          const isSelected = formData.selectedTime === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setFormData({ ...formData, selectedTime: time })}
                              className={`p-3 rounded-xl border text-center text-xs font-mono font-semibold transition-all ${
                                isSelected
                                  ? 'bg-midnight text-white border-midnight shadow-md'
                                  : 'bg-white/80 hover:bg-white text-midnight border-white'
                              }`}
                            >
                              {time}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Booking Summary Box */}
                    <div className="p-4 rounded-2xl bg-white/70 border border-white/90 text-xs text-midnight-700">
                      <div className="font-semibold text-midnight font-heading">Whiteboard Reservation:</div>
                      <div className="mt-1 font-mono text-[11px] text-midnight-600">
                        {formData.fullName} ({formData.workEmail}) • {formData.companyName}
                      </div>
                      <div className="mt-0.5 font-mono text-icy-deep font-bold">
                        {formData.selectedDay} at {formData.selectedTime}
                      </div>
                    </div>

                    <div className="pt-2">
                      <SpecularButton
                        type="submit"
                        size="lg"
                        variant="dark"
                        className="w-full justify-center"
                        icon={<ArrowRight className="w-4 h-4" />}
                      >
                        Confirm 45-Minute Session Slot
                      </SpecularButton>
                    </div>
                  </motion.form>
                )}

                {/* STEP 3: Success Confirmation */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-semibold">
                        RESERVATION CONFIRMED
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-heading font-bold text-midnight mt-1">
                        We look forward to whiteboarding with you, {formData.fullName}.
                      </h3>
                      <p className="text-sm text-midnight-600 mt-2 max-w-md mx-auto">
                        Calendar invite and technical briefing documentation dispatched to{' '}
                        <strong className="text-midnight">{formData.workEmail}</strong>.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/80 border border-white/90 max-w-md mx-auto text-left text-xs font-mono space-y-2">
                      <div className="flex justify-between text-midnight-600">
                        <span>Date & Time:</span>
                        <strong className="text-midnight">
                          {formData.selectedDay} • {formData.selectedTime}
                        </strong>
                      </div>
                      <div className="flex justify-between text-midnight-600">
                        <span>Host:</span>
                        <strong className="text-midnight">Senior Multi-Agent Systems Architect</strong>
                      </div>
                      <div className="flex justify-between text-midnight-600">
                        <span>Format:</span>
                        <strong className="text-midnight">Private Screen-Share & Architecture Whiteboard</strong>
                      </div>
                    </div>

                    <div className="pt-4">
                      <SpecularButton to="/" size="md" variant="primary">
                        Return to Agentica-One Home
                      </SpecularButton>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
};
