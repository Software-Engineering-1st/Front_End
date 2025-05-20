import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FiEyeOff } from 'react-icons/fi';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-[#2f357d] mb-10 tracking-tight">DANDAN</h1>
      <form className="w-full flex flex-col gap-6">
        <div>
          <input
            type="text"
            placeholder="아이디"
            className="w-full border-b border-gray-300 py-3 px-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2f357d] bg-transparent"
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호"
            className="w-full border-b border-gray-300 py-3 px-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2f357d] bg-transparent pr-10"
          />
          <FiEyeOff
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#2f357d] text-white py-3 rounded-md font-semibold text-lg mt-4 hover:bg-[#23285e] transition"
          onClick={() => {
            navigate('/main');
          }}
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginForm;