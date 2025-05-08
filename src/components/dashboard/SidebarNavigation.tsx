
import React from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';
import { LucideIcon } from 'lucide-react';

interface SidebarItemProps {
  icon: LucideIcon;
  text: string;
  active?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon: IconComponent, 
  text, 
  active = false 
}) => {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-md ${active ? 'bg-blue-700' : 'hover:bg-gray-700'}`}>
      <IconComponent size={18} />
      <span className="text-sm">{text}</span>
    </div>
  );
};

export const SidebarItemWithChildren: React.FC<SidebarItemProps> = ({ 
  icon: IconComponent, 
  text 
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-2 hover:bg-gray-700 rounded-md">
      <div className="flex items-center gap-2">
        <IconComponent size={18} />
        <span className="text-sm">{text}</span>
      </div>
      <Icon name="ChevronRight" size={16} />
    </div>
  );
};

interface SidebarNavigationProps {
  activeItem?: string;
}

const SidebarNavigation: React.FC<SidebarNavigationProps> = ({ activeItem = "Home Dashboard" }) => {
  // Преобразуем строковое название в булево значение для активного элемента
  const isActive = (name: string) => name === activeItem;

  return (
    <div className="w-60 bg-[#0F2536] text-white flex flex-col">
      {/* Sidebar Header */}
      <div className="h-14 bg-[#0078D7] flex items-center px-6 font-bold text-xl">
        <span>XiroAdmin</span>
      </div>
      
      {/* Toggle Menu Button */}
      <div className="flex items-center gap-2 px-6 py-3 border-b border-gray-700">
        <Icon name="Menu" size={18} />
        <span className="text-sm">Toggle Menu</span>
      </div>
      
      {/* Sidebar Navigation */}
      <ScrollArea className="flex-1">
        <div className="space-y-1 p-2">
          <SidebarItem icon={require('lucide-react').HomeIcon} text="Home Dashboard" active={isActive("Home Dashboard")} />
          <SidebarItemWithChildren icon={require('lucide-react').Package} text="Content" />
          <SidebarItem icon={require('lucide-react').ImageIcon} text="Media" active={isActive("Media")} />
          <SidebarItemWithChildren icon={require('lucide-react').LayoutTemplate} text="Templates" />
          <SidebarItemWithChildren icon={require('lucide-react').Menu} text="Menus" />
          <SidebarItemWithChildren icon={require('lucide-react').Settings} text="Components" />
          <SidebarItemWithChildren icon={require('lucide-react').Users} text="Users" />
          <SidebarItemWithChildren icon={require('lucide-react').HardDrive} text="Install" />
          <SidebarItemWithChildren icon={require('lucide-react').Settings} text="System" />
          <SidebarItem icon={require('lucide-react').HelpCircle} text="Help" active={isActive("Help")} />
          <SidebarItem icon={require('lucide-react').Info} text="About Xiroadmin" active={isActive("About Xiroadmin")} />
        </div>
      </ScrollArea>
    </div>
  );
};

export default SidebarNavigation;
