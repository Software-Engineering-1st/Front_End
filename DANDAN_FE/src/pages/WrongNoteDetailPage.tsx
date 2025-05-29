import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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
  {
    word: 'achieve',
    meanings: [
      '달성하다, 성취하다',
      '이루다',
    ],
  },
  {
    word: 'challenge',
    meanings: [
      '도전',
      '도전하다',
      '이의를 제기하다',
    ],
  },
  {
    word: 'explore',
    meanings: [
      '탐험하다, 탐구하다',
      '조사하다',
    ],
  },
  {
    word: 'analyze',
    meanings: ['분석하다'],
  },
  {
    word: 'assume',
    meanings: ['추정하다', '가정하다'],
  },
  {
    word: 'benefit',
    meanings: ['이익', '혜택', '이익을 얻다'],
  },
  {
    word: 'compare',
    meanings: ['비교하다'],
  },
  {
    word: 'consider',
    meanings: ['고려하다', '숙고하다'],
  },
  {
    word: 'define',
    meanings: ['정의하다', '규정하다'],
  },
  {
    word: 'demonstrate',
    meanings: ['증명하다', '보여주다'],
  },
  {
    word: 'determine',
    meanings: ['결정하다', '결심하다'],
  },
  {
    word: 'establish',
    meanings: ['설립하다', '확립하다'],
  },
  {
    word: 'identify',
    meanings: ['확인하다', '식별하다'],
  },
  {
    word: 'indicate',
    meanings: ['나타내다', '가리키다'],
  },
  {
    word: 'interpret',
    meanings: ['해석하다', '통역하다'],
  },
  {
    word: 'maintain',
    meanings: ['유지하다', '지속하다'],
  },
  {
    word: 'obtain',
    meanings: ['얻다', '획득하다'],
  },
  {
    word: 'participate',
    meanings: ['참여하다', '참가하다'],
  },
  {
    word: 'require',
    meanings: ['요구하다', '필요로 하다'],
  },
  {
    word: 'accept',
    meanings: ['받아들이다', '수락하다'],
  },
  {
    word: 'allow',
    meanings: ['허락하다', '허용하다'],
  },
  {
    word: 'apply',
    meanings: ['지원하다', '적용하다'],
  },
  {
    word: 'arrange',
    meanings: ['정리하다', '준비하다'],
  },
  {
    word: 'attend',
    meanings: ['참석하다', '출석하다'],
  },
  {
    word: 'avoid',
    meanings: ['피하다', '회피하다'],
  },
  {
    word: 'complete',
    meanings: ['완성하다', '완료하다'],
  },
  {
    word: 'confirm',
    meanings: ['확인하다', '확정하다'],
  },
  {
    word: 'connect',
    meanings: ['연결하다', '접속하다'],
  },
  {
    word: 'contain',
    meanings: ['포함하다', '함유하다'],
  },
  {
    word: 'continue',
    meanings: ['계속하다', '지속하다'],
  },
  {
    word: 'contribute',
    meanings: ['기여하다', '공헌하다'],
  },
  {
    word: 'create',
    meanings: ['창조하다', '만들다'],
  },
  {
    word: 'describe',
    meanings: ['묘사하다', '설명하다'],
  },
  {
    word: 'discuss',
    meanings: ['논의하다', '토론하다'],
  },
  {
    word: 'encourage',
    meanings: ['격려하다', '장려하다'],
  },
  {
    word: 'explain',
    meanings: ['설명하다', '해명하다'],
  },
  {
    word: 'express',
    meanings: ['표현하다', '나타내다'],
  },
  {
    word: 'increase',
    meanings: ['증가하다', '늘리다'],
  },
  {
    word: 'influence',
    meanings: ['영향을 미치다', '영향'],
  },
];

const wrongNoteData: { [date: string]: string[] } = {
  '2025.05.29': ['challenge'],
  '2025.05.01': [
    'develop', 'improve', 'achieve', 'explore', 'analyze', 'assume', 'benefit', 'compare', 'consider', 'define',
    'demonstrate', 'determine', 'establish', 'identify', 'indicate', 'interpret', 'maintain', 'obtain', 'participate', 'require',
  ],
  '2025.04.27': [
    'accept', 'allow', 'apply', 'arrange', 'attend', 'avoid', 'complete', 'confirm', 'connect', 'contain',
    'continue', 'contribute', 'create', 'describe', 'discuss', 'encourage', 'explain', 'express', 'increase', 'influence',
  ],
};

const PAGE_SIZE = 7;

const WrongNoteDetailPage = () => {
  const navigate = useNavigate();
  const { date } = useParams();
  const [page, setPage] = useState(1);
  const [modalWord, setModalWord] = useState<any | null>(null);

  const wordList = date && wrongNoteData[date] ? wrongNoteData[date].map(wordName => words.find(w => w.word === wordName)).filter(Boolean) : [];
  const totalPages = Math.ceil(wordList.length / PAGE_SIZE);
  const pagedWords = wordList.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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
      {/* 날짜 */}
      <div className="text-lg font-semibold text-[#393e74] mb-4">{date}</div>
      {/* 오답 단어 리스트 */}
      <div className="flex flex-col gap-4 mb-8">
        {pagedWords.map((item: any, idx: number) => (
          <button
            key={idx}
            className="w-full border border-gray-300 rounded-xl py-4 text-lg font-semibold text-black bg-white text-left px-4"
            onClick={() => setModalWord(item)}
          >
            {item.word}
          </button>
        ))}
      </div>
      {/* 페이지네이션 */}
      <div className="flex justify-center items-center gap-2 mb-4">
        <button
          className={`w-8 h-8 rounded border ${page === 1 ? 'bg-gray-200 text-gray-400' : 'bg-white text-[#393e74] border-gray-300'}`}
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >&lt;</button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p: number) => (
          <button
            key={p}
            className={`w-8 h-8 rounded border ${page === p ? 'bg-[#393e74] text-white border-[#393e74]' : 'bg-white text-[#393e74] border-gray-300'}`}
            onClick={() => setPage(p)}
          >{p}</button>
        ))}
        <button
          className={`w-8 h-8 rounded border ${page === totalPages ? 'bg-gray-200 text-gray-400' : 'bg-white text-[#393e74] border-gray-300'}`}
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >&gt;</button>
      </div>
      {/* 단어 상세 모달 */}
      {modalWord && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl flex flex-col items-center justify-center p-8 min-w-[280px] min-h-[220px] shadow-xl relative">
            <button className="absolute top-4 left-4 text-2xl text-gray-400" onClick={() => setModalWord(null)}>&times;</button>
            <div className="text-2xl font-bold text-[#393e74] mb-6">{modalWord.word}</div>
            <ol className="text-lg text-black text-left mb-6 w-full pl-4">
              {modalWord.meanings.map((m: string, i: number) => (
                <li key={i} className="mb-2 list-decimal">{m}</li>
              ))}
            </ol>
            <button
              className="w-full bg-[#393e74] text-white text-lg font-bold py-2 rounded-md mt-2"
              onClick={() => setModalWord(null)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WrongNoteDetailPage; 