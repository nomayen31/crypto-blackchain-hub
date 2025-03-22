
import React, { useEffect, useRef } from 'react';
import { GlassCard } from '../ui/GlassCard';
import { AnimatedCard } from '../ui/AnimatedCard';
import { Shield, Zap, RefreshCw, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-8 h-8 text-crypto-blue" />,
    title: 'Enhanced Security',
    description: 'Advanced encryption and multi-factor authentication keep your assets secure at all times.',
    color: 'rgba(0, 102, 255, 0.2)',
  },
  {
    icon: <Zap className="w-8 h-8 text-crypto-purple" />,
    title: 'Lightning Speed',
    description: 'Execute trades in milliseconds with our high-performance trading engine.',
    color: 'rgba(108, 93, 211, 0.2)',
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-crypto-cyan" />,
    title: 'Seamless Experience',
    description: 'Intuitive interface designed for both beginners and advanced traders.',
    color: 'rgba(20, 244, 201, 0.2)',
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-crypto-blue" />,
    title: 'Advanced Analytics',
    description: 'Real-time data and insights to help you make informed trading decisions.',
    color: 'rgba(0, 102, 255, 0.2)',
  },
];

export const Features = () => {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  
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
    
    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="features" className="relative py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-4 mb-6 rounded-full text-sm font-medium bg-crypto-blue/10 text-crypto-blue">
            Features
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Powerful Tools for <span className="text-gradient">Blockchain</span> Success
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our platform combines cutting-edge technology with user-friendly design to provide you with the ultimate cryptocurrency experience.
          </p>
        </div>
        
        {/* Feature cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              ref={el => featureRefs.current[index] = el}
              className="animate-on-scroll"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <AnimatedCard
                className="h-full"
                glowColor={feature.color}
              >
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 mb-6 rounded-full bg-white shadow-neo flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 flex-grow">{feature.description}</p>
                </div>
              </AnimatedCard>
            </div>
          ))}
        </div>
        
        {/* Highlight feature */}
        <div 
          ref={el => featureRefs.current[4] = el}
          className="mt-24 animate-on-scroll"
        >
          <GlassCard 
            className="relative overflow-hidden"
            glowColor="rgba(108, 93, 211, 0.15)"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                  Real-time Trading <br />
                  <span className="text-gradient">Like Never Before</span>
                </h3>
                <p className="text-lg text-gray-700">
                  Our platform enables instant transactions, real-time market updates, and comprehensive portfolio management all in one place.
                </p>
                <ul className="space-y-3">
                  {['Instant transactions', 'Low transaction fees', 'Secure wallet integration', 'Multi-chain support'].map((item) => (
                    <li key={item} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 mr-3 rounded-full bg-crypto-blue/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-crypto-blue"></div>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="relative z-10 bg-white rounded-2xl shadow-lg p-4 w-full max-w-md mx-auto overflow-hidden">
                  <div className="rounded-xl overflow-hidden bg-crypto-gray-light aspect-[4/3] mb-4"></div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="space-y-1.5">
                      <div className="h-4 w-24 bg-crypto-gray-light rounded-full"></div>
                      <div className="h-3 w-16 bg-crypto-gray-light rounded-full"></div>
                    </div>
                    <div className="h-10 w-24 bg-crypto-blue rounded-lg"></div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="h-16 bg-crypto-gray-light rounded-lg"></div>
                    ))}
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-crypto-purple/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-crypto-blue/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};

export default Features;
