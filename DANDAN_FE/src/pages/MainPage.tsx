import React from 'react';
import ghost from '../assets/ghost.svg';
import toeic from '../assets/Toeic.svg';
import test from '../assets/test.svg';
import note from '../assets/note.svg';  
import HomeLayout from '../layout/HomeLayout';
import { GrNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <HomeLayout>
      <div className="flex flex-col flex-1 pt-4 pb-4 gap-8">
        {/* 환영 메시지 */}
        <div className="bg-[#f3f6fd] rounded-xl px-4 py-8 flex items-center justify-between">
          <div>
            <div className="text-[16px] text-gray-500 mb-1">환영합니다</div>
            <div className="text-[20px] font-bold text-[#393e74]">소공1조에이쁠쥐님</div>
          </div>
          <span className="text-gray-400 text-2xl"><GrNext/></span>
        </div>
        
        {/* 목표 단어 카드 */}
        <div className="flex flex-col gap-4">
        <div className="text-[18px] font-bold text-black">단어를 외워보자</div>
        <div className="rounded-xl border border-gray-200 bg-white flex items-center px-4 py-4 gap-4">
          <img src={ghost} alt="ghost" className="w-36 h-36" />
          <div className="flex flex-col flex-1 items-center gap-1 text-center">
            <div className="text-[18px] text-gray-500">목표 단어</div>
            <div className="text-[24px] font-extrabold text-[#393e74] leading-none">38<span className="text-lg font-normal text-gray-700 align-top ml-1">개</span></div>
          </div>
        </div>

        {/* 3개 버튼 그리드 */}
        <div className="grid grid-cols-2 gap-4">
          <button className="row-span-2 rounded-xl border border-gray-200 bg-white flex flex-col items-center justify-center py-6 gap-2" 
                  onClick={() => navigate('/word-ready')}>
            <img src={toeic} alt="ETS" className="w-16 h-16 object-contain" />
            <span className="text-[16px] text-gray-700 font-semibold">TOEIC<br/>단어 외우기</span>
          </button>
          <button className="rounded-xl border border-gray-200 bg-white flex flex-col items-center justify-center py-6 gap-2">
            <img src={test} alt="TEST" className="w-14 h-14 object-contain" />
            <span className="text-[16px] text-gray-700 font-semibold">TEST</span>
          </button>
          <div className="flex gap-4">
            <button className="flex-1 rounded-xl border border-gray-200 bg-white flex flex-col items-center justify-center py-6 gap-2">
              <img src={note} alt="오답노트" className="w-14 h-14 object-contain" />
              <span className="text-[16px] text-gray-700 font-semibold">오답노트</span>
            </button>
          </div>
        </div>
        </div>
        
      </div>
    </HomeLayout>
  );
};

export default MainPage;