
import React from "react";
import { Link } from "react-router-dom";
import { CircularButton } from "@/components/ui/CircularButton";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-crypto-gray-light p-6">
      <div className="text-center max-w-md animate-fade-up">
        <div className="mb-8">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-crypto-blue to-crypto-purple flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">404</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <CircularButton 
              variant="primary" 
              icon={<ArrowLeft size={18} />}
              iconPosition="left"
              className="shadow-blue-glow"
            >
              Return to Home
            </CircularButton>
          </Link>
        </div>
        
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-crypto-blue/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-crypto-purple/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="relative z-10 bg-white shadow-neo rounded-3xl p-6">
            <div className="h-4 w-full bg-crypto-gray-light rounded-full mb-4"></div>
            <div className="h-4 w-5/6 bg-crypto-gray-light rounded-full mb-4"></div>
            <div className="h-4 w-4/6 bg-crypto-gray-light rounded-full mb-8"></div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map(index => (
                <div key={index} className="aspect-square rounded-xl bg-crypto-gray-light"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
