import React from 'react';

const ServiceNowBackground = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden min-w-[320px]">
      {/* Portfolio Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/portfolio-bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen w-full min-w-[320px]">
        {children}
      </div>
    </div>
  );
};

export default ServiceNowBackground;