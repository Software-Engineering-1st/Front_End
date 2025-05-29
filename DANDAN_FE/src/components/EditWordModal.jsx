import React, { useState, useEffect } from 'react';

const EditWordModal = ({ open, onClose, onSubmit, initialWord, initialMeanings }) => {
  const [word, setWord] = useState(initialWord || '');
  const [meanings, setMeanings] = useState(initialMeanings || ['', '', '']);
  const [wordError, setWordError] = useState('');
  const [meaningsError, setMeaningsError] = useState('');
  const [noChangeError, setNoChangeError] = useState('');

  useEffect(() => {
    setWord(initialWord || '');
    setMeanings(initialMeanings && initialMeanings.length ? [...initialMeanings, '', '', ''].slice(0, 3) : ['', '', '']);
    setWordError('');
    setMeaningsError('');
    setNoChangeError('');
  }, [open, initialWord, initialMeanings]);

  if (!open) return null;

  const handleWordChange = (e) => {
    setWord(e.target.value);
    setWordError('');
    setNoChangeError('');
  };

  const handleMeaningChange = (idx, value) => {
    const newMeanings = [...meanings];
    newMeanings[idx] = value;
    setMeanings(newMeanings);
    setMeaningsError('');
    setNoChangeError('');
  };

  const validate = () => {
    let valid = true;
    if (!/^[a-zA-Z]+$/.test(word)) {
      setWordError('영어만 입력해 주세요.');
      valid = false;
    }
    if (meanings.filter((m) => m.trim()).length < 1) {
      setMeaningsError('뜻을 한 개 이상 적어주세요.');
      valid = false;
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // 변경사항 체크
    const trimmedMeanings = meanings.map(m => m.trim());
    const initialTrimmed = (initialMeanings || []).map(m => m.trim());
    if (
      word === initialWord &&
      JSON.stringify(trimmedMeanings) === JSON.stringify([...initialTrimmed, '', '', ''].slice(0, 3))
    ) {
      setNoChangeError('단어와 뜻에 변경 사항이 없습니다. 다시 확인해 주세요.');
      return;
    }
    onSubmit({ word, meanings: meanings.filter((m) => m.trim()) });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-xl w-full max-w-[350px] p-6 relative shadow-xl animate-fadeIn">
        <button className="absolute left-4 top-4 text-2xl text-gray-400 hover:text-gray-600" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-bold text-center mb-6">단어 수정</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block font-bold text-indigo-700 mb-1">단어</label>
            <input
              className={`w-full border rounded px-3 py-2 text-base outline-none ${wordError ? 'border-red-400' : 'border-gray-300'}`}
              placeholder="영문만 입력해주세요."
              value={word}
              onChange={handleWordChange}
              autoFocus
            />
            {wordError && <div className="text-xs text-red-500 mt-1">{wordError}</div>}
          </div>
          <div className="mb-6">
            <label className="block font-bold text-indigo-700 mb-1">뜻</label>
            {meanings.map((m, i) => (
              <input
                key={i}
                className="w-full border border-gray-300 rounded px-3 py-2 text-base mb-2"
                placeholder={`뜻 ${i + 1}`}
                value={m}
                onChange={e => handleMeaningChange(i, e.target.value)}
              />
            ))}
            {meaningsError && <div className="text-xs text-red-500 mt-1">{meaningsError}</div>}
          </div>
          {noChangeError && <div className="text-xs text-red-500 mb-2 text-center">{noChangeError}</div>}
          <button type="submit" className="w-full bg-indigo-800 text-white rounded py-3 font-bold text-lg hover:bg-indigo-900">수정</button>
        </form>
      </div>
    </div>
  );
};

export default EditWordModal; 