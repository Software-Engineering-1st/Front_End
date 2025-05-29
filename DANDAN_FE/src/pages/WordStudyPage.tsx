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
    examples: [
      'Children develop rapidly during their early years.',
      'They developed a new technology to reduce carbon emissions.',
      'She developed a strong interest in astronomy after watching a documentary.'
    ]
  },
  {
    word: 'improve',
    meanings: [
      '개선하다, 향상시키다',
      '좋아지다',
    ],
    examples: [
      'He worked hard to improve his English skills.',
      'The weather is expected to improve tomorrow.'
    ]
  },
  {
    word: 'achieve',
    meanings: [
      '달성하다, 성취하다',
      '이루다',
    ],
    examples: [
      'She achieved her goal of becoming a doctor.',
      'We can achieve success if we work together.'
    ]
  },
  {
    word: 'challenge',
    meanings: [
      '도전',
      '도전하다',
      '이의를 제기하다',
    ],
    examples: [
      'Climbing the mountain was a real challenge.',
      'He challenged his friend to a chess match.'
    ]
  },
  {
    word: 'explore',
    meanings: [
      '탐험하다, 탐구하다',
      '조사하다',
    ],
    examples: [
      'They explored the ancient ruins.',
      'We need to explore all options before making a decision.'
    ]
  },
  // 필요에 따라 더 추가
];

const SkeletonExampleList = () => (
  <div>
    {[1,2,3].map(i => (
      <div key={i} className="h-6 bg-gray-200 rounded mb-2 animate-pulse" />
    ))}
  </div>
);

const WordStudyPage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showExamples, setShowExamples] = useState(false);

  const currentWord = words[currentIndex];

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
    setShowExamples(false);
    setIsLoading(false);
  };

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowExamples(false);
      setIsLoading(false);
    } else {
      navigate('/word-study-complete');
    }
  };

  const handleGenerateExamples = () => {
    setIsLoading(true);
    setShowExamples(false);
    setTimeout(() => {
      setIsLoading(false);
      setShowExamples(true);
    }, 2000);
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
        <button className="flex items-center gap-1 text-[#393e74] font-bold" onClick={handleGenerateExamples} disabled={isLoading}>
          예문 생성하기 <span className="bg-[#393e74] text-white rounded-full w-5 h-5 flex items-center justify-center text-sm">+</span>
        </button>
        <div className="mt-4">
          {isLoading && <SkeletonExampleList />}
          {!isLoading && showExamples && (
            <ol className="list-decimal ml-5 text-[16px] text-black">
              {currentWord.examples.map((ex, i) => (
                <li key={i}>{ex}</li>
              ))}
            </ol>
          )}
        </div>
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