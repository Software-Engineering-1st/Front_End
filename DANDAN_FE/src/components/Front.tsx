import React from 'react'
import { useNavigate } from 'react-router-dom'

function Front() {   
    const navigate = useNavigate()
    
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="w-full h-screen max-w-[393px] max-h-[852px] bg-[#393e74] flex flex-col justify-between mx-auto">
                {/* 타이틀 영역 */}
                <div className="flex flex-col items-center justify-center flex-1 px-4">
                    <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">DANDAN</h1>
                    <p className="text-lg text-white">토익단어 단단히 외우자</p>
                </div>
                {/* 하단 버튼 영역 */}
                <div className="w-full px-6 pb-8">
                    <div className="flex items-center mb-4">
                        <div className="flex-1 h-px bg-white/60" />
                        <span className="mx-3 text-white text-sm">단단 이용하기</span>
                        <div className="flex-1 h-px bg-white/60" />
                    </div>
                    <div className="flex gap-3 w-full">
                        <button 
                            className="flex-1 border-2 border-white text-white py-3 rounded-md font-semibold text-base hover:bg-white/10 transition"
                            onClick={() => navigate('/signup')}
                        >
                            회원가입
                        </button>
                        <button 
                            className="flex-1 bg-white text-[#393e74] py-3 rounded-md font-semibold text-base border-2 border-white hover:bg-white/90 transition"
                            onClick={() => navigate('/login')}
                        >
                            일반 로그인
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Front