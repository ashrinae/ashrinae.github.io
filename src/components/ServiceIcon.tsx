
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
        after:content-[''] 
        after:absolute 
        after:inset-0 
        after:border-2 
        after:border-gray-600 
        after:rounded-full 
        after:opacity-60
        after:[clip-path:polygon(
          48%_0%,56%_0%,67%_2%,76%_5%,83%_8%,88%_13%,91%_17%,94%_22%,96%_27%,
          97%_33%,98%_38%,99%_42%,99%_46%,98%_51%,97%_56%,96%_60%,94%_65%,
          91%_70%,88%_74%,84%_78%,79%_82%,74%_86%,68%_89%,62%_91%,56%_93%,
          49%_94%,42%_93%,37%_92%,31%_89%,26%_86%,21%_82%,16%_77%,12%_72%,
          9%_67%,6%_61%,4%_55%,3%_49%,2%_44%,2%_38%,3%_32%,5%_25%,8%_19%,
          11%_15%,16%_10%,22%_6%,28%_3%,36%_1%
        )]
      `}
    >
      {getIcon()}
    </div>
  );
};

export default ServiceIcon;
