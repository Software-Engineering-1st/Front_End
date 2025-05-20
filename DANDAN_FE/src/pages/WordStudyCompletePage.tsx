import React from 'react';
import { useNavigate } from 'react-router-dom';
import ghost from '../assets/ghost.svg';

const WordStudyCompletePage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-screen max-w-[393px] mx-auto bg-white px-10 py-6 items-center justify-center">
      {/* 네브바 */}
      <div className="w-full flex items-center mb-8">
        <div style={{ width: 32, minWidth: 32 }}></div>
        <div className="flex-1 text-center text-[28px] font-extrabold text-[#393e74]">단어 외우기</div>
        <div style={{ width: 32, minWidth: 32 }}></div>
      </div>
      <img src={ghost} alt="ghost" className="w-40 h-40 mb-8" />
      <div className="text-center text-[18px] font-semibold text-black leading-relaxed mb-8">
        오늘의 목표 완료!<br />
        이제 시험을 봐볼까?
      </div>
      <button
        className="w-full bg-[#393e74] text-white py-4 rounded-lg text-lg font-bold"
        onClick={() => navigate('/main')}
      >
        HOME
      </button>
    </div>
  );
};

export default WordStudyCompletePage; 