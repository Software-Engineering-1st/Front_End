import React from 'react';
import { useLocation } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";

const NavBar = () => {
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
    <div className="h-[70px] flex items-center justify-between px-4">
      <div className="flex items-center">
        <IoChevronBackOutline className="text-2xl font-bold" />
      </div>
      <h2 className="flex-1 text-center text-2xl font-bold color-{#313A73}">{getPageTitle(location.pathname)}</h2> {/* 타이틀을 가운데에 배치 */}
      <div className="w-6"></div> {/* 오른쪽 여백을 위한 빈 div */}
    </div>
  );
};

export default NavBar;