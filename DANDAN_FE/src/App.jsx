import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
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


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/*" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/word-ready" element={<WordReadyPage />} />
        <Route path="/word-study" element={<WordStudyPage />} />
        <Route path="/word-study-complete" element={<WordStudyCompletePage />} />
        <Route path="/test-ready" element={<TestReadyPage />} />
        <Route path="/test-solve" element={<TestSolvePage />} />
        <Route path="/test-complete" element={<TestResultPage />} />
        <Route path="/wrong-note" element={<WrongNotePage />} />
        <Route path="/wrong-note/:date" element={<WrongNoteDetailPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/goal-edit" element={<GoalEditPage />} />
        <Route path="/info-edit" element={<InfoEditPage />} />
        <Route path="/" element={<FrontPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
