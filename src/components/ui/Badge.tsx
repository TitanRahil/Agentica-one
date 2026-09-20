import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'cyan' | 'navy' | 'glass' | 'outline';
  withDot?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'cyan',
  withDot = true,
  className = '',
}) => {
  const variantStyles = {
    cyan: 'bg-icy-tint/70 text-midnight-800 border border-icy/30 shadow-sm',
    navy: 'bg-midnight text-white border border-white/20',
    glass: 'bg-white/60 backdrop-blur-md text-midnight-900 border border-white/90 shadow-glass-sm',
    outline: 'bg-transparent text-midnight-700 border border-midnight-200',
  };

  const dotColors = {
    cyan: 'bg-icy',
    navy: 'bg-icy-glow',
    glass: 'bg-icy',
    outline: 'bg-midnight-500',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${variantStyles[variant]} ${className}`}
    >
      {withDot && (
        <span className="relative flex h-2 w-2">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}
          />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotColors[variant]}`} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
};
