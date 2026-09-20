import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  variant?: 'light' | 'subtle' | 'dark' | 'glow';
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  variant = 'light',
  onClick,
}) => {
  const variantStyles = {
    light:
      'bg-white/70 backdrop-blur-xl border border-white/90 shadow-glass-md text-midnight',
    subtle:
      'bg-white/40 backdrop-blur-lg border border-white/60 shadow-glass-sm text-midnight',
    dark:
      'bg-midnight/90 backdrop-blur-2xl border border-white/15 shadow-2xl text-white',
    glow:
      'bg-white/80 backdrop-blur-xl border border-icy/40 shadow-glass-lg ring-1 ring-icy/20 text-midnight',
  };

  const Component = hoverEffect ? motion.div : 'div';
  const motionProps = hoverEffect
    ? {
        whileHover: { y: -4, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
      }
    : {};

  return (
    // @ts-expect-error - framer motion dynamic element type compatibility
    <Component
      onClick={onClick}
      {...motionProps}
      className={`relative rounded-3xl p-6 md:p-8 transition-shadow duration-300 ${variantStyles[variant]} ${
        hoverEffect ? 'hover:shadow-card-hover' : ''
      } ${className}`}
    >
      {/* Specular top rim highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent rounded-t-3xl opacity-80 pointer-events-none" />
      {children}
    </Component>
  );
};
