import React from 'react';

/**
 * Badge avec tons chauds taupe/mocha/cream
 */
export const Badge = ({
  children,
  variant = 'default', // 'default', 'mocha', 'accent', 'outline', 'subtle'
  size = 'md', // 'sm', 'md'
  icon: Icon,
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs md:text-sm px-3 py-1 gap-1.5',
  };

  const variantStyles = {
    default: 'bg-taupe-100 text-charcoal-700 border border-taupe-200/90 font-medium',
    mocha: 'bg-mocha-100 text-mocha-900 border border-mocha-200/90 font-medium',
    accent: 'bg-mocha-600 text-cream-50 font-medium shadow-sm',
    outline: 'bg-transparent text-charcoal-700 border border-taupe-300 font-medium',
    subtle: 'bg-cream-100 text-charcoal-600 border border-taupe-100',
    green: 'bg-emerald-50 text-emerald-800 border border-emerald-200/80 font-medium',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full transition-colors ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.default} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 opacity-80" />}
      <span>{children}</span>
    </span>
  );
};
