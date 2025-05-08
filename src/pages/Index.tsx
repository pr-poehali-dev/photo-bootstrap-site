
import React from 'react';
import SidebarNavigation from '@/components/dashboard/SidebarNavigation';
import Header from '@/components/dashboard/Header';
import Footer from '@/components/dashboard/Footer';
import { InfoCards } from '@/components/dashboard/InfoCards';
import ArticlesTables from '@/components/dashboard/ArticlesTables';
import ComponentsGrid from '@/components/dashboard/ComponentsGrid';

/**
 * Главная страница админ-панели XiroAdmin
 * 
 * Компонент представляет полный дашборд с боковым меню,
 * информационными карточками, таблицами статей и компонентами
 */
const Index: React.FC = () => {
  // Данные пользователя, в реальном приложении могут приходить из API/контекста
  const userData = {
    username: "TestJ4",
    notifications: 4,
    version: "4.0.3"
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Боковая навигация */}
      <SidebarNavigation activeItem="Home Dashboard" />
      
      {/* Основной контент */}
      <div className="flex-1 overflow-auto">
        {/* Заголовок */}
        <Header title="Home Dashboard" />
        
        {/* Контент дашборда */}
        <main className="p-6 space-y-6">
          {/* Информационные карточки */}
          <InfoCards />
          
          {/* Таблицы статей */}
          <ArticlesTables />
          
          {/* Сетка компонентов */}
          <ComponentsGrid />
        </main>
        
        {/* Подвал */}
        <Footer 
          username={userData.username} 
          notifications={userData.notifications} 
          version={userData.version}
        />
      </div>
    </div>
  );
};

export default Index;
