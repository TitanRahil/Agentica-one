import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

export const StitchHeroVisual: React.FC = () => {
  // High-performance GPU-only mouse tracking with spring smoothing
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 90, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Smooth cursor parallax translations (moves with cursor inertia)
  const parallaxX = useTransform(smoothX, [-600, 600], [-16, 16]);
  const parallaxY = useTransform(smoothY, [-400, 400], [-12, 12]);

  // Subtle 3D perspective rotation tracking the cursor
  const rotateY = useTransform(smoothX, [-600, 600], [-6, 6]);
  const rotateX = useTransform(smoothY, [-400, 400], [5, -5]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full max-w-md lg:max-w-lg mx-auto lg:mr-0 lg:ml-auto flex items-end justify-center lg:justify-end select-none perspective-[1200px] -translate-y-1 sm:-translate-y-3 lg:-translate-y-4">
      {/* Volumetric backlight glow for ethereal cloud depth */}
      <div className="absolute top-1/3 left-1/2 lg:left-auto lg:right-12 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[320px] sm:w-[400px] h-[320px] sm:h-[400px] bg-gradient-to-tr from-white/95 via-sky-mist/80 to-icy/25 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* 3D Transparent Robot with smooth cursor parallax */}
      <motion.div
        style={{ x: parallaxX, y: parallaxY, rotateX, rotateY }}
        className="relative w-full flex items-end justify-center lg:justify-end"
      >
        {/* Clean Transparent PNG Robot with lowered fade mask, right-aligned to match left edge */}
        <div className="relative w-[92%] max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] flex items-end justify-center lg:justify-end">
          <img
            src="/hero_robot.png"
            alt="Agentica-One Bespoke Autonomous AI Robot"
            className="w-full h-auto object-contain object-bottom transition-transform duration-300 pointer-events-none"
            style={{
              maskImage: 'radial-gradient(ellipse 110% 85% at 50% 15%, black 72%, rgba(0,0,0,0.6) 86%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 110% 85% at 50% 15%, black 72%, rgba(0,0,0,0.6) 86%, transparent 100%)',
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};
