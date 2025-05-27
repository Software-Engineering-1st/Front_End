import React from 'react';
import ghost from '../assets/ghost.svg';
import test from '../assets/test.svg'; // 파란 캐릭터 대체
import { useNavigate, useLocation } from 'react-router-dom';

const TestResultPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score ?? 20;
  const total = location.state?.total ?? 38;

  return (
    <div className="flex flex-col min-h-screen items-center justify-between py-8 bg-[#f8f9fb]">
      <div />
      <div className="w-full flex flex-col items-center">
        <div className="text-2xl font-bold text-[#393e74] mb-8 mt-4">TEST</div>
        <div className="relative w-72 h-56 flex items-center justify-center mb-8">
          <img src={ghost} alt="angel ghost" className="absolute -top-8 -left-8 w-20 h-20" />
          <div className="bg-[#eef2fd] rounded-xl shadow-md w-full h-48 flex flex-col items-center justify-center z-10">
            <div className="text-lg font-semibold text-[#393e74] mb-2 mt-2">SCORE</div>
            <div className="text-[40px] font-extrabold text-[#393e74] flex items-end gap-2">
              {score}
              <span className="text-3xl font-normal text-[#393e74]">/</span>
              {total}
            </div>
          </div>
          <img src={test} alt="blue bot" className="absolute -bottom-8 -right-8 w-20 h-20" />
        </div>
        <div className="text-center mt-2 mb-8">
          <div className="text-lg font-semibold text-black mb-1">TEST 완료!</div>
          <div className="text-base text-gray-700">이제 복습하러 가볼까요?</div>
        </div>
      </div>
      <button
        className="w-11/12 max-w-md bg-[#393e74] text-white text-lg font-bold py-3 rounded-md mb-4"
        onClick={() => navigate('/main')}
      >
        HOME
      </button>
    </div>
  );
};

export default TestResultPage; 