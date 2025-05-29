import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AdminHome from './pages/AdminHome';
import './App.css';
import MainPage from './pages/MainPage';
import FrontPage from './pages/FrontPage';
import WordReadyPage from './pages/WordReadyPage';
import WordStudyPage from './pages/WordStudyPage';
import WordStudyCompletePage from './pages/WordStudyCompletePage';
import TestReadyPage from './pages/TestReadyPage';
import TestSolvePage from './pages/TestSolvePage';
import TestResultPage from './pages/TestResultPage';
import WrongNotePage from './pages/WrongNotePage';
import WrongNoteDetailPage from './pages/WrongNoteDetailPage';
import MyPage from './pages/MyPage';
import GoalEditPage from './pages/GoalEditPage';
import InfoEditPage from './pages/InfoEditPage';
import { GoalProvider } from './context/GoalContext';
import { UserProvider } from './context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <GoalProvider>
        <Routes>
          {/* 메인 페이지 */}
          <Route path="/" element={<FrontPage />} />
          
          {/* 인증 관련 페이지 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup/*" element={<SignupPage />} />
          
          {/* 관리자 페이지 */}
          <Route path="/admin" element={<AdminHome />} />
          
          {/* 학습 관련 페이지 */}
          <Route path="/main" element={<MainPage />} />
          <Route path="/word-ready" element={<WordReadyPage />} />
          <Route path="/word-study" element={<WordStudyPage />} />
          <Route path="/word-study-complete" element={<WordStudyCompletePage />} />
          <Route path="/test-ready" element={<TestReadyPage />} />
          <Route path="/test-solve" element={<TestSolvePage />} />
          <Route path="/test-complete" element={<TestResultPage />} />
          
          {/* 오답노트 관련 페이지 */}
          <Route path="/wrong-note" element={<WrongNotePage />} />
          <Route path="/wrong-note/:date" element={<WrongNoteDetailPage />} />
          
          {/* 마이페이지 관련 */}
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/goal-edit" element={<GoalEditPage />} />
          <Route path="/info-edit" element={<InfoEditPage />} />
        </Routes>
      </GoalProvider>
    </UserProvider>
  );
};

export default App;
