import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();


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