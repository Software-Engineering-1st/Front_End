import React from 'react';
import { useNavigate } from 'react-router-dom';
import testIcon from '../assets/test.svg'; // 시험지 아이콘
import mascot from '../assets/ghost.svg';  // 마스코트(ghost 등)
import { useGoal } from '../context/GoalContext';

const TestReadyPage = () => {
  const navigate = useNavigate();
  const { goal } = useGoal();

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col w-full h-screen max-w-[393px] max-h-[852px] mx-auto bg-white px-10 py-6">
        {/* 네브바 */}
        <div className="flex items-center mb-8">
          <button onClick={() => navigate(-1)}>
            <span className="text-2xl">{'<'}</span>
          </button>
          <div className="flex-1 text-center text-[28px] font-extrabold text-[#393e74]">TEST</div>
          <div style={{ width: 32 }}></div>
        </div>

        {/* 시험 볼 단어 카드 */}
        <div className="rounded-xl border border-gray-300 flex items-center px-6 py-6 mb-8">
          <img src={testIcon} alt="시험지" className="w-20 h-20 object-contain mr-4" />
          <div className="flex flex-col items-end flex-1">
            <div className="text-[18px] text-[#393e74] font-semibold">시험 볼 단어</div>
            <div className="text-[40px] font-extrabold text-[#393e74] leading-none">
              {goal}<span className="text-lg font-normal text-gray-700 align-top ml-1">개</span>
            </div>
          </div>
        </div>

        {/* 마스코트와 메시지 */}
        <div className="flex flex-col items-center mb-8 flex-1 justify-center">
          <img src={mascot} alt="마스코트" className="w-40 h-40 mb-4" />
          <div className="text-center text-[18px] font-semibold text-black leading-relaxed">
            외운 단어를 복습해볼까?<br />
            만점 가보자고!
          </div>
        </div>

        {/* START 버튼 */}
        <button
          className="w-full bg-[#393e74] text-white py-4 rounded-lg text-lg font-bold"
          onClick={() => navigate('/test-solve')}
        >
          START
        </button>
      </div>
    </div>
  );
};

export default TestReadyPage; 