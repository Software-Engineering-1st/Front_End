import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/Signup.css';

const Signup1 = () => {

    const navigate = useNavigate();
    const [nickname, setNickname] = useState('');
    const [id, setId] = useState('');
    const [nicknameAlert, setNicknameAlert] = useState('');
    const [idAlert, setIdAlert] = useState('');
    const [isValid, setIsValid] = useState(false);
     //닉네임조건 함수
  const validateNickname = (value: string) => {
    setNickname(value);
    if (value.length >= 4 && value.length <= 6) {
      setNicknameAlert('사용 가능한 닉네임입니다');
      checkValidation(value, id);
    } else {
      setNicknameAlert('닉네임은 4~6자여야 합니다');
      setIsValid(false);
    }
  };
  //Id조건 함수
  const validateId = (value: string) => {
    setId(value);
    // 영문자와 숫자가 모두 포함되어 있으며, 길이는 7~15자
    const idRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{7,15}$/;
  
    if (idRegex.test(value)) {
      setIdAlert('사용가능한 아이디입니다');
      checkValidation(nickname, value);
    } else {
      setIdAlert('아이디는 영문자와 숫자를 모두 포함한 7~15자의 문자열이어야 합니다.');
      setIsValid(false);
    }
  };
//sign1버튼 함수
  const checkValidation = (nick: string, userId: string) => {
    if (nick.length >= 4 && nick.length <= 6 && /^[A-Za-z0-9]{7,15}$/.test(userId)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
      // 중복 확인 로직 추가
  const checkId = () => {
    alert("아이디 중복 확인");
  };

  return (      
    <div className="form-area">
    <p className="guide-text">사용하실 닉네임과 ID를<br />입력해 주세요.</p>
    <div className="input-group">
      <input 
        type="text" 
        placeholder="닉네임" 
        value={nickname}
        onChange={(e) => validateNickname(e.target.value)}
      />
      {nicknameAlert && (
        <p className={nickname.length >= 4 && nickname.length <= 6 ? "alert-success" : "alert-error"}>
          {nicknameAlert}
        </p>
      )}
    </div>
    <div className="input-group id-group">
      <input 
        type="text" 
        placeholder="아이디" 
        value={id}
        onChange={(e) => validateId(e.target.value)}
      />
      {idAlert && (
        <p className={/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z0-9]{7,15}$/.test(id) ? "alert-success" : "alert-error"}>
          {idAlert}
        </p>
      )}
      <button className="check-button" onClick={checkId}>중복 확인</button>
    </div>
    <button 
      className={`next-button ${isValid ? 'active' : ''}`} 
      disabled={!isValid}
      onClick={()=>{navigate('./2')}}
    >
      다음
    </button>
  </div>)
}

export default Signup1;
