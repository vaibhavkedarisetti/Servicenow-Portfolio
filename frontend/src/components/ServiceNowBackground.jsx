import React from 'react';

const ServiceNowBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1a4d72] to-[#0f3a5f] overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        {/* Large geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-40 h-40 border-2 border-white/15 transform rotate-12"></div>
        <div className="absolute top-60 left-1/3 w-16 h-16 bg-white/15 transform rotate-45"></div>
        <div className="absolute bottom-60 right-1/3 w-28 h-28 border-2 border-white/10 rounded-full"></div>
        
        {/* Medium shapes */}
        <div className="absolute top-32 right-1/4 w-20 h-20 bg-white/5 transform rotate-30"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 border-2 border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 right-10 w-36 h-36 border border-white/10 transform -rotate-12"></div>
        
        {/* Small accent shapes */}
        <div className="absolute top-16 left-1/2 w-8 h-8 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-16 right-1/2 w-6 h-6 bg-white/15 transform rotate-45"></div>
        <div className="absolute top-1/3 left-16 w-10 h-10 border border-white/25"></div>
        <div className="absolute bottom-1/3 right-16 w-14 h-14 border border-white/15 rounded-full"></div>
        
        {/* Additional geometric elements */}
        <div className="absolute top-24 right-40 w-18 h-18 bg-gradient-to-r from-white/10 to-transparent transform rotate-45"></div>
        <div className="absolute bottom-24 left-40 w-22 h-22 border-2 border-white/20 transform -rotate-30"></div>
        
        {/* Connecting lines/paths */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: 'white', stopOpacity: 0.1}} />
              <stop offset="100%" style={{stopColor: 'white', stopOpacity: 0.05}} />
            </linearGradient>
          </defs>
          <path d="M100 150 Q 300 100 500 200 T 900 150" stroke="url(#lineGradient)" strokeWidth="2" fill="none" />
          <path d="M200 400 Q 400 350 600 450 T 1000 400" stroke="url(#lineGradient)" strokeWidth="1" fill="none" />
          <path d="M50 600 Q 250 550 450 650 T 800 600" stroke="url(#lineGradient)" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ServiceNowBackground;