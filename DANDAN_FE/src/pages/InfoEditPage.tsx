import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const InfoEditPage = () => {
  const navigate = useNavigate();
  const { nickname: prevName, setNickname } = useUser();
  const [name, setName] = useState(prevName);
  const [nameError, setNameError] = useState('');
  const [password, setPassword] = useState('');
  const [pwError, setPwError] = useState('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    if (value.length > 6) {
      setNameError('닉네임은 6자 이하여야 합니다.');
    } else {
      setNameError('');
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length > 0 && value.length < 6) {
      setPwError('비밀번호는 6자 이상이어야 합니다.');
    } else {
      setPwError('');
    }
  };

  // 닉네임이 변경되었거나 비밀번호가 6자 이상 입력된 경우만 활성화
  const isNameChanged = name !== prevName && !nameError && name.length > 0;
  const isPwValid = password.length >= 6 && !pwError;
  const canSubmit = isNameChanged || isPwValid;

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
      <form className="flex flex-col items-center w-full mt-10" onSubmit={e => { e.preventDefault(); if (canSubmit) { setNickname(name); navigate('/mypage'); } }}>
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
        <div className="w-full mb-6">
          <label className="block text-black text-base mb-2" htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            value={password}
            onChange={handlePasswordChange}
            className={`w-full border-b text-lg py-2 px-1 outline-none ${pwError ? 'border-red-400' : 'border-gray-300'} focus:border-[#393e74] bg-transparent`}
            maxLength={20}
          />
          {pwError && <div className="text-red-500 text-sm mt-1">{pwError}</div>}
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