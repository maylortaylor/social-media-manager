/** @format */

import {
  BarChart,
  ChevronLeft,
  ChevronRight,
  Facebook,
  FileText,
  Home,
  Instagram,
  Settings,
  Youtube,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useState } from "react";

type SidebarProps = React.HTMLAttributes<HTMLDivElement>

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/" },
    { icon: Youtube, label: "YouTube", href: "/youtube" },
    { icon: Instagram, label: "Instagram", href: "/instagram" },
    { icon: Facebook, label: "Facebook", href: "/facebook" },
    { icon: FileText, label: "Templates", href: "/templates" },
    { icon: BarChart, label: "Analytics", href: "/analytics" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <div
      className={cn(
        "relative flex h-screen flex-col border-r bg-background transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex h-14 items-center border-b px-4">
        {!isCollapsed && (
          <span className="text-lg font-semibold">Suite E Studios</span>
        )}
      </div>

      <ScrollArea className="flex-1 py-2">
        <nav className="grid gap-1 px-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={cn("justify-start", isCollapsed ? "px-2" : "px-4")}
            >
              <item.icon className="h-5 w-5" />
              {!isCollapsed && <span className="ml-2">{item.label}</span>}
            </Button>
          ))}
        </nav>
      </ScrollArea>

      <div className="border-t p-4">
        <Button
          variant="ghost"
          size="icon"
          className="w-full"
          onClick={toggleSidebar}
        >
          {isCollapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
