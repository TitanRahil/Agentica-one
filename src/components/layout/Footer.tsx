import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Server, Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-midnight text-white pt-16 pb-12 overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-icy/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Column 1: Brand & Thesis (Span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                <span className="text-midnight text-sm font-bold font-heading">A1</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                AGENTICA.ONE
              </span>
            </div>
            <p className="text-sm text-midnight-300 leading-relaxed max-w-sm">
              Architecting bespoke, deterministic multi-agent AI systems for scaling enterprises ($1M–$50M ARR). Uniquely personalised for your business.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs font-mono text-midnight-300">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Shield className="w-3.5 h-3.5 text-icy" /> SOC2 Type II
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Lock className="w-3.5 h-3.5 text-emerald-400" /> Zero Data Retention
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <Server className="w-3.5 h-3.5 text-icy-glow" /> Dedicated VPC
              </span>
            </div>
          </div>

          {/* Column 2: Flagship Systems */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-icy font-semibold">
              Flagship Systems
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-midnight-300">
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Revenue Intelligence Engine
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Real-Time CRM Operations
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Knowledge & Document Copilot
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-white transition-colors">
                  Enterprise Integration Stack
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Methodology & Evidence */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-icy font-semibold">
              Architecture & Proof
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-midnight-300">
              <li>
                <Link to="/methodology" className="hover:text-white transition-colors">
                  4-Stage Deployment Protocol
                </Link>
              </li>
              <li>
                <Link to="/methodology" className="hover:text-white transition-colors">
                  Deterministic Guardrails
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  B2B Advisory Firm Teardown
                </Link>
              </li>
              <li>
                <Link to="/case-studies" className="hover:text-white transition-colors">
                  Tech Consultancy Teardown
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Enterprise Security */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-icy font-semibold">
              Security & Trust
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-midnight-300">
              <li className="flex items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-icy" />
                <span>Deterministic State Graphs</span>
              </li>
              <li>
                <span className="text-midnight-400">Zero Public Model Training</span>
              </li>
              <li>
                <span className="text-midnight-400">Human-In-The-Loop Approval</span>
              </li>
              <li>
                <Link to="/book" className="hover:text-white transition-colors">
                  Request Security Whitepaper
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-midnight-400">
          <div>
            © {new Date().getFullYear()} Agentica-One Inc. All rights reserved. Uniquely personalised for your business.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-midnight-200 cursor-pointer">Security Compliance</span>
            <span className="hover:text-midnight-200 cursor-pointer">Privacy Charter</span>
            <span className="hover:text-midnight-200 cursor-pointer">Terms of Engagement</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
