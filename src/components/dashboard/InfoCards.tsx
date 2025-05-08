
import React from 'react';
import Icon from '@/components/ui/icon';

interface InfoCardProps {
  title: string;
  subtitle: string;
  bgColor: string;
  icon: string;
  large?: boolean;
}

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  subtitle, 
  bgColor, 
  icon, 
  large = false 
}) => {
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

const InfoCards: React.FC = () => {
  return (
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
  );
};

export { InfoCard, InfoCards };
