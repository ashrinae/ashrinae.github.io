
import React from 'react';
import { FileText, BookOpen, Play } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const MainNavigation: React.FC = () => {
  return (
    <NavigationMenu className="mt-3">
      <NavigationMenuList className="gap-2">
        <NavigationMenuItem>
          <a 
            href="https://resume.sevenspoke.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={cn(navigationMenuTriggerStyle(), "flex gap-2 items-center")}
          >
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
          <NavigationMenuTrigger className="flex gap-2 items-center">
            <Play className="h-4 w-4" />
            <span>Playground</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-3 p-4">
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="https://snark.sevenspoke.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium">Marketing Persona Quiz</div>
                  </a>
                </NavigationMenuLink>
              </li>
              <li>
                <NavigationMenuLink asChild>
                  <a
                    href="https://burns.sevenspoke.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div className="text-sm font-medium">Professional Burn Machine</div>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default MainNavigation;
