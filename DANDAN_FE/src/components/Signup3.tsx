import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Signup.css'

function Signup3() {
    const [targetCount, setTargetCount] = useState<string>('10');
    const navigate = useNavigate();
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    
//공백없는 숫자만 입력 및 값 저장
    const handleTargetCountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim();
        const numericValue = value.replace(/[^0-9]/g, '');
        setTargetCount(numericValue);
    };
  
    return (
        <div className="form-area">
            <p className="guide-text2">목표하는 단어 개수를<br />입력해 주세요.</p>
            <div className="target-count-area">
                <input 
                    ref={inputRef}
                    className="count-number" 
                    value={targetCount} 
                    onChange={handleTargetCountChange}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    style={{ textAlign: 'right' }}
                    maxLength={2}
                />
                <span className="count-unit">개</span>
            </div>
            <button 
                className={`next-button ${targetCount && parseInt(targetCount) > 0 && parseInt(targetCount) < 999 ? 'active' : ''}`}
                disabled={!targetCount || parseInt(targetCount) === 0}
                onClick={() => {
                    console.log('회원가입 완료:', targetCount);
                    navigate('../4');
                }}
            >
                완료
            </button>
        </div>
    );
}

export default Signup3;

