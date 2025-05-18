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
        return '로그인';
      case '/signup':
        return '회원가입';
      case '/signup/2':
        return '회원가입';
      case '/':
        return '메인 페이지';
      default:
        return '';
    }
  };

  return (
    <div className="h-[70px] flex items-center justify-between px-4">
      <div className="flex items-center">
        <IoChevronBackOutline className="text-2xl font-bold" onClick={() => navigate(-1)}/>
      </div>
      <h2 className="flex-1 text-center text-2xl font-bold color-{#313A73}">{getPageTitle(location.pathname)}</h2> {/* 타이틀을 가운데에 배치 */}
      <div className="w-6"></div> {/* 오른쪽 여백을 위한 빈 div */}
    </div>
  );
};

export default NavBar;