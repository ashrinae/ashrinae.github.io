
import React from 'react';
import CTAButton from './CTAButton';

const Header: React.FC = () => {
  return (
    <header className="py-6 w-full max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-start">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold">seven spoke</h1>
        <p className="mt-2 text-lg">
          life sciences sales &<br />
          marketing technology<br />
          consultant
        </p>
      </div>
      <div className="hidden md:block">
        <CTAButton />
      </div>
    </header>
  );
};

export default Header;
