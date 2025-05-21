import React from 'react';
import HomeLayout from '../layout/HomeLayout';
import '../css/Mypage.css';
// import ghost from '../assets/Ghost.png';
import ghost from '../assets/ghost.svg';

const Mypage = () => {
  // 실제 데이터는 props/context/api 등으로 대체 가능
  const nickname = '소공1조에이쁠쥐';
  const userid = 'sooooo1234';
  const targetCount = 38;

  return (
    <HomeLayout>
      <div className="mypage-container">
        {/* 상단 */}
        <div className="mypage-header">
          <div className="mypage-nickname">
            <span className="nickname-main">{nickname}</span>님
          </div>
          <div className="mypage-userid">{userid}</div>
        </div>

        {/* 목표 단어 카드 */}
        <div className="mypage-target-card">
          <div className="target-info">
            <div className="target-title">목표 단어</div>
            <div className="target-count">
              <span className="count-number">{targetCount}</span>개
            </div>
          </div>
          <img src={ghost} alt="goal-ghost" className="target-ghost" />
        </div>

        {/* 버튼 영역 */}
        <div className="mypage-btn-group">
          <button className="mypage-btn">목표 수정</button>
          <button className="mypage-btn">정보 수정</button>
        </div>

        {/* 하단 로그아웃 */}
        <div className="mypage-logout">로그아웃</div>
      </div>
    </HomeLayout>
  );
};

export default Mypage;