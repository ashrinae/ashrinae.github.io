
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
        <div className="w-28 h-28 relative">
          <Avatar className="w-28 h-28 border-2 border-purple-700 shadow-lg">
            <AvatarImage src="/lovable-uploads/2309f6c4-a4ee-45a1-98c4-f36dc58f9d8a.png" alt="Ash avatar" />
            <AvatarFallback className="bg-gradient-to-br from-purple-100 to-purple-300 text-purple-800 text-xl font-bold">
              A
            </AvatarFallback>
          </Avatar>
          <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-green-100 border-2 border-purple-700 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-700"></div>
          </div>
          <div className="absolute -bottom-1 -left-3 w-8 h-8 rounded-full bg-blue-100 border-2 border-purple-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Bio;
