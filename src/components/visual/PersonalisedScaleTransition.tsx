import React from 'react';

export const PersonalisedScaleTransition: React.FC = () => {
  return (
    <section className="relative py-32 sm:py-44 lg:py-52 px-4 sm:px-6 lg:px-8 bg-transparent overflow-hidden flex items-center justify-center">
      {/* Rich Cloud Backdrop with Clean Edge Feathering */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-80 z-0"
        style={{
          backgroundImage: `url('/atmospheric_cloud_backdrop.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          maskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,1) 12%, rgba(0,0,0,1) 88%, transparent 100%)',
        }}
      />

      {/* Atmospheric Daylight Glow (Non-washing) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[450px] bg-gradient-to-b from-white/70 via-sky-mist/30 to-transparent blur-3xl pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center">
        {/* Right-Aligned Text Above Header */}
        <div className="w-full flex justify-end mb-5 sm:mb-7 pr-4 sm:pr-8 lg:pr-12">
          <div className="text-right">
            <span className="text-xs sm:text-sm md:text-[15px] font-mono font-bold tracking-[0.2em] text-midnight-700 uppercase block">
              BESPOKE MULTI-AGENT SYSTEMS
            </span>
            <span className="text-xs sm:text-sm md:text-[15px] font-sans text-midnight-600 block mt-1">
              Deeply embedded in your live infrastructure
            </span>
          </div>
        </div>

        {/* Giant Screen-Filling Headline - Desktop (Original untouched) */}
        <h2 className="hidden sm:flex text-[clamp(3.6rem,9.2vw,10.2rem)] font-heading font-extrabold text-midnight tracking-tighter leading-none text-center w-full select-none flex-col gap-3 sm:gap-5 lg:gap-6">
          <span className="block whitespace-nowrap">Uniquely Engineered.</span>
          <span className="block whitespace-nowrap text-midnight/90">Infinitely Scalable.</span>
        </h2>

        {/* Giant Screen-Filling Headline - Mobile Only */}
        <h2 className="flex sm:hidden text-midnight tracking-tight leading-none w-full select-none flex-col gap-2 text-center">
          {/* Pair 1: Uniquely (refined weight) | Engineered. (calibrated scale on mobile) */}
          <span className="w-full flex flex-col text-center">
            <span className="block text-center font-heading font-normal text-midnight-600 text-[clamp(2.35rem,9.5vw,4.5rem)] leading-tight whitespace-nowrap">
              Uniquely
            </span>
            <span className="block text-center font-heading font-extrabold text-midnight text-[clamp(3.35rem,13.2vw,10.2rem)] leading-[0.92] whitespace-nowrap">
              Engineered.
            </span>
          </span>

          {/* Pair 2: Infinitely (refined weight) | Scalable. (larger on mobile) */}
          <span className="w-full flex flex-col text-center">
            <span className="block text-center font-heading font-normal text-midnight-600 text-[clamp(2.35rem,9.5vw,4.5rem)] leading-tight whitespace-nowrap">
              Infinitely
            </span>
            <span className="block text-center font-heading font-extrabold text-midnight text-[clamp(3.85rem,15vw,10.2rem)] leading-[0.9] whitespace-nowrap">
              Scalable.
            </span>
          </span>
        </h2>

        {/* Center-Aligned Spread Supporting Text Below Header */}
        <div className="w-full flex justify-center mt-10 sm:mt-14 lg:mt-16 px-4 sm:px-6">
          <div className="text-center max-w-4xl lg:max-w-5xl w-full">
            <p className="text-base sm:text-lg md:text-xl font-sans text-midnight-700 leading-relaxed max-w-4xl mx-auto">
              Custom-engineered around your proprietary data and enterprise workflows—eliminating high-salary administrative drag with zero added headcount.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
