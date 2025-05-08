
import { LucideIcon } from 'lucide-react';

// Типы для навигации
export interface NavItem {
  icon: LucideIcon;
  text: string;
  hasChildren?: boolean;
  active?: boolean;
}

// Типы для инфо-карточек
export interface InfoCardData {
  title: string;
  subtitle: string;
  bgColor: string;
  icon: string;
  large?: boolean;
}

// Типы для статей
export interface ArticleData {
  title: string;
  hits?: string;
  author?: string;
  date: string;
}

// Типы для компонентов
export interface ComponentCardData {
  title: string;
  subtitle?: string;
  icon: string;
}

// Типы для пользователя
export interface UserData {
  username: string;
  notifications: number;
  version: string;
}
