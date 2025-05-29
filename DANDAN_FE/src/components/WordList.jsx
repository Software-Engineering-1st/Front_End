import React, { useState } from 'react';
import EditWordModal from './EditWordModal';
import WordItem from './word/WordItem';
import Pagination from './word/Pagination';

const MAX_VISIBLE = 6;

function getPagination(total) {
  const end = Math.min(total, MAX_VISIBLE);
  return Array.from({ length: end }, (_, i) => i + 1);
}

const WordList = ({ words = [], onEditWord, onDeleteWord }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [editTarget, setEditTarget] = useState(null);
  const totalPages = Math.ceil(words.length / 6) || 1;

  const pagination = getPagination(totalPages);
  const pagedWords = words.slice((currentPage - 1) * 6, currentPage * 6);

  const handleEditClick = (word) => {
    setEditTarget(word);
    setEditModalOpen(true);
  };

  const handleEditSubmit = (data) => {
    if (onEditWord && editTarget) {
      onEditWord(editTarget.id, data);
    }
    setEditModalOpen(false);
    setEditTarget(null);
  };

  return (
    <div>
      {pagedWords.map((item) => (
        <WordItem
          key={item.id}
          word={item}
          onEdit={() => handleEditClick(item)}
          onDelete={() => onDeleteWord && onDeleteWord(item.id)}
        />
      ))}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        maxVisible={MAX_VISIBLE}
      />
      <EditWordModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSubmit={handleEditSubmit}
        initialWord={editTarget?.word}
        initialMeanings={editTarget?.meanings}
      />
    </div>
  );
};

export default WordList; 