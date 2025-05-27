import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';

const InfoEditPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const prevName = location.state?.name ?? '';
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [nameError, setNameError] = useState('');

  // 닉네임 유효성 검사
  const validateName = (value: string) => {
    if (value.length === 0) return '';
    if (value.length < 4) return '닉네임은 4자 이상이어야 해요.';
    if (value.length > 6) return '닉네임은 6자 이하여야 해요.';
    return '';
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError(validateName(e.target.value));
  };

  const isNameChanged = name.length > 0 && name !== prevName && !nameError;
  const isPwChanged = password.length > 0;
  const canSubmit = (isNameChanged || isPwChanged) && !nameError;

  return (
    <div className="flex flex-col min-h-screen max-w-[393px] mx-auto bg-white px-6 py-6 items-center">
      {/* 네브바 */}
      <div className="w-full flex items-center mb-8">
        <button onClick={() => navigate(-1)}>
          <span className="text-2xl">{'<'}</span>
        </button>
        <div className="flex-1 text-center text-[24px] font-extrabold text-[#393e74]">정보 수정</div>
        <div style={{ width: 32 }}></div>
      </div>
      <form className="flex flex-col items-center w-full mt-10" onSubmit={e => { e.preventDefault(); if (canSubmit) navigate('/mypage', { state: { name: name || prevName } }); }}>
        <div className="w-full mb-6">
          <label className="block text-black text-base mb-2" htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            type="text"
            placeholder={prevName}
            value={name}
            onChange={handleNameChange}
            className={`w-full border-b text-lg py-2 px-1 outline-none ${nameError ? 'border-red-400' : 'border-gray-300'} focus:border-[#393e74] bg-transparent`}
            maxLength={6}
          />
          {nameError && <div className="text-red-500 text-sm mt-1">{nameError}</div>}
        </div>
        <div className="w-full mb-8 relative">
          <label className="block text-black text-base mb-2" htmlFor="password">비밀번호</label>
          <input
            id="password"
            type={showPw ? 'text' : 'password'}
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="w-full border-b text-lg py-2 px-1 outline-none border-gray-300 focus:border-[#393e74] bg-transparent pr-10"
          />
          <button type="button" className="absolute right-2 top-9 text-xl text-gray-400" onClick={() => setShowPw(v => !v)}>
            {showPw ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
        <button
          type="submit"
          className={`w-full py-3 rounded-md text-lg font-bold mt-4 ${canSubmit ? 'bg-[#393e74] text-white' : 'bg-gray-300 text-white'}`}
          disabled={!canSubmit}
        >
          수정
        </button>
      </form>
    </div>
  );
};

export default InfoEditPage; 