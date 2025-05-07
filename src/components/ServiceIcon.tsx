
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
        return "bg-green-50";
      case "true reporting":
        return "bg-green-50";
      case "low-touch sales enablement":
        return "bg-green-50";
      case "operational maturity":
        return "bg-green-50";
      case "lead generation":
        return "bg-green-50";
      case "laser targeting":
        return "bg-green-50";
      case "workflow optimization":
        return "bg-green-50";
      default:
        return "bg-green-50";
    }
  };

  const getIconColor = () => {
    switch (type) {
      case "martech & CRM":
        return "text-blue-800";
      case "true reporting":
        return "text-blue-800";
      case "low-touch sales enablement":
        return "text-blue-800";
      case "operational maturity":
        return "text-blue-800";
      case "lead generation":
        return "text-blue-800";
      case "laser targeting":
        return "text-blue-800";
      case "workflow optimization":
        return "text-blue-800";
      default:
        return "text-blue-800";
    }
  };

  const getIcon = () => {
    switch (type) {
      case "martech & CRM":
        return <Beaker className={`h-8 w-8 ${getIconColor()}`} strokeWidth={1.5} />;
      case "true reporting":
        return <BarChart3 className={`h-8 w-8 ${getIconColor()}`} strokeWidth={1.5} />;
      case "low-touch sales enablement":
        return <Smartphone className={`h-8 w-8 ${getIconColor()}`} strokeWidth={1.5} />;
      case "operational maturity":
        return <Network className={`h-8 w-8 ${getIconColor()}`} strokeWidth={1.5} />;
      case "lead generation":
        return <Orbit className={`h-8 w-8 ${getIconColor()}`} strokeWidth={1.5} />;
      case "laser targeting":
        return <Target className={`h-8 w-8 ${getIconColor()}`} strokeWidth={1.5} />;
      case "workflow optimization":
        return <Workflow className={`h-8 w-8 ${getIconColor()}`} strokeWidth={1.5} />;
      default:
        return <Beaker className={`h-8 w-8 ${getIconColor()}`} strokeWidth={1.5} />;
    }
  };

  return (
    <div 
      className={`
        service-icon 
        ${getIconStyles()} 
        ${className} 
        p-4 
        shadow-md 
        transition-all 
        duration-300 
        hover:shadow-lg 
        relative
        rounded-full
        border-2
        border-blue-800
      `}
    >
      {getIcon()}
    </div>
  );
};

export default ServiceIcon;
