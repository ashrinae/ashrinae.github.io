
import React from 'react';

const BikeWheelBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <div className="absolute opacity-[0.03] -right-[20%] top-[10%] w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] transform rotate-12">
        <svg 
          viewBox="0 0 800 800" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer rim */}
          <circle cx="400" cy="400" r="390" stroke="#000000" strokeWidth="6" />
          
          {/* Hub */}
          <circle cx="400" cy="400" r="30" stroke="#000000" strokeWidth="6" />
          
          {/* Spokes */}
          {[...Array(24)].map((_, i) => {
            const angle = (i * 15) * Math.PI / 180;
            const x1 = 400 + 30 * Math.cos(angle);
            const y1 = 400 + 30 * Math.sin(angle);
            const x2 = 400 + 390 * Math.cos(angle);
            const y2 = 400 + 390 * Math.sin(angle);
            
            return (
              <line 
                key={i} 
                x1={x1} 
                y1={y1} 
                x2={x2} 
                y2={y2} 
                stroke="#000000" 
                strokeWidth="3" 
              />
            );
          })}
          
          {/* Inner rim */}
          <circle cx="400" cy="400" r="365" stroke="#000000" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

export default BikeWheelBackground;
