
import React from 'react';
import ServiceItem from './ServiceItem';

const Services: React.FC = () => {
  const services = [
    {
      title: "martech & CRM",
      description: "implementation, integration & onboarding",
      tagline: "sleep well again with integrated systems",
      delay: 100
    },
    {
      title: "true reporting",
      description: "generate the right reports, dashboards and forecasting models",
      tagline: "for your boss and your boss's boss",
      delay: 200
    },
    {
      title: "low-touch sales enablement",
      description: "sales sequence design, training, and content workshops",
      tagline: "that reps will actually use",
      delay: 300
    },
    {
      title: "operational maturity",
      description: "onboarding, design, training, and SOP establishment",
      tagline: "because you want to go on vacation at some point",
      delay: 400
    },
    {
      title: "lead generation",
      description: "outbound campaign creation, execution, & results reporting",
      tagline: "because your CEO asked for more (despite what you're already doing!)",
      delay: 500
    },
    {
      title: "laser targeting",
      description: "segmentation and targeting workshop to improve credibility and engagement",
      tagline: "so your customers know you're legit",
      delay: 600
    },
    {
      title: "workflow optimization",
      description: "streamline processes and keep your team working efficiently",
      tagline: "for the love of CRM, keep your workflows up-to-date",
      delay: 700
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="w-full h-px bg-gray-200 mb-16"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
        {services.map((service, index) => (
          <ServiceItem
            key={index}
            title={service.title}
            description={service.description}
            tagline={service.tagline}
            delay={service.delay}
          />
        ))}
        <div className="service-item mb-16 md:mb-24 animate-fade-in opacity-0" style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}>
          <div className="w-full border border-gray-300 rounded-lg py-4 hover:border-gray-500 transition-colors duration-300 cursor-pointer">
            <div className="flex justify-center items-center text-2xl">+</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
