
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
        before:content-['']
        before:absolute
        before:inset-0
        before:border-2
        before:border-gray-500
        before:rounded-none
        before:opacity-80
        before:scale-110
        before:[clip-path:polygon(
          45%_0%,53%_2%,60%_1%,67%_3%,74%_2%,79%_5%,86%_7%,90%_11%,93%_16%,97%_20%,
          96%_25%,99%_31%,97%_37%,99%_43%,98%_49%,99%_54%,97%_59%,98%_65%,96%_70%,
          93%_75%,89%_80%,85%_83%,79%_86%,72%_88%,66%_90%,58%_91%,52%_95%,
          46%_92%,40%_94%,33%_90%,27%_89%,21%_85%,16%_81%,12%_76%,8%_71%,
          4%_65%,2%_59%,1%_53%,3%_47%,1%_41%,3%_35%,2%_28%,5%_22%,8%_16%,
          13%_12%,18%_7%,24%_4%,31%_2%,38%_1%
        )]
      `}
    >
      {getIcon()}
    </div>
  );
};

export default ServiceIcon;
