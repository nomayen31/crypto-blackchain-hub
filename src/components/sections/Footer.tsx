
import React from 'react';
import { CircularButton } from '../ui/CircularButton';
import { ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-crypto-black text-white py-20">
      <div className="container mx-auto px-6">
        {/* Newsletter subscription */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter for the latest updates, market insights, and exclusive offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-crypto-gray-dark rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-crypto-blue/50"
            />
            <CircularButton
              variant="primary"
              icon={<ArrowRight size={18} />}
              className="whitespace-nowrap"
            >
              Subscribe
            </CircularButton>
          </div>
        </div>
        
        {/* Footer links and info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-6">Platform</h3>
            <ul className="space-y-4">
              {['Exchange', 'Wallet', 'API', 'Pricing'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-4">
              {['Blog', 'Documentation', 'Community', 'Security'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-4">
              {['About', 'Careers', 'Partners', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-4">
              {['Privacy Policy', 'Terms of Service', 'Compliance', 'Cookies'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-800">
          <div className="flex items-center mb-6 md:mb-0">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-crypto-blue to-crypto-purple flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">CB</span>
            </div>
            <span className="font-bold text-xl">CryptoBlock</span>
          </div>
          
          <div className="text-gray-400 text-sm md:text-base">
            © {new Date().getFullYear()} CryptoBlock. All rights reserved.
          </div>
          
          <div className="flex space-x-6 mt-6 md:mt-0">
            {['Twitter', 'LinkedIn', 'GitHub', 'Discord'].map((platform) => (
              <a 
                key={platform} 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
