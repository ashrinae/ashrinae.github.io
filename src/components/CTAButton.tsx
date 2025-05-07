
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const CTAButton: React.FC = () => {
  return (
    <a 
      href="https://www.linkedin.com/in/ashstockemer/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block"
    >
      <Button className="bg-black text-white rounded-full px-6 py-3 hover:bg-gray-800 transition-colors duration-300 flex items-center gap-2">
        get connected
        <ExternalLink className="h-4 w-4" />
      </Button>
    </a>
  );
};

export default CTAButton;
