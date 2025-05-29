import React, { useState } from 'react';

const AddWordModal = ({ open, onClose, onSubmit }) => {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState(['', '', '']);
  const [wordError, setWordError] = useState('');
  const [meaningsError, setMeaningsError] = useState('');

  if (!open) return null;

  const handleWordChange = (e) => {
    setWord(e.target.value);
    setWordError('');
  };

  const handleMeaningChange = (idx, value) => {
    const newMeanings = [...meanings];
    newMeanings[idx] = value;
    setMeanings(newMeanings);
    setMeaningsError('');
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
    if (validate()) {
      onSubmit({ word, meanings: meanings.filter((m) => m.trim()) });
      setWord('');
      setMeanings(['', '', '']);
      setWordError('');
      setMeaningsError('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white rounded-xl w-full max-w-[350px] p-6 relative shadow-xl animate-fadeIn">
        <button className="absolute left-4 top-4 text-2xl text-gray-400 hover:text-gray-600" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-bold text-center mb-6">단어 추가</h2>
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
          <button type="submit" className="w-full bg-indigo-800 text-white rounded py-3 font-bold text-lg hover:bg-indigo-900">추가</button>
        </form>
      </div>
    </div>
  );
};

export default AddWordModal; 