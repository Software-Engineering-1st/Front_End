import React, { useState } from 'react';
import AnswerResultModal from '../components/AnswerResultModal';
import { useNavigate } from 'react-router-dom';

const words = [
  {
    meanings: [
      '성장[발달]하다[시키다].',
      '개발하다',
      '(...에) 영향을 주기 시작하다.',
    ],
    answer: 'develop',
  },
  {
    meanings: [
      '개선하다, 향상시키다',
      '좋아지다',
    ],
    answer: 'improve',
  },
  // ...더 많은 단어
];

const TestSolvePage = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const currentWord = words[currentIndex];

  const handleNext = () => {
    if (!input.trim()) {
      setError('단어를 적어주세요.');
      return;
    }
    if (!/^[a-zA-Z]+$/.test(input.trim())) {
      setError('영문 외의 다른 문자는 불가능해요.');
      return;
    }
    setError('');
    setIsCorrect(input.trim().toLowerCase() === currentWord.answer);
    if (input.trim().toLowerCase() === currentWord.answer) {
      setScore(score + 1);
    }
    setShowResult(true);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setError('');
  };

  const handleModalClose = () => {
    setShowResult(false);
    setInput('');
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigate('/test-complete', { state: { score: input.trim().toLowerCase() === currentWord.answer ? score + 1 : score, total: words.length } });
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col w-full h-screen max-w-[393px] max-h-[852px] mx-auto bg-white px-10 py-6">
        {/* 네브바 */}
        <div className="flex items-center mb-8">
          <div style={{ width: 32, minWidth: 32 }}></div>
          <div className="flex-1 text-center text-[28px] font-extrabold text-[#393e74]">TEST</div>
          <div style={{ width: 32, minWidth: 32 }}></div>
        </div>

        {/* 문제 */}
        <div className="text-[18px] font-bold text-black mb-4">
          {currentIndex + 1}. 뜻을 보고 영어 단어를 적어주세요.
        </div>

        {/* 카드 */}
        <div className="rounded-xl bg-[#f3f6fd] px-4 py-4 mb-6">
          <div className="flex flex-col items-center mb-2">
            <div className="w-full flex justify-center">
              <span className="text-3xl text-red-500">?</span>
            </div>
          </div>
          <ol className="list-none pl-0 text-[16px] text-black">
            {currentWord.meanings.map((m, i) => (
              <li key={i} className="mb-1">
                <span className="font-bold mr-1">{String.fromCharCode(97 + i)}.</span>
                {m}
              </li>
            ))}
          </ol>
        </div>

        {/* 입력란 */}
        <div className="mb-2 font-bold">Answer</div>
        <input
          className={`w-full border rounded-lg px-3 py-2 mb-1 ${error ? 'border-red-400' : 'border-gray-300'}`}
          value={input}
          onChange={handleInput}
          placeholder="정답을 입력하세요"
        />
        {error && (
          <div className="text-red-500 text-sm mb-4">{error}</div>
        )}

        {/* 다음 버튼 */}
        <button
          className="w-full border border-[#393e74] text-[#393e74] py-3 rounded-lg text-lg font-bold mt-4"
          onClick={handleNext}
        >
          다음
        </button>
      </div>
      <AnswerResultModal
        open={showResult}
        correct={isCorrect}
        onClose={handleModalClose}
      />
    </div>
  );
};

export default TestSolvePage; 