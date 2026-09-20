import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { solutionsData } from '../../data/solutions';

export const FlagshipBlueprintsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = solutionsData.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  return (
    <div className="w-full max-w-6xl mx-auto relative px-2 sm:px-4">
      {/* 3D Depth Stage */}
      <div className="relative h-[620px] sm:h-[600px] md:h-[600px] w-full flex items-center justify-center overflow-hidden sm:overflow-visible">
        {solutionsData.map((sol, index) => {
          const numStr = String(index + 1).padStart(2, '0');
          const diff = (index - currentIndex + total) % total;

          let position: 'center' | 'left' | 'right' = 'center';
          if (diff === 0) {
            position = 'center';
          } else if (diff === 1) {
            position = 'right';
          } else {
            position = 'left';
          }

          // Relative translation offsets for 3D stage
          const getXOffset = () => {
            if (position === 'center') return '0%';
            if (position === 'left') return '-52%';
            return '52%';
          };

          return (
            <motion.div
              key={sol.id}
              onClick={() => {
                if (position === 'left') handlePrev();
                if (position === 'right') handleNext();
              }}
              initial={{ y: '-50%' }}
              animate={{
                x: getXOffset(),
                y: '-50%',
                scale: position === 'center' ? 1 : 0.84,
                opacity: position === 'center' ? 1 : 0.55,
                zIndex: position === 'center' ? 30 : 10,
                filter: position === 'center' ? 'blur(0px)' : 'blur(1.5px)',
              }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 28,
              }}
              className={`absolute w-[90%] sm:w-[540px] md:w-[600px] top-1/2 ${
                position !== 'center' ? 'cursor-pointer hover:opacity-75' : ''
              }`}
            >
              <div className="h-full rounded-3xl bg-white/95 backdrop-blur-xl border border-midnight-900/35 hover:border-midnight-900/70 p-6 sm:p-8 text-midnight shadow-[0_15px_45px_rgba(10,17,40,0.12)] transition-all duration-300 flex flex-col justify-between select-none group">
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between gap-2 mb-3 sm:mb-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-midnight text-white flex items-center justify-center shadow-xs">
                        <span className="text-[11px] font-mono font-bold">{numStr}</span>
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-midnight-500 uppercase">
                        {sol.eyebrow}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-midnight text-white font-semibold shadow-xs shrink-0">
                      {sol.timeframe.split(' ')[0]} Deploy
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-heading font-bold text-midnight tracking-tight leading-snug group-hover:text-icy-deep transition-colors min-h-[2.75rem] flex items-center">
                    {sol.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-midnight-600 mt-2 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {sol.summary}
                  </p>

                  {/* Image Preview Container */}
                  <div className="my-4 rounded-2xl overflow-hidden border border-midnight-900/20 shadow-md relative h-40 sm:h-48 md:h-52 bg-midnight-900/5 group/img">
                    <img
                      src={sol.image}
                      alt={sol.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg bg-midnight/90 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-medium shadow-xs truncate max-w-[70%]">
                        {sol.techStack[0]}
                      </span>
                      <span className="px-2 py-1 rounded-lg bg-white/95 backdrop-blur-md border border-midnight-900/20 text-midnight text-[9px] font-mono font-semibold shadow-xs shrink-0">
                        Deterministic
                      </span>
                    </div>
                  </div>

                  {/* Metrics Row (2 key metrics) */}
                  <div className="grid grid-cols-2 gap-3 py-2.5 border-t border-midnight-900/20">
                    <div className="p-2.5 rounded-xl bg-white/95 border border-midnight-900/20 shadow-2xs flex flex-col">
                      <span className="text-lg sm:text-xl font-mono font-bold text-midnight tracking-tight">
                        {sol.metrics[0].value}
                      </span>
                      <span className="text-[10px] sm:text-xs text-midnight-500 font-sans mt-0.5 leading-tight line-clamp-1">
                        {sol.metrics[0].label}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/95 border border-midnight-900/20 shadow-2xs flex flex-col">
                      <span className="text-lg sm:text-xl font-mono font-bold text-midnight tracking-tight">
                        {sol.metrics[1]?.value || sol.metrics[2]?.value}
                      </span>
                      <span className="text-[10px] sm:text-xs text-midnight-500 font-sans mt-0.5 leading-tight line-clamp-1">
                        {sol.metrics[1]?.label || sol.metrics[2]?.label}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Footer: Integrations & Specs CTA */}
                <div className="mt-3 pt-3 border-t border-midnight-900/20 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 max-w-[55%] overflow-hidden">
                    {sol.enterpriseIntegrations.slice(0, 2).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/95 text-midnight-700 border border-midnight-900/20 shadow-2xs font-medium truncate"
                      >
                        {tech}
                      </span>
                    ))}
                    <span className="text-[10px] font-mono text-midnight-400 shrink-0">
                      +{sol.enterpriseIntegrations.length - 2}
                    </span>
                  </div>
                  <Link
                    to={`/solutions#${sol.id}`}
                    onClick={(e) => {
                      if (position !== 'center') {
                        e.preventDefault();
                      }
                    }}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-midnight text-white text-xs font-semibold hover:bg-midnight-800 transition-colors shadow-xs shrink-0"
                  >
                    <span>Full Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}

        {/* Flanking Arrow Controls on either side of the center card */}
        <div className="absolute inset-0 pointer-events-none z-40 flex items-center justify-center">
          <div className="relative w-[90%] sm:w-[540px] md:w-[600px] h-0 flex items-center justify-between">
            <button
              onClick={handlePrev}
              type="button"
              aria-label="Previous Blueprint"
              className="pointer-events-auto absolute -top-5 sm:-top-6 left-1 sm:left-auto sm:-left-6 md:-left-8 sm:-translate-x-full w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-midnight-900/35 hover:border-midnight-900/70 text-midnight shadow-[0_4px_18px_rgba(10,17,40,0.15)] hover:shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95 group backdrop-blur-md"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-midnight group-hover:text-black transition-colors" />
            </button>
            <button
              onClick={handleNext}
              type="button"
              aria-label="Next Blueprint"
              className="pointer-events-auto absolute -top-5 sm:-top-6 right-1 sm:right-auto sm:-right-6 md:-right-8 sm:translate-x-full w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 border border-midnight-900/35 hover:border-midnight-900/70 text-midnight shadow-[0_4px_18px_rgba(10,17,40,0.15)] hover:shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-110 active:scale-95 group backdrop-blur-md"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-midnight group-hover:text-black transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
