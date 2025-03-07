import React, { useState } from 'react';
import { toast } from 'react-toastify';
import InputField from './InputField';
import Button from './Button';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);

    // Simulação de login (pode substituir com autenticação real)
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password123') {
        toast.success('Login realizado com sucesso!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      } else {
        toast.error('Credenciais inválidas. Tente novamente.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <form className="w-full max-w-sm mx-auto p-6 space-y-4 bg-white rounded-md shadow-md">
      <InputField
        type="email"
        id="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu e-mail"
      />
      <InputField
        type="password"
        id="password"
        label="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Digite sua senha"
      />
      <Button text={isSubmitting ? 'Carregando...' : 'Entrar'} onClick={handleSubmit} disabled={isSubmitting} />
    </form>
  );
};

export default LoginForm;
