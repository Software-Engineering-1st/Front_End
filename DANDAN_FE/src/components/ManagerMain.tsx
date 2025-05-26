import React, { useState } from "react";
import "../css/Manager.css";
import Word from "../data/Word.json" assert { type: "json" };
import AddWord from "./AddWord";
import ModifyWord from "./ModifyWord";
import { useNavigate } from "react-router-dom";

//한페이지에 표시하는 단어 개수
const WORDS_PER_PAGE = 5;
//단어리스트 따까리
interface WordItemProps {
  word: any;
  idx: number;
  setIsModifyOpen: (open: boolean) => void;
  setModifyTarget: (word: any) => void;
}


const ManagerMain = () => {
    const navigate = useNavigate();
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isModifyOpen, setIsModifyOpen] = useState(false);
    const [modifyTarget, setModifyTarget] = useState<any>(null);
    const [words, setWords] = useState(Word);
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(words.length / WORDS_PER_PAGE);
    const pagedWords = words.slice(
        (page - 1) * WORDS_PER_PAGE,
        page * WORDS_PER_PAGE
    );
    const nickname = "내가바로관리자";

return (
  <>
    <div className="manager-container" style={isAddOpen||isModifyOpen ? { pointerEvents: 'none', opacity: 0.5 } : {}}>
      <header className="manager-header" >
        <h1 className="manager-logo">DANDAN</h1>
      </header>
      <section className="manager-welcome-box">
        <div className="welcome-left">
          <div className="welcome-text">환영합니다</div>
          <div className="welcome-nickname">
            <span className="nickname">{nickname}</span>님
          </div>
        </div>
        <button className="logout-btn" onClick={() => navigate("/")}>로그아웃</button>
      </section>
      <main className="manager-main">
        <div className="word-list-header">
          <span className="word-list-title">단어 리스트</span>
          <button className="add-word-btn" onClick={() => setIsAddOpen(true)}>단어 추가</button>
        </div>
        <ul className="word-list">
          {pagedWords.map((word: any, idx: number) => (
            <WordItem
              key={word.eng + idx}
              word={word}
              idx={idx}
              setIsModifyOpen={setIsModifyOpen}
              setModifyTarget={setModifyTarget}
            />
          ))}
        </ul>
        <div className="pagination">
          <button className="page-btn" disabled={page === 1} onClick={() => setPage(page - 1)}>
            &#60;
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`page-btn${page === i + 1 ? " active" : ""}`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button className="page-btn" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
            &#62;
          </button>
        </div>
      </main>
    </div>
    {isAddOpen && <AddWord setIsAddOpen={setIsAddOpen} />}
    {isModifyOpen && (
      <ModifyWord setIsModifyOpen={setIsModifyOpen} word={modifyTarget} />
    )}
    </>
  );
}

export default ManagerMain;

//단어 리스트
const WordItem: React.FC<WordItemProps> = ({ word, idx, setIsModifyOpen, setModifyTarget }) => {
  return (
    <li className="word-item" key={word.eng + idx}>
      <span className="word-text">{word.eng}</span>
      <div className="word-actions">
        <button className="edit-btn" onClick={() => {
          setModifyTarget({
            eng: word.eng,
            kor: [word.mean1 || "", word.mean2 || "", word.mean3 || ""]
          });
          setIsModifyOpen(true);
        }}>수정</button>
        <button className="delete-btn">삭제</button>
      </div>
    </li>
  );
};

