import React from "react";
import { useNavigate } from "react-router-dom";
import ghost from '../assets/ghost.svg'


function Signup4(){
    const navigate = useNavigate();
    
    return (
      <div className="flex flex-col flex-1 px-6 pt-8 pb-4 items-center justify-center">
        <img src={ghost} className="w-40 h-40 mb-6" alt="가입완료"/>
        <div className="text-center w-full mb-6">
          <p className="text-base font-bold mb-2">가입이 완료되었습니다.</p>
          <p className="text-base">이제 단어를 외우러 가볼까요?</p>
        </div>
        <button 
          className="w-full py-3 rounded-md font-semibold text-base mt-2 bg-[#2f357d] text-white hover:bg-[#23285e] transition"
          onClick={() => {
            navigate('/login');
          }}
        >
          DANDAN 로그인
        </button>
      </div>
    )
}

export default Signup4;