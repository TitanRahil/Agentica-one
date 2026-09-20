import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SpecularButton } from '../ui/SpecularButton';

export const StickyMobileBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-3 inset-x-3 z-40 md:hidden pointer-events-auto"
        >
          <div className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/90 shadow-2xl">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono uppercase tracking-wider text-midnight-500 flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3 text-icy-deep" />
                45-Min Technical Audit
              </span>
              <span className="text-xs font-heading font-bold text-midnight">
                Custom Systems Architecture
              </span>
            </div>
            <SpecularButton to="/book" size="sm" variant="dark" icon={<ArrowRight className="w-3.5 h-3.5" />}>
              Book Call
            </SpecularButton>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
