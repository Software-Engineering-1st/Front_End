import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

const Edituser = () => {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 비밀번호가 입력되어야 버튼 활성화
  const isButtonActive = password.trim() !== '';

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">

      {/* 입력 폼 */}
      <div className="flex flex-col gap-10 px-8 mt-8">
        <div>
          <label className="block text-gray-500 text-lg mb-2">닉네임</label>
          <div className="flex items-center">
            <p className="flex-1 border-0 border-b border-gray-400 text-gray-700 text-lg focus:outline-none focus:border-black bg-transparent py-2">
                소공1조에이쁠쥐
            </p>
            
          </div>
        </div>
        <div>
          <label className="block text-gray-500 text-lg mb-2">비밀번호</label>
          <div className="flex items-center">
            <input
              type="password"
              className="flex-1 border-0 border-b border-gray-400 text-gray-700 text-lg focus:outline-none focus:border-black bg-transparent py-2"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="비밀번호를 입력하세요"
            />
          </div>
        </div>
      </div>

      {/* 하단 버튼 */}
      <div className="mt-16 px-8">
        <button
          className={`w-full py-4 rounded-lg font-bold text-lg ${isButtonActive ? 'bg-blue-500 text-white' : 'bg-gray-400 text-white'}`}
          disabled={!isButtonActive}
          onClick={() => {
            navigate('/mypage');
          }}
        >
          수정
        </button>
      </div>
    </div>
  );
};

export default Edituser;
