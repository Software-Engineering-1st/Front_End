import React from 'react';

const WordItem = ({ word, onEdit, onDelete }) => {
  return (
    <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 mb-2">
      <span className="flex-1 text-base">{word.word}</span>
      <button
        className="mr-2 border border-indigo-400 text-indigo-500 bg-white rounded px-3 py-1 text-sm hover:bg-indigo-50"
        onClick={onEdit}
      >
        수정
      </button>
      <button
        className="border border-red-400 text-red-500 bg-white rounded px-3 py-1 text-sm hover:bg-red-50"
        onClick={onDelete}
      >
        삭제
      </button>
    </div>
  );
};

export default WordItem; 