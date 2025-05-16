import '../css/Front.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Front() {   
    const navigate = useNavigate()
    
    return (
        <div className="main-box">
            <div>
                <div className="title flex-1 flex flex-col justify-center items-center">
                    <h1>DANDAN</h1>
                    <p>토익단어 단단히 외우자</p>
                </div>
                <div className="bottom p-6">
                    <div className="divider mb-4">단단 이용하기</div>
                    <div className="button-group flex flex-row gap-3">
                        <button 
                            className="btn btn-outline"
                            onClick={() => navigate('/signup')}
                        >
                            회원가입
                        </button>
                        <button 
                            className="btn btn-solid"
                            onClick={() => navigate('/main')}
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