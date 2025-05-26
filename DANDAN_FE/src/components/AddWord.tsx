import React, { useState } from "react";
import Word from "../data/Word.json" assert { type: "json" };
import "../css/modal.css";

interface AddWordProps {
  setIsAddOpen: (open: boolean) => void;
  onAddWord?: (word: { eng: string; kor: string[] }) => void;
}

const AddWord: React.FC<AddWordProps> = (props) => {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState(["", "", ""]);
  const [warning, setWarning] = useState("");
  const [warning2, setWarning2] = useState("");

  const handleMeaningChange = (idx: number, value: string) => {
    const newMeanings = [...meanings];
    newMeanings[idx] = value;
    setMeanings(newMeanings);
  };

  const handleSubmit = () => {
    setWarning("");
    setWarning2("");
    // 영문만 입력 체크
    if (!/^[a-zA-Z]+$/.test(word)) {
      setWarning("영문만 입력해 주세요");
      return;
    }
    // 뜻 한 개 이상 입력 체크
    if (meanings.filter(m => m.trim() !== "").length === 0) {
      setWarning2("뜻을 한개 이상 적어주세요");
      return;
    }
    // 정상 추가
    const newWord = {
      eng: word,
      kor: meanings.filter(m => m.trim() !== "")
    };
    if (props.onAddWord) props.onAddWord(newWord);
    props.setIsAddOpen(false);
  };

  return (
    <div className="addword-container">
      <button className="addword-close-btn" onClick={() => props.setIsAddOpen(false)}>&times;</button>
      <h2 className="addword-title">단어 추가</h2>
      <div className="gap">
        <div className="addword-label">단어</div>
        <input
          className="addword-input"
          type="text"
          placeholder="영문만 입력해주세요."
          value={word}
          onChange={e => setWord(e.target.value)}
        />
        {warning && <div style={{ color: 'red', fontSize: '13px', marginTop: '4px' }}>{warning}</div>}
      </div>
      <div className="gap">
        <div className="addword-label" style={{ marginTop: "24px" }}>뜻</div>
        {meanings.map((meaning, idx) => (
          <Wordbox key={idx} meaning={meaning} idx={idx} handleMeaningChange={handleMeaningChange} />
        ))}
        {warning2 && <div style={{ color: 'red', fontSize: '13px', marginTop: '4px' }}>{warning2}</div>}
      </div>
      <button className="addword-submit-btn" onClick={handleSubmit}>추가</button>
    </div>
  );
};

export default AddWord;

const Wordbox = (props: {meaning: string, idx: number, handleMeaningChange: (idx: number, value: string) => void}) => {
  const {meaning, idx, handleMeaningChange} = props;
  return (
    <div>
            <input
            key={idx}
            className="addword-input"
            type="text"
            placeholder={`뜻 ${idx + 1}`}
            value={meaning}
            onChange={e => handleMeaningChange(idx, e.target.value)}
            style={{ marginBottom: idx < 2 ? "8px" : "24px" }}
          />
    </div>
  )

}