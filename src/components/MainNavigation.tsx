
import React from 'react';
import { FileText, BookOpen, Play } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const MainNavigation: React.FC = () => {
  return (
    <NavigationMenu className="mt-3">
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <a href="#resume" className={cn(navigationMenuTriggerStyle(), "flex gap-2 items-center")}>
            <FileText className="h-4 w-4" />
            <span>Resume</span>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a 
            href="https://sevenspoke.com/2025/05/06/salestechreviewmay2025/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(navigationMenuTriggerStyle(), "flex gap-2 items-center")}
          >
            <BookOpen className="h-4 w-4" />
            <span>Opinion Pieces</span>
          </a>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <a href="#playground" className={cn(navigationMenuTriggerStyle(), "flex gap-2 items-center")}>
            <Play className="h-4 w-4" />
            <span>Playground</span>
          </a>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNavigation;
