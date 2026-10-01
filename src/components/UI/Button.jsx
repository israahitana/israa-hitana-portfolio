import React from 'react';

/**
 * Composant Bouton accessible et élégant avec micro-interactions
 */
export const Button = ({
  children,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  iconPosition = 'left',
  href,
  target,
  rel,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-mocha-500 focus-visible:ring-offset-2 active:scale-[0.98] select-none';

  const sizeStyles = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5 shadow-sm',
    md: 'text-sm px-5 py-2.5 gap-2 shadow-sm',
    lg: 'text-base px-6 py-3.5 gap-2.5 shadow-md',
  };

  const variantStyles = {
    primary: 'bg-charcoal-900 text-cream-50 hover:bg-mocha-800 hover:shadow-soft-lg hover:-translate-y-0.5 border border-charcoal-800',
    secondary: 'bg-taupe-100 text-charcoal-900 hover:bg-taupe-200 border border-taupe-200/80 hover:border-taupe-300',
    mocha: 'bg-mocha-600 text-cream-50 hover:bg-mocha-700 hover:shadow-soft-lg hover:-translate-y-0.5 border border-mocha-700',
    outline: 'bg-transparent text-charcoal-800 border border-taupe-300 hover:border-mocha-500 hover:bg-cream-100/60 hover:text-mocha-900',
    ghost: 'bg-transparent text-charcoal-700 hover:text-charcoal-950 hover:bg-taupe-100/50',
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';

  const classes = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${disabledStyles} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' ? (rel || 'noopener noreferrer') : rel}
        className={classes}
        {...props}
      >
        {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
    </button>
  );
};
