
import React from 'react';
import CTAButton from './CTAButton';
import MainNavigation from './MainNavigation';

const Header: React.FC = () => {
  return (
    <header className="py-6 w-full max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">seven spoke</h1>
          <p className="mt-2 text-lg">
            life sciences sales &<br />
            marketing technology<br />
            consultant
          </p>
        </div>
        <div className="hidden md:flex flex-col items-end">
          <CTAButton />
          <MainNavigation />
        </div>
      </div>
      
      {/* Mobile CTA Button and Navigation */}
      <div className="mt-6 flex flex-col items-center gap-2 md:hidden">
        <CTAButton />
        <MainNavigation />
      </div>
    </header>
  );
};

export default Header;
