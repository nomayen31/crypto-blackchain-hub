
import React, { useEffect, useRef } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { CircularButton } from '../ui/CircularButton';
import { ChevronRight } from 'lucide-react';

export const AboutUs = () => {
  const statsRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    statsRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      statsRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-crypto-gray-light overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-white transform skew-y-1" />
      
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-crypto-blue/5 blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-crypto-purple/5 blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="inline-block py-1 px-4 mb-6 rounded-full text-sm font-medium bg-crypto-purple/10 text-crypto-purple">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Redefining <span className="text-gradient">Blockchain</span> Interaction
          </h2>
          <p className="text-lg text-gray-600">
            Founded with a mission to make cryptocurrency accessible to everyone, we're building the most intuitive and secure platform for the crypto world.
          </p>
        </div>
        
        {/* Stats counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {[
            { value: '$24B+', label: 'Trading Volume' },
            { value: '160+', label: 'Countries Supported' },
            { value: '10M+', label: 'Verified Users' },
            { value: '99.9%', label: 'Uptime Guarantee' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              ref={el => statsRefs.current[index] = el}
              className="animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <GlassCard className="text-center py-8">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gradient">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </GlassCard>
            </div>
          ))}
        </div>
        
        {/* About content */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div 
            ref={el => statsRefs.current[4] = el}
            className="animate-on-scroll order-2 md:order-1"
          >
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              We believe in a future where financial freedom is accessible to everyone through blockchain technology. Our platform is designed to remove barriers to entry and provide intuitive tools for managing digital assets.
            </p>
            <p className="text-gray-600 mb-8">
              With a team of experts in blockchain, security, and user experience, we're building the future of finance with every line of code and every design decision.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-crypto-blue mr-3"></div>
                <span className="font-medium">Security-first approach</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-crypto-blue mr-3"></div>
                <span className="font-medium">Transparent fee structure</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-crypto-blue mr-3"></div>
                <span className="font-medium">Continuous platform improvements</span>
              </div>
            </div>
            <div className="mt-8">
              <CircularButton 
                variant="outline"
                icon={<ChevronRight size={18} />}
              >
                Learn More About Us
              </CircularButton>
            </div>
          </div>
          
          <div 
            ref={el => statsRefs.current[5] = el}
            className="animate-on-scroll relative order-1 md:order-2"
          >
            <div className="absolute inset-0 bg-gradient-radial from-crypto-purple/10 to-transparent opacity-50 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative z-10 bg-white shadow-neo rounded-3xl p-4 w-full max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="aspect-square rounded-2xl bg-crypto-blue/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-crypto-blue/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-crypto-blue/40 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-crypto-blue/70"></div>
                    </div>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-crypto-purple/10 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-crypto-purple/20 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-crypto-purple/40 flex items-center justify-center">
                      <div className="w-6 h-6 rounded-full bg-crypto-purple/70"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 mb-4">
                <div className="h-4 w-full bg-crypto-gray-light rounded-full"></div>
                <div className="h-4 w-5/6 bg-crypto-gray-light rounded-full"></div>
                <div className="h-4 w-4/6 bg-crypto-gray-light rounded-full"></div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[1, 2, 3].map(index => (
                  <div key={index} className="aspect-square rounded-xl bg-crypto-gray-light"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
