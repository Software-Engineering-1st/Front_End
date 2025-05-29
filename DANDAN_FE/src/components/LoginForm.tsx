import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { FiEyeOff } from 'react-icons/fi';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userId === 'admin' && password === 'ad1234') {
      navigate('/admin');
    } else {
      navigate('/main');
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-[#2f357d] mb-10 tracking-tight">DANDAN</h1>
      <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="아이디"
            autoComplete="username"
            value={userId}
            onChange={e => setUserId(e.target.value)}
            className="w-full border-b border-gray-300 py-3 px-1 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2f357d] bg-transparent"
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="비밀번호"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
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
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginForm;