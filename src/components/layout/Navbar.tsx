import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SpecularButton } from '../ui/SpecularButton';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Solutions', href: '/solutions' },
    { label: 'Methodology', href: '/methodology' },
    { label: 'Case Studies', href: '/case-studies' },
  ];

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center justify-between w-full max-w-3xl lg:max-w-4xl px-3 sm:px-4 py-1.5 sm:py-2 rounded-full transition-all duration-300 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-2xl border border-white/90 shadow-glass-md'
            : 'bg-white/70 backdrop-blur-xl border border-white/80 shadow-glass-sm'
        }`}
      >
        {/* Sleek Brand Logo */}
        <Link to="/" className="flex items-center gap-2 group pl-1">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-midnight flex items-center justify-center border border-white/25 shadow-xs transition-transform duration-200 group-hover:scale-105">
            <span className="text-icy text-xs font-bold font-heading">A1</span>
          </div>
          <span className="font-heading font-bold text-sm tracking-tight text-midnight">
            AGENTICA.ONE
          </span>
        </Link>

        {/* Sleek Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={`relative px-3 py-1.5 text-xs font-medium transition-colors duration-150 rounded-full ${
                  isActive
                    ? 'text-midnight font-semibold bg-white/90 shadow-xs'
                    : 'text-midnight-600 hover:text-midnight hover:bg-white/50'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="navPillSleek"
                    className="absolute inset-0 border border-white/80 rounded-full pointer-events-none"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}

          <a
            href="/#roi-calculator"
            className="px-3 py-1.5 text-xs font-medium text-midnight-600 hover:text-midnight hover:bg-white/50 rounded-full transition-colors"
          >
            ROI Model
          </a>
        </div>

        {/* Compact Specular CTA */}
        <div className="hidden md:flex items-center gap-2">
          <SpecularButton
            to="/book"
            size="sm"
            variant="dark"
            className="px-3.5 py-1.5 text-xs font-medium shadow-xs"
            icon={<ArrowRight className="w-3 h-3" />}
          >
            Book Session
          </SpecularButton>
        </div>

        {/* Mobile Burger */}
        <div className="flex items-center gap-1.5 md:hidden">
          <SpecularButton to="/book" size="sm" variant="dark" className="px-3 py-1 text-xs">
            Book
          </SpecularButton>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-midnight-700 hover:text-midnight rounded-full bg-white/60 border border-white/80 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto fixed top-16 inset-x-4 p-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-white/90 shadow-2xl z-40 md:hidden flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1 pb-2 border-b border-midnight-100">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="px-3 py-2 text-xs font-medium text-midnight hover:bg-sky-canvas rounded-xl transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/#roi-calculator"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-midnight hover:bg-sky-canvas rounded-xl transition-colors"
              >
                ROI & Bottleneck Model
              </a>
            </div>

            <div className="pt-1">
              <SpecularButton to="/book" size="md" variant="dark" className="w-full justify-center text-xs">
                Book Architecture Session
              </SpecularButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
