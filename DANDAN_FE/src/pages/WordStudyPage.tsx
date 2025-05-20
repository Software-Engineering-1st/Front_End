import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const words = [
  {
    word: 'develop',
    meanings: [
      '성장[발달]하다[시키다].',
      '개발하다',
      '(...에) 영향을 주기 시작하다.',
    ],
  },
  {
    word: 'improve',
    meanings: [
      '개선하다, 향상시키다',
      '좋아지다',
    ],
  },
  // 필요에 따라 더 추가
];

const WordStudyPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentWord = words[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/word-study-complete');
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-[393px] mx-auto bg-white px-10 py-6">
      {/* 네브바 */}
      <div className="flex items-center mb-8">
        <div style={{ width: 32, minWidth: 32 }}></div>
        <div className="flex-1 text-center text-[28px] font-extrabold text-[#393e74]">단어 외우기</div>
        <div style={{ width: 32, minWidth: 32 }}></div>
      </div>

      {/* 단어 카드 */}
      <div className="rounded-xl bg-[#f3f6fd] px-6 py-6 mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span role="img" aria-label="pencil">📝</span>
          <span className="text-[22px] font-extrabold text-[#393e74]">{currentWord.word}</span>
        </div>
        <ol className="list-decimal ml-5 text-[16px] text-black">
          {currentWord.meanings.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ol>
      </div>

      {/* 예문 생성하기 */}
      <div className="mb-8">
        <button className="flex items-center gap-1 text-[#393e74] font-bold">
          예문 생성하기 <span className="bg-[#393e74] text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">+</span>
        </button>
      </div>

      {/* 하단 버튼 */}
      <div className="flex gap-4 mt-auto">
        <button
          className={`flex-1 py-3 rounded-lg border ${currentIndex === 0 ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white text-[#393e74] border-[#393e74]'}`}
          disabled={currentIndex === 0}
          onClick={handlePrev}
        >
          이전
        </button>
        <button
          className="flex-1 py-3 rounded-lg bg-[#393e74] text-white font-bold"
          onClick={handleNext}
        >
          {currentIndex === words.length - 1 ? '완료' : '다음'}
        </button>
      </div>
    </div>
  );
};

export default WordStudyPage; 