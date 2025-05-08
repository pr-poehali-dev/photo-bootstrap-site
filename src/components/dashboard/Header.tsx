
import React from 'react';
import { HomeIcon } from 'lucide-react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="h-14 bg-[#0078D7] flex items-center px-6 text-white">
      <div className="flex items-center gap-2">
        <HomeIcon size={20} />
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>
    </header>
  );
};

export default Header;
