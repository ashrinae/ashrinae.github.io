
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
        return "bg-blue-100";
      case "true reporting":
        return "bg-blue-100";
      case "low-touch sales enablement":
        return "bg-purple-100";
      case "operational maturity":
        return "bg-purple-100";
      case "lead generation":
        return "bg-green-100";
      case "laser targeting":
        return "bg-green-100";
      case "workflow optimization":
        return "bg-teal-100";
      default:
        return "bg-gray-100";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "martech & CRM":
        return <Beaker className="h-8 w-8 text-blue-500" />;
      case "true reporting":
        return <BarChart3 className="h-8 w-8 text-blue-500" />;
      case "low-touch sales enablement":
        return <Smartphone className="h-8 w-8 text-purple-500" />;
      case "operational maturity":
        return <Network className="h-8 w-8 text-purple-500" />;
      case "lead generation":
        return <Orbit className="h-8 w-8 text-green-500" />;
      case "laser targeting":
        return <Target className="h-8 w-8 text-green-500" />;
      case "workflow optimization":
        return <Workflow className="h-8 w-8 text-teal-500" />;
      default:
        return <Beaker className="h-8 w-8 text-gray-500" />;
    }
  };

  return (
    <div className={`service-icon ${getIconStyles()} ${className}`}>
      {getIcon()}
    </div>
  );
};

export default ServiceIcon;
