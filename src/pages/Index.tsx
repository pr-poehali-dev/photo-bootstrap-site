
import React from 'react';
import { BellIcon, HomeIcon, ImageIcon, LayoutTemplate, Menu, Package, Search, Settings, Users, HardDrive, HelpCircle, Info } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-60 bg-[#0F2536] text-white flex flex-col">
        {/* Sidebar Header */}
        <div className="h-14 bg-[#0078D7] flex items-center px-6 font-bold text-xl">
          <span>XiroAdmin</span>
        </div>
        
        {/* Toggle Menu Button */}
        <div className="flex items-center gap-2 px-6 py-3 border-b border-gray-700">
          <Menu size={18} />
          <span className="text-sm">Toggle Menu</span>
        </div>
        
        {/* Sidebar Navigation */}
        <ScrollArea className="flex-1">
          <div className="space-y-1 p-2">
            <SidebarItem icon={HomeIcon} text="Home Dashboard" active />
            <SidebarItemWithChildren icon={Package} text="Content" />
            <SidebarItem icon={ImageIcon} text="Media" />
            <SidebarItemWithChildren icon={LayoutTemplate} text="Templates" />
            <SidebarItemWithChildren icon={Menu} text="Menus" />
            <SidebarItemWithChildren icon={Settings} text="Components" />
            <SidebarItemWithChildren icon={Users} text="Users" />
            <SidebarItemWithChildren icon={HardDrive} text="Install" />
            <SidebarItemWithChildren icon={Settings} text="System" />
            <SidebarItem icon={HelpCircle} text="Help" />
            <SidebarItem icon={Info} text="About Xiroadmin" />
          </div>
        </ScrollArea>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="h-14 bg-[#0078D7] flex items-center px-6 text-white">
          <div className="flex items-center gap-2">
            <HomeIcon size={20} />
            <h1 className="text-xl font-semibold">Home Dashboard</h1>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-6 space-y-6">
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InfoCard 
              title="11" 
              subtitle="Articles" 
              bgColor="bg-[#18A558]" 
              icon="FileText" 
            />
            
            <InfoCard 
              title="1" 
              subtitle="Users" 
              bgColor="bg-[#17A2B8]" 
              icon="Users" 
            />
            
            <InfoCard 
              title="System Info" 
              subtitle="PHP: 7.4.23, MySQL: 10.4.21-MariaDB, Caching: Disabled, Gzip: Disabled" 
              bgColor="bg-[#FFC107]" 
              icon="HardDrive" 
              large
            />
          </div>
          
          {/* Tables Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Popular Articles */}
            <div className="bg-white rounded-md shadow-md">
              <h2 className="text-xl font-semibold p-4 border-b">Popular Articles</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Title</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Hits</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ArticleRow title="About" hits="0" date="2021-11-14" />
                    <ArticleRow title="About your home page" hits="0" date="2021-11-14" />
                    <ArticleRow title="Welcome to your blog" hits="0" date="2021-11-14" />
                    <ArticleRow title="Typography" hits="0" date="2021-11-14" />
                    <ArticleRow title="New feature: Workflows" hits="0" date="2021-11-14" />
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Recently Added Articles */}
            <div className="bg-white rounded-md shadow-md">
              <h2 className="text-xl font-semibold p-4 border-b">Recently Added Articles</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Title</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Author</th>
                      <th className="px-4 py-3 text-sm font-medium text-gray-600">Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ArticleRowWithAuthor title="About" author="TestJ4" date="2021-11-14" />
                    <ArticleRowWithAuthor title="Your Template" author="TestJ4" date="2021-11-14" />
                    <ArticleRowWithAuthor title="Your Modules" author="TestJ4" date="2021-11-14" />
                    <ArticleRowWithAuthor title="About your home page" author="TestJ4" date="2021-11-14" />
                    <ArticleRowWithAuthor title="Welcome to your blog" author="TestJ4" date="2021-11-14" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* Components Grid */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Components</h2>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              <ComponentCard title="Akeeba Backup" subtitle="for Joomla!™" icon="Archive" />
              <ComponentCard title="Banners" icon="Flag" />
              <ComponentCard title="Contacts" icon="Book" />
              <ComponentCard title="News Feeds" icon="Rss" />
              <ComponentCard title="Smart Search" icon="Search" />
              <ComponentCard title="Tags" icon="Tag" />
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="border-t bg-white p-4 flex justify-end items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Icon name="User" size={16} />
            <span>User Menu</span>
            <Icon name="ChevronDown" size={16} />
          </div>
          <div className="flex items-center gap-2">
            <Icon name="User" size={16} />
            <span>TestJ4</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Bell" size={16} />
            <span>4</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Post Installation Messages</span>
          </div>
          <div>
            <span>4.0.3</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Sidebar components
const SidebarItem = ({ icon: IconComponent, text, active = false }) => {
  return (
    <div className={`flex items-center gap-2 px-4 py-2 rounded-md ${active ? 'bg-blue-700' : 'hover:bg-gray-700'}`}>
      <IconComponent size={18} />
      <span className="text-sm">{text}</span>
    </div>
  );
};

const SidebarItemWithChildren = ({ icon: IconComponent, text }) => {
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

// Dashboard components
const InfoCard = ({ title, subtitle, bgColor, icon, large = false }) => {
  return (
    <div className={`${bgColor} text-white rounded-md shadow-md relative overflow-hidden`}>
      <div className="p-4">
        <h3 className="text-3xl font-bold">{title}</h3>
        <p className={`${large ? 'text-sm' : 'text-lg'}`}>{subtitle}</p>
      </div>
      <div className="absolute bottom-0 right-0 p-2 bg-white bg-opacity-10 rounded-tl-md">
        <span className="text-sm">More</span>
        <Icon name="ArrowRight" size={16} className="inline-block ml-1" />
      </div>
      <div className="absolute right-4 top-4 opacity-20">
        <Icon name={icon} size={64} />
      </div>
    </div>
  );
};

const ArticleRow = ({ title, hits, date }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">
        <a href="#" className="text-blue-500 hover:underline">{title}</a>
      </td>
      <td className="px-4 py-3">
        <span className="inline-flex items-center justify-center bg-gray-200 rounded-full h-6 w-6 text-xs">{hits}</span>
      </td>
      <td className="px-4 py-3 text-gray-500">{date}</td>
    </tr>
  );
};

const ArticleRowWithAuthor = ({ title, author, date }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-4 py-3">
        <a href="#" className="text-blue-500 hover:underline">{title}</a>
      </td>
      <td className="px-4 py-3">{author}</td>
      <td className="px-4 py-3 text-gray-500">{date}</td>
    </tr>
  );
};

const ComponentCard = ({ title, subtitle, icon }) => {
  return (
    <div className="bg-white rounded-md shadow-md hover:shadow-lg transition-shadow p-4 text-center flex flex-col items-center">
      <div className="bg-[#9966CC] rounded-md h-16 w-16 flex items-center justify-center mb-3">
        <Icon name={icon} size={32} className="text-white" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      {subtitle && <p className="text-xs text-gray-500">{subtitle}</p>}
    </div>
  );
};

export default Index;
