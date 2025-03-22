
import { cn } from '@/lib/utils';
import React from 'react';

interface CircularButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isActive?: boolean;
  className?: string;
}

export const CircularButton: React.FC<CircularButtonProps> = ({
  children,
  size = 'md',
  variant = 'primary',
  icon,
  iconPosition = 'right',
  isActive = false,
  className,
  ...props
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'h-9 px-4 text-sm',
    md: 'h-11 px-6 text-base',
    lg: 'h-14 px-8 text-lg',
  };

  // Variant classes
  const variantClasses = {
    primary: 'bg-crypto-blue text-white hover:bg-crypto-blue/90 focus:ring-crypto-blue/30',
    secondary: 'bg-crypto-purple text-white hover:bg-crypto-purple/90 focus:ring-crypto-purple/30',
    outline: 'bg-transparent border border-crypto-blue text-crypto-blue hover:bg-crypto-blue/10 focus:ring-crypto-blue/20',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-700 focus:ring-gray-200',
  };

  // Active state
  const activeClasses = isActive
    ? 'ring-2 ring-offset-2 ring-offset-white'
    : '';

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-4',
        'shadow-sm hover:shadow transform hover:-translate-y-0.5 active:translate-y-0',
        sizeClasses[size],
        variantClasses[variant],
        activeClasses,
        className
      )}
      {...props}
    >
      {icon && iconPosition === 'left' && (
        <span className={cn('mr-2')}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={cn('ml-2')}>{icon}</span>
      )}
    </button>
  );
};

export default CircularButton;
