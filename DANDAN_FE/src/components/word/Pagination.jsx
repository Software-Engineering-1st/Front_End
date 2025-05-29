import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange, maxVisible = 6 }) => {
  const getPagination = () => {
    const end = Math.min(totalPages, maxVisible);
    return Array.from({ length: end }, (_, i) => i + 1);
  };
  const pages = getPagination();

  return (
    <div className="flex justify-center mt-4 space-x-1">
      <button
        className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-base disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {'<'}
      </button>
      {pages.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`w-8 h-8 rounded border text-base font-semibold mx-0.5 ${currentPage === num ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-white text-gray-700 border-gray-300 hover:bg-indigo-50'}`}
        >
          {num}
        </button>
      ))}
      <button
        className="rounded border border-gray-300 bg-gray-100 px-2 py-1 text-base disabled:opacity-50"
        disabled={currentPage === totalPages || currentPage >= maxVisible}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination; 