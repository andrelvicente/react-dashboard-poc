import React from "react";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Bem-vindo!</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
