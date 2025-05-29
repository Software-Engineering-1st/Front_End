import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup1 = () => {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [id, setId] = useState('');
    const [nicknameAlert, setNicknameAlert] = useState('');
    const [idAlert, setIdAlert] = useState('');
    const [isValid, setIsValid] = useState(false);

    // 닉네임 조건 함수
    const validateNickname = (value: string) => {
      setNickname(value);
      if (value.length >= 4 && value.length <= 6) {
        setNicknameAlert('사용 가능한 닉네임입니다');
      } else {
        setNicknameAlert('닉네임은 4~6자여야 합니다');
      }
      // 입력값이 바뀔 때마다 isValid 업데이트
      const idRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{7,15}$/;
      setIsValid(value.length >= 4 && value.length <= 6 && idRegex.test(id));
    };
    // 아이디 조건 함수
    const validateId = (value: string) => {
      setId(value);
      const idRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{7,15}$/;
      if (idRegex.test(value)) {
        setIdAlert('사용가능한 아이디입니다');
      } else {
        setIdAlert('아이디는 영문자와 숫자를 모두 포함한 7~15자의 문자열이어야 합니다.');
      }
      // 입력값이 바뀔 때마다 isValid 업데이트
      setIsValid(nickname.length >= 4 && nickname.length <= 6 && idRegex.test(value));
    };
    // 중복 확인 로직 (API 없이 alert만)
    const checkId = () => {
      alert('아이디 중복 확인!');
    };

    return (
      <div className="flex flex-col flex-1 pt-2 pb-2">
        <div className="mb-8">
          <p className="text-left text-lg font-bold text-black leading-relaxed mb-2">사용하실 닉네임과 ID를<br/>입력해 주세요.</p>
        </div>
        <div className="mb-6">
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={(e) => validateNickname(e.target.value)}
            className="w-full border-b border-gray-300 py-3 px-0 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2f357d] bg-transparent text-base"
          />
          {nicknameAlert && (
            <p className={`mt-1 text-sm ${nickname.length >= 4 && nickname.length <= 6 ? 'text-green-600' : 'text-red-500'}`}>{nicknameAlert}</p>
          )}
        </div>
        <div className="mb-10 relative flex items-center">
          <input
            type="text"
            placeholder="아이디"
            value={id}
            onChange={(e) => validateId(e.target.value)}
            className="w-full border-b border-gray-300 py-3 px-0 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2f357d] bg-transparent text-base pr-24"
          />
          <button
            type="button"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-xs border border-[#2f357d] text-[#2f357d] rounded px-3 py-1 h-8 bg-white"
            onClick={checkId}
          >
            중복 확인
          </button>
        </div>
        <button
          className={`w-full py-3 rounded-md font-semibold text-base mt-2 transition ${isValid ? 'bg-[#2f357d] text-white' : 'bg-gray-300 text-gray-400 cursor-not-allowed'}`}
          disabled={!isValid}
          onClick={() => { navigate('./2') }}
        >
          다음
        </button>
      </div>
    );
}

export default Signup1;
