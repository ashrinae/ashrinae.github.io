
import React from 'react';
import { 
  Beaker, BarChart3, Smartphone, Network, Orbit, Target, Workflow 
} from 'lucide-react';

interface ServiceIconProps {
  type: string;
  className?: string;
}

const ServiceIcon: React.FC<ServiceIconProps> = ({ type, className = "" }) => {
  const getIconStyles = () => {
    switch (type) {
      case "martech & CRM":
        return "bg-blue-100 hover:bg-blue-200 rotate-3";
      case "true reporting":
        return "bg-blue-100 hover:bg-blue-200 -rotate-2";
      case "low-touch sales enablement":
        return "bg-purple-100 hover:bg-purple-200 rotate-2";
      case "operational maturity":
        return "bg-purple-100 hover:bg-purple-200 -rotate-3";
      case "lead generation":
        return "bg-green-100 hover:bg-green-200 rotate-3";
      case "laser targeting":
        return "bg-green-100 hover:bg-green-200 -rotate-2";
      case "workflow optimization":
        return "bg-teal-100 hover:bg-teal-200 rotate-2";
      default:
        return "bg-gray-100 hover:bg-gray-200";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "martech & CRM":
        return <Beaker className="h-8 w-8 text-blue-500" strokeWidth={2.5} />;
      case "true reporting":
        return <BarChart3 className="h-8 w-8 text-blue-500" strokeWidth={2.5} />;
      case "low-touch sales enablement":
        return <Smartphone className="h-8 w-8 text-purple-500" strokeWidth={2.5} />;
      case "operational maturity":
        return <Network className="h-8 w-8 text-purple-500" strokeWidth={2.5} />;
      case "lead generation":
        return <Orbit className="h-8 w-8 text-green-500" strokeWidth={2.5} />;
      case "laser targeting":
        return <Target className="h-8 w-8 text-green-500" strokeWidth={2.5} />;
      case "workflow optimization":
        return <Workflow className="h-8 w-8 text-teal-500" strokeWidth={2.5} />;
      default:
        return <Beaker className="h-8 w-8 text-gray-500" strokeWidth={2.5} />;
    }
  };

  return (
    <div className={`service-icon ${getIconStyles()} ${className} p-4 shadow-md transition-all duration-300 hover:shadow-lg`}>
      {getIcon()}
    </div>
  );
};

export default ServiceIcon;
