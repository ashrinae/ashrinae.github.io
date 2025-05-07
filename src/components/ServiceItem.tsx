
import React from 'react';
import ServiceIcon from './ServiceIcon';

interface ServiceItemProps {
  title: string;
  description: string;
  tagline: string;
  delay?: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ 
  title, 
  description, 
  tagline,
  delay = 0
}) => {
  return (
    <div 
      className="service-item mb-16 md:mb-24 animate-fade-in opacity-0"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      <ServiceIcon type={title} />
      <h3 className="font-bold text-lg mb-1">{title}</h3>
      <p className="text-purple-700 mb-1">{description}</p>
      <p className="text-gray-600 italic text-sm">{tagline}</p>
    </div>
  );
};

export default ServiceItem;
