import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Server, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-midnight text-white pt-10 pb-8 sm:pt-16 sm:pb-12 overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-icy/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Responsive Grid: 2-column on mobile, 5-column on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-10 pb-8 sm:pb-16 border-b border-white/10">
          {/* Column 1: Brand & Thesis (Span 2) */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="text-midnight text-xs sm:text-sm font-bold font-heading">A1</span>
              </div>
              <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white">
                AGENTICA.ONE
              </span>
            </div>
            <p className="text-xs sm:text-sm text-midnight-300 leading-relaxed max-w-sm">
              Architecting bespoke, deterministic multi-agent AI systems for scaling enterprises ($1M–$50M ARR). Uniquely personalised for your business.
            </p>
            <div className="mt-1 sm:mt-2 flex flex-wrap gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono text-midnight-300">
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10">
                <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-icy" /> SOC2 Type II
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10">
                <Lock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" /> Zero Retention
              </span>
              <span className="flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/5 border border-white/10">
                <Server className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-icy-glow" /> Dedicated VPC
              </span>
            </div>
          </div>

          {/* Column 2: Flagship Systems */}
          <div className="col-span-1 flex flex-col gap-2.5 sm:gap-3">
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-icy font-semibold">
              Flagship Systems
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-midnight-300">
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Revenue Engine
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  CRM Operations
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Document Copilot
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Integration Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Methodology & Evidence */}
          <div className="col-span-1 flex flex-col gap-2.5 sm:gap-3">
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-icy font-semibold">
              Architecture & Proof
            </h4>
            <ul className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-midnight-300">
              <li>
                <Link to="/methodology" className="hover:text-white transition-colors">
                  Deployment Protocol
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="hover:text-white transition-colors">
                  Guardrails
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Advisory Teardown
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Tech Teardown
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Enterprise Security */}
          <div className="col-span-2 sm:col-span-1 flex flex-col gap-2.5 sm:gap-3 pt-2 sm:pt-0 border-t border-white/10 sm:border-0">
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest text-icy font-semibold">
              Security & Trust
            </h4>
            <ul className="grid grid-cols-2 sm:flex sm:flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-midnight-300">
              <li className="flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-icy shrink-0" />
                <span>State Graphs</span>
              </li>
              <li>
                <span className="text-midnight-400">Zero Public Training</span>
              </li>
              <li>
                <span className="text-midnight-400">Human-In-The-Loop</span>
              </li>
              <li>
                <Link to="/book" className="hover:text-white transition-colors">
                  Security Specs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] sm:text-xs font-mono text-midnight-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} Agentica-One Inc. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <span className="hover:text-midnight-200 cursor-pointer">Security Compliance</span>
            <span className="hover:text-midnight-200 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-midnight-200 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
