import React from 'react';
import HomeLayout from '../layout/HomeLayout';
import { Routes, Route } from 'react-router-dom';
import Signup1 from '../components/Signup1';
import Signup2 from '../components/Signup2';
import Signup3 from '../components/Signup3';
import Signup4 from '../components/Signup4';

const SignupPage = () => {
  return (
    <HomeLayout>
      <Routes>
        <Route path="/" element={<Signup1 />} />
        <Route path="2" element={<Signup2 />} />
        <Route path="3" element={<Signup3 />} />
        <Route path="4" element={<Signup4 />} />
      </Routes>
    </HomeLayout>
  );
};

export default SignupPage;