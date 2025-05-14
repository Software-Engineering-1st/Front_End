import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

const HomeLayout = ({ children }) => {
  const location = useLocation();

  // 경로에 따라 네비게이션 바의 제목을 설정합니다.
  const getPageTitle = (pathname) => {
    switch (pathname) {
      case '/login':
        return 'Login';
      case '/signup':
        return 'Sign Up';
      case '/':
        return 'Main Page';
      default:
        return '';
    }
  };

  return (
    <div className="w-[393px] h-[852px] mx-auto border border-gray-300 flex flex-col">
      <div className="h-[40px] flex items-center justify-center"/>
      <NavBar />
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;