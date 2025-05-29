import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ghost from '../assets/ghost.svg';
import test from '../assets/test.svg';
import { useGoal } from '../context/GoalContext';
import { useUser } from '../context/UserContext';

const MyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = 'dandan12';
  const { goal, setGoal } = useGoal();
  const { nickname, setNickname } = useUser();
  const [showLogout, setShowLogout] = useState(false);

  // /goal-edit에서 돌아올 때 state로 goal이 오면 반영
  React.useEffect(() => {
    if (location.state?.goal !== undefined) {
      setGoal(location.state.goal);
    }
    if (location.state?.name !== undefined) {
      setNickname(location.state.name);
    }
    // eslint-disable-next-line
  }, [location.state?.goal, location.state?.name]);

  return (
    <div className="flex flex-col min-h-screen max-w-[393px] mx-auto bg-white px-6 py-6 relative">
      {/* 네브바 */}
      <div className="flex items-center mb-8">
        <button onClick={() => navigate('/main')}>
          <span className="text-2xl">{'<'}</span>
        </button>
        <div className="flex-1 text-center text-[24px] font-extrabold text-[#393e74]">마이페이지</div>
        <div style={{ width: 32 }}></div>
      </div>
      {/* 유저 정보 카드 */}
      <div className="bg-[#f3f6fd] rounded-xl px-4 py-4 mb-4">
        <div className="text-[18px] font-bold text-[#393e74] mb-1">{nickname}님</div>
        <div className="text-[15px] text-gray-500">{userId}</div>
      </div>
      {/* 목표 단어 카드 */}
      <div className="rounded-xl border border-gray-200 flex items-center px-4 py-4 mb-6">
        <div className="flex flex-col flex-1 gap-1">
          <div className="text-[16px] text-gray-500 mb-1">목표 단어</div>
          <div className="text-[32px] font-extrabold text-[#393e74] leading-none">{goal}<span className="text-lg font-normal text-gray-700 align-top ml-1">개</span></div>
        </div>
        <img src={ghost} alt="ghost" className="w-20 h-20 ml-2" />
      </div>
      <hr className="my-4 border-gray-200" />
      {/* 수정 버튼들 */}
      <div className="flex flex-col gap-3 mb-8">
        <button className="w-full border border-gray-300 rounded-xl py-4 text-lg font-semibold text-black bg-white flex items-center justify-between px-4"
                onClick={() => navigate('/goal-edit', { state: { goal } })}>
          목표 수정
          <span className="text-2xl text-gray-400">&gt;</span>
        </button>
        <button className="w-full border border-gray-300 rounded-xl py-4 text-lg font-semibold text-black bg-white flex items-center justify-between px-4"
                onClick={() => navigate('/info-edit', { state: { name: nickname } })}>
          정보 수정
          <span className="text-2xl text-gray-400">&gt;</span>
        </button>
      </div>
      <button className="mt-auto text-gray-400 text-center w-full py-2 text-base" onClick={() => setShowLogout(true)}>
        로그아웃
      </button>
      {/* 로그아웃 모달 */}
      {showLogout && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl flex flex-col items-center justify-center p-8 min-w-[300px] min-h-[320px] shadow-xl relative">
            <img src={test} alt="logout mascot" className="w-28 h-28 mb-6" />
            <div className="text-xl font-bold text-black mb-6 text-center">로그아웃을<br/>하시겠습니까?</div>
            <button
              className="w-full bg-[#393e74] text-white text-lg font-bold py-3 rounded-md mb-3"
              onClick={() => navigate('/')}
            >
              로그아웃
            </button>
            <button
              className="w-full bg-gray-300 text-gray-700 text-lg font-bold py-3 rounded-md"
              onClick={() => setShowLogout(false)}
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPage; 