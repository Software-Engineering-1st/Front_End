import React, { useState, ChangeEvent } from 'react';
import '../css/Signup.css';
import { useNavigate } from 'react-router-dom';
import eye from '../assets/eye.png';

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
        <div className="form-area">
            <p className="guide-text">사용하실 비밀번호를<br />입력해 주세요.</p>
            <div className="input-group id-group">
                <input 
                    type={pwcounter ? "text" : "password"} 
                    placeholder="비밀번호" 
                    onChange={handlePasswordChange}
                    value={password}
                />
                <img className="eyesize" src={eye} alt="비밀번호 보기" onClick={() => setPwcounter(!pwcounter)}/>
            </div>
            <div className="input-group id-group">
                <input 
                    type={confirmPwcounter ? "text" : "password"}
                    placeholder="비밀번호 확인"
                    onChange={handleConfirmPasswordChange}
                    value={confirmPassword}
                />
                
                {!passwordMatch && confirmPassword && <p className="alert-error">비밀번호가 일치하지 않습니다</p>}
            </div>
            <button 
                className={`next-button ${passwordMatch && password && confirmPassword ? 'active' : ''}`}
                onClick={() => navigate('../3')}
                disabled={!passwordMatch || !password || !confirmPassword}
            >
                다음
            </button>
        </div>
    );
};

export default Signup2;