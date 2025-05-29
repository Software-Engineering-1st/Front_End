import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WordList from '../components/WordList';
import NavBar from '../components/NavBar';
import AddWordModal from '../components/AddWordModal';

const mockFetchWords = async () => {
  // 실제 API 연결 전 임시 목업 데이터
  return [
    { id: 1, word: 'occupy', meanings: ['차지하다'] },
    { id: 2, word: 'amend', meanings: ['수정하다'] },
    { id: 3, word: 'like', meanings: ['좋아하다'] },
    { id: 4, word: 'take', meanings: ['가져가다'] },
    { id: 5, word: 'cute', meanings: ['귀여운'] },
    { id: 6, word: 'love', meanings: ['사랑'] },
    { id: 7, word: 'develop', meanings: ['개발하다', '성장하다'] },
    { id: 8, word: 'improve', meanings: ['향상시키다', '개선하다'] },
    { id: 9, word: 'achieve', meanings: ['달성하다', '성취하다'] },
    { id: 10, word: 'explore', meanings: ['탐험하다', '탐구하다'] },
    { id: 11, word: 'analyze', meanings: ['분석하다'] },
    { id: 12, word: 'assume', meanings: ['가정하다', '추정하다'] },
    { id: 13, word: 'benefit', meanings: ['이익', '혜택'] },
    { id: 14, word: 'compare', meanings: ['비교하다'] },
    { id: 15, word: 'consider', meanings: ['고려하다', '숙고하다'] },
    { id: 16, word: 'define', meanings: ['정의하다', '규정하다'] },
    { id: 17, word: 'demonstrate', meanings: ['증명하다', '보여주다'] },
    { id: 18, word: 'determine', meanings: ['결정하다', '결심하다'] },
    { id: 19, word: 'establish', meanings: ['설립하다', '확립하다'] },
    { id: 20, word: 'identify', meanings: ['확인하다', '식별하다'] },
    { id: 21, word: 'indicate', meanings: ['나타내다', '가리키다'] },
    { id: 22, word: 'interpret', meanings: ['해석하다', '통역하다'] },
    { id: 23, word: 'maintain', meanings: ['유지하다', '지속하다'] },
    { id: 24, word: 'obtain', meanings: ['얻다', '획득하다'] },
    { id: 25, word: 'participate', meanings: ['참여하다', '참가하다'] },
    { id: 26, word: 'require', meanings: ['요구하다', '필요로 하다'] },
    { id: 27, word: 'accept', meanings: ['받아들이다', '수락하다'] },
    { id: 28, word: 'allow', meanings: ['허락하다', '허용하다'] },
    { id: 29, word: 'apply', meanings: ['지원하다', '적용하다'] },
    { id: 30, word: 'arrange', meanings: ['정리하다', '준비하다'] },
    { id: 31, word: 'attend', meanings: ['참석하다', '출석하다'] },
    { id: 32, word: 'avoid', meanings: ['피하다', '회피하다'] },
    { id: 33, word: 'complete', meanings: ['완성하다', '완료하다'] },
    { id: 34, word: 'confirm', meanings: ['확인하다', '확정하다'] },
    { id: 35, word: 'connect', meanings: ['연결하다', '접속하다'] },
    { id: 36, word: 'contain', meanings: ['포함하다', '함유하다'] },
    { id: 37, word: 'continue', meanings: ['계속하다', '지속하다'] },
    { id: 38, word: 'contribute', meanings: ['기여하다', '공헌하다'] },
    { id: 39, word: 'create', meanings: ['창조하다', '만들다'] },
    { id: 40, word: 'describe', meanings: ['묘사하다', '설명하다'] },
    { id: 41, word: 'discuss', meanings: ['논의하다', '토론하다'] },
    { id: 42, word: 'encourage', meanings: ['격려하다', '장려하다'] },
    { id: 43, word: 'explain', meanings: ['설명하다', '해명하다'] },
    { id: 44, word: 'express', meanings: ['표현하다', '나타내다'] },
    { id: 45, word: 'increase', meanings: ['증가하다', '늘리다'] },
    { id: 46, word: 'influence', meanings: ['영향을 미치다', '영향'] },
    { id: 47, word: 'challenge', meanings: ['도전', '도전하다', '이의를 제기하다'] },
    { id: 48, word: 'succeed', meanings: ['성공하다'] },
    { id: 49, word: 'fail', meanings: ['실패하다'] },
    { id: 50, word: 'prepare', meanings: ['준비하다'] },
  ];
};

const AdminHome = () => {
  const adminName = '내가바로관리자';
  const [modalOpen, setModalOpen] = useState(false);
  const [words, setWords] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    mockFetchWords().then(setWords);
  }, []);

  const handleAddWord = (data) => {
    // 실제로는 API 호출 후 처리
    setWords(prev => [
      { id: Date.now(), word: data.word, meanings: data.meanings },
      ...prev,
    ]);
    setModalOpen(false);
  };

  const handleEditWord = (id, data) => {
    setWords(prev => prev.map(w => w.id === id ? { ...w, word: data.word, meanings: data.meanings } : w));
  };

  const handleDeleteWord = (id) => {
    setWords(prev => prev.filter(w => w.id !== id));
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-[393px] min-h-screen flex flex-col justify-between bg-white shadow-lg">
        <NavBar />
        <main className="flex-1 flex flex-col justify-between px-6 pb-6">
          <div>
            <div className="bg-indigo-50 rounded-xl p-4 mt-4 mb-6 relative">
              <div className="text-gray-700">환영합니다</div>
              <div className="text-indigo-600 font-bold text-xl">{adminName}님</div>
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-sm" onClick={() => navigate('/')}>로그아웃</button>
            </div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-bold m-0">단어 리스트</h2>
              <button className="bg-indigo-400 text-white rounded px-4 py-1 font-semibold text-sm hover:bg-indigo-500" onClick={() => setModalOpen(true)}>단어 추가</button>
            </div>
            <WordList words={words} onEditWord={handleEditWord} onDeleteWord={handleDeleteWord} />
          </div>
        </main>
        <AddWordModal open={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleAddWord} />
      </div>
    </div>
  );
};

export default AdminHome; 