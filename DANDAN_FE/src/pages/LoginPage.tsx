import React from 'react';
import HomeLayout from '../layout/HomeLayout';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <HomeLayout>
        <LoginForm />
      </HomeLayout>
    </div>
  );
};

export default LoginPage;