
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Bio from '@/components/Bio';
import Footer from '@/components/Footer';
import CTAButton from '@/components/CTAButton';
import BikeWheelBackground from '@/components/BikeWheelBackground';
import SocialShareImage from '@/components/SocialShareImage';

const Index: React.FC = () => {
  // Removed the image generator timeout since we're not actually saving the file
  // We'll just include the component for documentation purposes
  
  return (
    <div className="min-h-screen bg-white relative">
      <SocialShareImage />
      <BikeWheelBackground />
      <div className="px-4 md:px-0 max-w-screen-xl mx-auto relative z-10">
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
