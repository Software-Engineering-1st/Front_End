import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MainPage from './pages/MainPage';
import FrontPage from './pages/FrontPage';
import WordReadyPage from './pages/WordReadyPage';
import WordStudyPage from './pages/WordStudyPage';
import WordStudyCompletePage from './pages/WordStudyCompletePage';


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
        <Route path="/" element={<FrontPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
