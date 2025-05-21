import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import eye from '../assets/eye.png';
import { FiEyeOff } from 'react-icons/fi';

const Signup2 = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(true);
    const navigate = useNavigate();
    const [pwcounter, setPwcounter] = useState(false);
    const [confirmPwcounter, setConfirmPwcounter] = useState(false);

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        if (confirmPassword) {
            setPasswordMatch(newPassword === confirmPassword);
        }
    };

    const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        setPasswordMatch(password === newConfirmPassword);
    };

    return (
        <div className="flex flex-col flex-1 pt-8 pb-4">
            <div className="mb-8">
                <p className="text-left text-lg font-bold text-black leading-relaxed mb-2">사용하실 비밀번호를<br/>입력해 주세요.</p>
            </div>
            <div className="mb-6 relative flex items-center">
                <input
                    type={pwcounter ? 'text' : 'password'}
                    placeholder="비밀번호"
                    onChange={handlePasswordChange}
                    value={password}
                    className="w-full border-b border-gray-300 py-3 px-0 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2f357d] bg-transparent text-base pr-10"
                />
                          <FiEyeOff className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" onClick={() => setPwcounter(!pwcounter)}/>
            </div>
            <div className="mb-10 relative flex items-center">
                <input
                    type={confirmPwcounter ? 'text' : 'password'}
                    placeholder="비밀번호 확인"
                    onChange={handleConfirmPasswordChange}
                    value={confirmPassword}
                    className="w-full border-b border-gray-300 py-3 px-0 text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#2f357d] bg-transparent text-base pr-10"
                />
                <FiEyeOff className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer" onClick={() => setConfirmPwcounter(!confirmPwcounter)}/>
            </div>
            {!passwordMatch && confirmPassword && <p className="mt-1 text-sm text-red-500 mb-4">비밀번호가 일치하지 않습니다</p>}
            <button
                className={`w-full py-3 rounded-md font-semibold text-base mt-2 transition ${(passwordMatch && password && confirmPassword) ? 'bg-[#2f357d] text-white' : 'bg-gray-300 text-gray-400 cursor-not-allowed'}`}
                onClick={() => navigate('../3')}
                disabled={!passwordMatch || !password || !confirmPassword}
            >
                다음
            </button>
        </div>
    );
};

export default Signup2;