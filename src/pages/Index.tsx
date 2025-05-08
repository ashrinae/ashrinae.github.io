
import React from 'react';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Bio from '@/components/Bio';
import Footer from '@/components/Footer';
import BikeWheelBackground from '@/components/BikeWheelBackground';
import SocialShareImage from '@/components/SocialShareImage';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <SocialShareImage />
      <BikeWheelBackground />
      <div className="px-4 md:px-0 max-w-screen-xl mx-auto relative z-10">
        <Header />
        <Services />
        <Bio />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
