import React from 'react';
import { useNavigate } from 'react-router-dom';
import note from '../assets/note.svg';

const dummyDates: string[] = ['2025.05.01', '2025.04.27'];
// 실제로는 []일 때만 안내 UI, 테스트용으로 비워둠

const WrongNotePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen max-w-[393px] mx-auto bg-white px-6 py-6">
      {/* 네브바 */}
      <div className="flex items-center mb-8">
        <button onClick={() => navigate(-1)}>
          <span className="text-2xl">{'<'}</span>
        </button>
        <div className="flex-1 text-center text-[24px] font-extrabold text-[#393e74]">오답노트</div>
        <div style={{ width: 32 }}></div>
      </div>
      {dummyDates.length === 0 ? (
        <div className="flex flex-col items-center justify-center flex-1 mt-20">
          <img src={note} alt="빈 오답노트" className="w-32 h-32 mb-6" />
          <div className="text-center text-black text-lg font-semibold mb-1">오답노트가 비어있어요!</div>
          <div className="text-center text-gray-700 text-base">테스트를 진행해 주세요.</div>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {dummyDates.map(date => (
            <button
              key={date}
              className="w-full border border-gray-300 rounded-xl py-4 text-lg font-semibold text-[#393e74] bg-white text-left px-4"
              onClick={() => navigate(`/wrong-note/${date}`)}
            >
              {date}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default WrongNotePage; 