import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Signup.css'
import ghost from '../assets/ghost.png'



function Signup4(){
    const navigate = useNavigate();
    
    return (
      <div className="form-area">
        <div className="center-box" style={{ 
          display: 'flex', 
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          gap: '20px'
        }}>
          <img src={ghost} style={{width: '200px', height: '200px'}}/>
          <div style={{textAlign: 'center'}}>
            <p style={{
              fontSize: '16px',
              marginBottom: '8px'
            }}>가입이 완료되었습니다.</p>
            <p style={{
              fontSize: '16px'
            }}>이제 단어를 외우러 가볼까요?</p>
          </div>
          <button 
            className="next-button active"
            style={{
              width: '100%',
              marginTop: '20px'
            }}
            onClick={() => {
              navigate('/login');
            }}
          >
            DANDAN 로그인
          </button>
        </div>
      </div>
    )
  }

  export default Signup4;