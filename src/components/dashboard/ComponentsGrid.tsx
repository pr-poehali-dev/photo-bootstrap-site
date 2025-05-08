
import React from 'react';
import Icon from '@/components/ui/icon';

interface ComponentCardProps {
  title: string;
  subtitle?: string;
  icon: string;
}

export const ComponentCard: React.FC<ComponentCardProps> = ({ title, subtitle, icon }) => {
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

const ComponentsGrid: React.FC = () => {
  return (
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
  );
};

export default ComponentsGrid;
