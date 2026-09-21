import React from 'react';

interface AtmosphericTransitionSectionProps {
  topLabel?: string;
  topSublabel?: string;
  headlineLine1?: string;
  headlineLine2?: string;
  description?: string;
}

export const AtmosphericTransitionSection: React.FC<AtmosphericTransitionSectionProps> = ({
  topLabel = 'EMPIRICALLY VALIDATED PERFORMANCE',
  topSublabel = 'Proven across mission-critical client workloads',
  headlineLine1 = 'Rigorously Tested.',
  headlineLine2 = 'Empirically Proven.',
  description = 'Zero hallucinations. Zero operational drift. Delivering audited mathematical precision and compounding human capital velocity in production.',
}) => {
  const [word1 = 'Rigorously', word2 = 'Tested.'] = headlineLine1.split(' ');
  const [word3 = 'Empirically', word4 = 'Proven.'] = headlineLine2.split(' ');

  return (
    <section className="relative py-32 sm:py-44 lg:py-52 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden flex items-center justify-center">
      {/* Rich Cloud Backdrop with Clean Edge Feathering */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-80 z-0"
        style={{
          backgroundImage: `url('/atmospheric_cloud_backdrop.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          maskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 82%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 14%, rgba(0,0,0,1) 82%, transparent 100%)',
        }}
      />

      {/* Atmospheric Daylight Glow (Non-washing) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-b from-white/70 via-sky-mist/30 to-transparent blur-3xl pointer-events-none z-0" />

      {/* Symmetrical Top & Bottom Soft Blend Overlays into adjacent sky-canvas */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-sky-canvas via-sky-canvas/70 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-sky-canvas via-sky-canvas/70 to-transparent pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center">
        {/* Right-Aligned Text Above Header */}
        <div className="w-full flex justify-end mb-5 sm:mb-7 pr-4 sm:pr-8 lg:pr-12">
          <div className="text-right">
            <span className="text-xs sm:text-sm md:text-[15px] font-mono font-bold tracking-[0.2em] text-midnight-700 uppercase block">
              {topLabel}
            </span>
            <span className="text-xs sm:text-sm md:text-[15px] font-sans text-midnight-600 block mt-1">
              {topSublabel}
            </span>
          </div>
        </div>

        {/* Giant Screen-Filling Headline - Desktop (Original untouched) */}
        <h2 className="hidden sm:flex text-[clamp(3.6rem,9.2vw,10.2rem)] font-heading font-extrabold text-midnight tracking-tighter leading-none text-center w-full select-none flex-col gap-3 sm:gap-5 lg:gap-6">
          <span className="block whitespace-nowrap">{headlineLine1}</span>
          <span className="block whitespace-nowrap text-midnight/90">{headlineLine2}</span>
        </h2>

        {/* Giant Screen-Filling Headline - Mobile Only */}
        <h2 className="flex sm:hidden text-midnight tracking-tight leading-none w-full select-none flex-col gap-2 text-center">
          {/* Pair 1: word1 (refined weight, gently left-aligned on mobile) | word2 (enlarged bold scale, right-aligned on mobile) */}
          <span className="w-full flex flex-col text-center">
            <span className="block text-left pl-6 xs:pl-8 font-heading font-normal text-midnight-600 text-[clamp(2.35rem,9.5vw,4.5rem)] leading-tight whitespace-nowrap">
              {word1}
            </span>
            <span className="block text-right pr-6 xs:pr-8 font-heading font-extrabold text-midnight text-[clamp(4.15rem,16.5vw,10.2rem)] leading-[0.9] whitespace-nowrap">
              {word2}
            </span>
          </span>

          {/* Pair 2: word3 (refined weight, gently left-aligned on mobile) | word4 (enlarged bold scale, right-aligned on mobile) */}
          <span className="w-full flex flex-col text-center">
            <span className="block text-left pl-6 xs:pl-8 font-heading font-normal text-midnight-600 text-[clamp(2.35rem,9.5vw,4.5rem)] leading-tight whitespace-nowrap">
              {word3}
            </span>
            <span className="block text-right pr-6 xs:pr-8 font-heading font-extrabold text-midnight text-[clamp(4.15rem,16.5vw,10.2rem)] leading-[0.9] whitespace-nowrap">
              {word4}
            </span>
          </span>
        </h2>

        {/* Center-Aligned Spread Supporting Text Below Header */}
        <div className="w-full flex justify-center mt-10 sm:mt-14 lg:mt-16 px-4 sm:px-6">
          <div className="text-center max-w-4xl lg:max-w-5xl w-full">
            <p className="text-base sm:text-lg md:text-xl font-sans text-midnight-700 leading-relaxed max-w-4xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

