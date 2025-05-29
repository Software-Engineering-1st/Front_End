import React from 'react';
import { useLocation } from 'react-router-dom';
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 경로에 따라 네비게이션 바의 제목을 설정합니다.
  const getPageTitle = (pathname: string) => {
    switch (pathname) {
      case '/login':
        return '';
      case '/signup':
        return '회원가입';
      case '/signup/2':
        return '회원가입';
      case '/main':
        return 'DANDAN';
      case '/':
        return '메인 페이지';
      default:
        return '';
    }
  };

  const isMainPage = location.pathname === '/main';
  const isAdminPage = location.pathname === '/admin';

  return (
    <div className="h-[90px] flex items-center justify-between px-4">
      <div className="flex items-center" style={{ width: '2rem', minWidth: '2rem', justifyContent: 'center' }}>
        {!isMainPage && !isAdminPage ? (
          <IoChevronBackOutline className="text-2xl font-bold" onClick={() => navigate(-1)}/>
        ) : null}
      </div>
      <h2 className={`flex-1 text-center font-extrabold ${isMainPage || isAdminPage ? 'text-[32px]' : 'text-xl'}`} style={{ color: '#393e74' }}>
        {isAdminPage ? 'DANDAN' : getPageTitle(location.pathname)}
      </h2>
      <div className="w-6"></div> {/* 오른쪽 여백을 위한 빈 div */}
    </div>
  );
};

export default NavBar;