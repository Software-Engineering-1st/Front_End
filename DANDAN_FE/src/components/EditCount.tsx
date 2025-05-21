import React, { useEffect, useRef, useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Signup.css'

function EditCount() {
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
        <div className="flex flex-col flex-1 px-6 pt-8 pb-4">
            <div className="mb-8">
                <p className="text-left text-lg font-bold text-black leading-relaxed mb-2">목표하는 단어 개수를<br/>입력해 주세요.</p>
            </div>
            <div className="flex items-center mb-10">
                <input
                    ref={inputRef}
                    className="w-20 text-right border-b border-gray-300 py-3 px-0 text-gray-700 text-2xl font-bold focus:outline-none focus:border-[#2f357d] bg-transparent mr-2"
                    value={targetCount}
                    onChange={handleTargetCountChange}
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={2}
                />
                <span className="text-lg text-gray-700">개</span>
            </div>
            <button 
                className={`w-full py-3 rounded-md font-semibold text-base mt-2 transition ${(targetCount && parseInt(targetCount) > 0 && parseInt(targetCount) < 999) ? 'bg-[#2f357d] text-white' : 'bg-gray-300 text-gray-400 cursor-not-allowed'}`}
                disabled={!targetCount || parseInt(targetCount) === 0}
                onClick={() => {
                    console.log('회원가입 완료:', targetCount);
                    navigate('/mypage');
                }}
            >
                완료
            </button>
        </div>
    );
}

export default EditCount;
