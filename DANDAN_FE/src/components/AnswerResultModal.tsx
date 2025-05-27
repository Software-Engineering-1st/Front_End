import React from 'react';
import mascot from '../assets/ghost.svg';

const AnswerResultModal = ({ open, correct, onClose }: {
  open: boolean;
  correct: boolean;
  onClose: () => void;
}) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl flex flex-col items-center justify-center p-8 min-w-[220px] min-h-[220px] shadow-xl">
        <img src={mascot} alt="마스코트" className="w-24 h-24 mb-4" />
        <div className={`text-2xl font-bold ${correct ? 'text-[#393e74]' : 'text-red-500'}`}>
          {correct ? '정답 !' : '틀렸어요'}
        </div>
        <button
          className="mt-6 px-6 py-2 rounded bg-[#393e74] text-white font-bold"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </div>
  );
};

export default AnswerResultModal; 