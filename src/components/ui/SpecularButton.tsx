import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface SpecularButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'dark' | 'outline' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs tracking-wide font-medium rounded-full',
    md: 'px-5 py-2.5 text-xs sm:text-sm tracking-wide font-medium rounded-full',
    lg: 'px-6 sm:px-7 py-3 sm:py-3.5 text-sm tracking-wide font-semibold rounded-full',
  };

  const variantClasses = {
    primary:
      'bg-white/90 hover:bg-white text-midnight border border-white/90 shadow-glass-md hover:shadow-specular-glow',
    dark:
      'bg-midnight text-white hover:bg-midnight-800 border border-white/20 shadow-lg hover:shadow-icy/25',
    outline:
      'bg-white/40 hover:bg-white/70 text-midnight border border-white/80 backdrop-blur-md shadow-glass-sm',
    glass:
      'bg-white/60 hover:bg-white/90 text-midnight border border-white backdrop-blur-xl shadow-glass-sm hover:border-icy/60',
  };

  const content = (
    <span className="relative z-10 flex items-center justify-center gap-2">
      <span>{children}</span>
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
    </span>
  );

  const gleamSheen = (
    <span
      className="absolute top-0 -left-[100%] w-[120%] h-full bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-25 transition-all duration-700 ease-out group-hover:left-[150%] pointer-events-none"
      aria-hidden="true"
    />
  );

  const baseClasses = `group relative inline-flex items-center justify-center overflow-hidden transition-all duration-300 select-none ${sizeClasses[size]} ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link to={to} className={baseClasses} onClick={onClick}>
          {content}
          {gleamSheen}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses} onClick={onClick}>
          {content}
          {gleamSheen}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
      className={baseClasses}
    >
      {content}
      {gleamSheen}
    </motion.button>
  );
};
