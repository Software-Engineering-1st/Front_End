import React, { useState, useEffect } from "react";
import "../css/modal.css";
import Word from "../data/Word.json" assert { type: "json" };

interface ModifyWordProps {
  setIsModifyOpen: (open: boolean) => void;
  word: { eng: string; kor?: string[] };
}

const ModifyWord: React.FC<ModifyWordProps> = ({ setIsModifyOpen, word }) => {
  const [eng, setEng] = useState(word.eng || "");
  const [mean, setMean] = useState([
    word.kor?.[0] || "",
    word.kor?.[1] || "",
    word.kor?.[2] || ""
  ]);

  useEffect(() => {
    console.log('ModifyWord - word.kor:', word.kor);
  }, [word.kor]);

  return (
    <div className="addword-container">
      <button className="addword-close-btn" onClick={() => setIsModifyOpen(false)}>&times;</button>
      <h2 className="addword-title">단어 수정</h2>
      <div className="gap">
        <div className="addword-label">단어</div>
        <input
          className="modify-input"
          type="text"
          value={eng}
          onChange={e => setEng(e.target.value)}
        />
      </div>
      <div className="gap">
        <div className="addword-label" style={{ marginTop: "24px" }}>뜻</div>
        {[0, 1, 2].map((idx) => (
          <input
            key={idx}
            className="modify-input"
            type="text"
            value={mean[idx] || ""}
            onChange={e => {
              const newMean = [...mean];
              newMean[idx] = e.target.value;
              setMean(newMean);
            }}
            style={{ marginBottom: idx < 2 ? "8px" : "24px" }}
          />
        ))}
      </div>
      <button className="addword-submit-btn">수정</button>
    </div>
  );
};

export default ModifyWord;
