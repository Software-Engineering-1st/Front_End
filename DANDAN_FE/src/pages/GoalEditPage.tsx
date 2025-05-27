import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const GoalEditPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevGoal = location.state?.goal ?? 38;
  const [goal, setGoal] = useState(prevGoal);

  const isChanged = goal !== prevGoal && goal > 0;

  return (
    <div className="flex flex-col min-h-screen max-w-[393px] mx-auto bg-white px-6 py-6 items-center">
      {/* 네브바 */}
      <div className="w-full flex items-center mb-8">
        <button onClick={() => navigate(-1)}>
          <span className="text-2xl">{'<'}</span>
        </button>
        <div className="flex-1 text-center text-[24px] font-extrabold text-[#393e74]">목표 수정</div>
        <div style={{ width: 32 }}></div>
      </div>
      <div className="flex flex-col items-center w-full mt-10">
        <div className="text-lg text-black font-semibold mb-8">목표하는 단어 개수를<br/>입력해 주세요.</div>
        <div className="flex items-end mb-8">
          <input
            type="number"
            min={1}
            value={goal}
            onChange={e => setGoal(Number(e.target.value))}
            className="text-[48px] font-extrabold text-[#393e74] text-center w-24 outline-none border-b border-gray-300 focus:border-[#393e74] bg-transparent"
          />
          <span className="text-2xl font-bold text-black ml-2">개</span>
        </div>
        <button
          className={`w-full py-3 rounded-md text-lg font-bold mt-4 ${isChanged ? 'bg-[#393e74] text-white' : 'bg-gray-300 text-white'}`}
          disabled={!isChanged}
          onClick={() => navigate('/mypage', { state: { goal } })}
        >
          수정
        </button>
      </div>
    </div>
  );
};

export default GoalEditPage; 