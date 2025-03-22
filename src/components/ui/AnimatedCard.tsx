
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  intensity?: number;
}

export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className,
  glowColor = 'rgba(0, 102, 255, 0.2)',
  intensity = 15,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;

    if (!card || !glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const angleX = (y - centerY) / intensity;
      const angleY = (centerX - x) / intensity;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      
      // Move glow effect
      glow.style.background = `radial-gradient(circle at ${x}px ${y}px, ${glowColor}, transparent 50%)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
      glow.style.background = 'transparent';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity, glowColor]);

  return (
    <div
      ref={cardRef}
      className={cn(
        'relative rounded-3xl p-6 bg-white transition-transform duration-200 ease-out shadow-neo border border-white/30',
        className
      )}
      style={{ transformStyle: 'preserve-3d' }}
      {...props}
    >
      {/* Glow effect */}
      <div 
        ref={glowRef} 
        className="absolute inset-0 rounded-3xl opacity-70"
      />
      
      {/* Content - slightly elevated for 3D effect */}
      <div 
        className="relative z-10"
        style={{ transform: 'translateZ(20px)' }}
      >
        {children}
      </div>
    </div>
  );
};

export default AnimatedCard;
