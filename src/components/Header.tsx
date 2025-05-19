
import React from 'react';
import CTAButton from './CTAButton';
import MainNavigation from './MainNavigation';
import { BookOpen } from 'lucide-react';
import { Button } from './ui/button';

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
          <div className="flex space-x-3">
            <a 
              href="https://www.buymeacoffee.com/sevenspoke" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300 transition-colors duration-300 rounded-full px-6 py-3 flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                buy me a book
              </Button>
            </a>
            <CTAButton />
          </div>
          <MainNavigation />
        </div>
      </div>
      
      {/* Mobile CTA Button and Navigation */}
      <div className="mt-6 flex flex-col items-center gap-2 md:hidden">
        <div className="flex flex-wrap justify-center gap-3">
          <a 
            href="https://www.buymeacoffee.com/sevenspoke" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300 transition-colors duration-300 rounded-full px-6 py-3 flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              buy me a book
            </Button>
          </a>
          <CTAButton />
        </div>
        <MainNavigation />
      </div>
    </header>
  );
};

export default Header;
