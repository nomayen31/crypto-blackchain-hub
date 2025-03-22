
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { CircularButton } from '../ui/CircularButton';

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Animation effect for the hero section
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !circleRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      // Move the circle slightly with mouse
      const translateX = (x - rect.width / 2) / 25;
      const translateY = (y - rect.height / 2) / 25;
      
      circleRef.current.style.transform = `translate(${translateX}px, ${translateY}px)`;
    };
    
    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background elements */}
      <div className="absolute inset-0 animated-gradient-bg opacity-50" />
      
      <div 
        ref={circleRef}
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-crypto-purple/10 blur-3xl animate-float"
      />
      
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-crypto-blue/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        <div className="animate-fade-down">
          <span className="inline-block py-1 px-4 mb-6 rounded-full text-sm font-medium bg-crypto-blue/10 text-crypto-blue">
            The Future of Blockchain
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tighter animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <span className="block">Simplifying</span>
          <span className="text-gradient">Cryptocurrency</span>
          <span className="block">For Everyone</span>
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-10 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          The most trusted platform to invest, trade, and manage your blockchain assets with unparalleled security and a seamless user experience.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <CircularButton 
            size="lg" 
            icon={<ArrowRight size={20} />} 
            className="shadow-blue-glow"
          >
            Get Started Now
          </CircularButton>
          
          <CircularButton 
            variant="outline" 
            size="lg"
          >
            Explore Features
          </CircularButton>
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-16 animate-fade-up" style={{ animationDelay: '0.8s' }}>
          {['Bitcoin', 'Ethereum', 'Solana', 'Cardano'].map((crypto, index) => (
            <div key={crypto} className="flex flex-col items-center" style={{ animationDelay: `${1 + index * 0.2}s` }}>
              <div className="w-16 h-16 mb-4 rounded-full bg-white shadow-neo flex items-center justify-center">
                <span className="font-mono font-bold text-xl">{crypto.substring(0, 1)}</span>
              </div>
              <h3 className="font-medium">{crypto}</h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* Animated wave effect */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-white transform -skew-y-1 translate-y-6" />
    </section>
  );
};

export default Hero;
