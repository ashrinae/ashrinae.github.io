
import React from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Bio from '@/components/Bio';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="px-4 md:px-0 max-w-screen-xl mx-auto">
        <Header />
        
        {/* Mobile CTA Button */}
        <div className="mt-6 mb-12 flex justify-center md:hidden">
          <CTAButton />
        </div>
        
        <Services />
        <Bio />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
