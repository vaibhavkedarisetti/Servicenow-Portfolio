import React from 'react';

const ServiceNowBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Portfolio Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/portfolio-bg.png)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ServiceNowBackground;