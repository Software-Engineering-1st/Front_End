import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface WrongWord {
  word: string;
  meanings: string[];
}

const dummyWrongWords: WrongWord[] = [
  {
    word: 'innovate',
    meanings: ['혁신하다', '도입하다'],
  },
  {
    word: 'develop',
    meanings: ['성장[발달]하다[시키다].', '개발하다', '(...에) 영향을 주기 시작하다.'],
  },
  {
    word: 'pneumoconiosis',
    meanings: ['진폐증'],
  },
  {
    word: 'amend',
    meanings: ['수정하다', '개정하다'],
  },
  {
    word: 'occupy',
    meanings: ['차지하다', '점령하다'],
  },
  {
    word: 'financial',
    meanings: ['재정의', '금융의'],
  },
  {
    word: 'help',
    meanings: ['돕다', '도움'],
  },
  {
    word: 'object to',
    meanings: ['~에 반대하다'],
  },
  {
    word: 'exhibition',
    meanings: ['전시', '전시회'],
  },
];

const PAGE_SIZE = 7;

const WrongNoteDetailPage = () => {
  const navigate = useNavigate();
  const { date } = useParams();
  const [page, setPage] = useState(1);
  const [modalWord, setModalWord] = useState<WrongWord | null>(null);

  const totalPages = Math.ceil(dummyWrongWords.length / PAGE_SIZE);
  const pagedWords = dummyWrongWords.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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
        {pagedWords.map((item: WrongWord, idx: number) => (
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