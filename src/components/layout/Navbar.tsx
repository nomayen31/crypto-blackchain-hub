
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'About', href: '#about' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 md:px-12 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-4 bg-white/80 backdrop-blur-lg shadow-sm' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#" 
          className="relative z-10 flex items-center space-x-2"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-crypto-blue to-crypto-purple flex items-center justify-center">
            <span className="text-white font-bold text-lg">CB</span>
          </div>
          <span className="font-bold text-xl">CryptoBlock</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="font-medium text-sm text-gray-700 hover:text-crypto-blue transition-colors"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="text-sm font-medium"
            >
              Sign In
            </Button>
            <Button
              className="bg-crypto-blue hover:bg-crypto-blue/90 text-white rounded-full px-6"
            >
              Get Started
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-10 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'fixed inset-0 bg-white md:hidden transition-all duration-300 ease-in-out transform',
            isMenuOpen 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full pointer-events-none'
          )}
        >
          <div className="flex flex-col h-full justify-center items-center">
            <ul className="flex flex-col space-y-8 text-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="font-medium text-xl"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-12 flex flex-col space-y-4">
              <Button
                variant="ghost"
                className="text-base font-medium"
                onClick={toggleMenu}
              >
                Sign In
              </Button>
              <Button
                className="bg-crypto-blue hover:bg-crypto-blue/90 text-white rounded-full px-6 py-5 text-base"
                onClick={toggleMenu}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
