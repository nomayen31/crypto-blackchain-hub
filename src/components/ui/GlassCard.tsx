
import React from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  hoverEffect = true,
  glowColor = 'rgba(0, 102, 255, 0.1)',
  ...props
}) => {
  return (
    <div
      className={cn(
        'relative rounded-3xl p-6 bg-white/10 backdrop-blur-lg border border-white/20 shadow-glass overflow-hidden',
        hoverEffect && 'transition-all duration-500 hover:shadow-xl hover:-translate-y-1',
        className
      )}
      style={{
        backgroundImage: 'linear-gradient(135deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.06))',
        boxShadow: `0 4px 30px rgba(0, 0, 0, 0.1), 0 0 40px ${glowColor}`,
      }}
      {...props}
    >
      {/* Subtle shimmer effect */}
      <div className="absolute inset-0 bg-shimmer opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default GlassCard;
