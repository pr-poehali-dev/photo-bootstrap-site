
import React from 'react';
import Icon from '@/components/ui/icon';

interface FooterProps {
  username: string;
  notifications: number;
  version: string;
}

const Footer: React.FC<FooterProps> = ({ username, notifications, version }) => {
  return (
    <footer className="border-t bg-white p-4 flex justify-end items-center gap-4 text-sm text-gray-600">
      <div className="flex items-center gap-2">
        <Icon name="User" size={16} />
        <span>User Menu</span>
        <Icon name="ChevronDown" size={16} />
      </div>
      <div className="flex items-center gap-2">
        <Icon name="User" size={16} />
        <span>{username}</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon name="Bell" size={16} />
        <span>{notifications}</span>
      </div>
      <div className="flex items-center gap-2">
        <span>Post Installation Messages</span>
      </div>
      <div>
        <span>{version}</span>
      </div>
    </footer>
  );
};

export default Footer;
