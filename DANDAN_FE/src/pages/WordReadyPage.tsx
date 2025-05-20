import React from 'react';
import { useNavigate } from 'react-router-dom';
import ets from '../assets/Toeic.svg';
import ghost from '../assets/ghost.svg';

const WordReadyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen max-w-[393px] mx-auto bg-white px-10 py-6">
      {/* 네브바 */}
      <div className="flex items-center mb-8">
        <button onClick={() => navigate(-1)}>
          <span className="text-2xl">{'<'}</span>
        </button>
        <div className="flex-1 text-center text-[28px] font-extrabold text-[#393e74]">단어 외우기</div>
        <div style={{ width: 32 }}></div>
      </div>

      {/* 목표 단어 카드 */}
      <div className="rounded-xl border border-gray-300 flex items-center justify-between px-6 py-6 mb-8">
        <img src={ets} alt="ETS" className="w-20 h-10 object-contain" />
        <div className="flex flex-col items-end">
          <div className="text-[18px] text-gray-500">목표 단어</div>
          <div className="text-[36px] font-extrabold text-[#393e74] leading-none">
            38<span className="text-lg font-normal text-gray-700 align-top ml-1">개</span>
          </div>
        </div>
      </div>

      {/* Ghost 이미지와 메시지 */}
      <div className="flex flex-col items-center mb-8">
        <img src={ghost} alt="ghost" className="w-40 h-40 mb-4" />
        <div className="text-center text-[18px] font-semibold text-black leading-relaxed">
          토익 단어를 외워보자!<br />
          오늘도 화이팅이야 :)
        </div>
      </div>

      {/* START 버튼 */}
      <button
        className="mt-auto w-full bg-[#393e74] text-white py-4 rounded-lg text-lg font-bold"
        onClick={() => navigate('/word-study')}
      >
        START
      </button>
    </div>
  );
};

export default WordReadyPage; 