import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <div className="w-full h-screen max-w-[393px] max-h-[852px] mx-auto border border-gray-300 flex flex-col bg-white shadow-lg">
      <NavBar />
      <div className="flex-1 overflow-auto flex flex-col px-10">
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;