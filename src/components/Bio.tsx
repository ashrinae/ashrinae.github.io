
import React from 'react';

const Bio: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col md:flex-row items-center md:items-end justify-center gap-8">
      <div className="md:text-right md:flex-grow animate-slide-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
        <p className="text-lg md:text-xl text-purple-700 leading-relaxed max-w-xl md:ml-auto">
          ash is an award-winning marketer with a passion for revenue-driving operations, 
          lead generation, sales and marketing technology, and solving complex business problems
        </p>
      </div>
      <div className="animate-slide-up opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-200">
          <img 
            src="/lovable-uploads/648ed457-8a09-421b-a29c-fbc873681d7c.png" 
            alt="Ash avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Bio;
