import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MainPage from './pages/MainPage';
import FrontPage from './pages/FrontPage';
import ManagerMainpage from './pages/ManagerMainpage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup/*" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/" element={<FrontPage/>} />
        <Route path="/manager/*" element={<ManagerMainpage/>} />
      </Routes>
    </Router>
  );
};

export default App;
