import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import './App.css'
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
      <ToastContainer />
    </Router>
  );
};

export default App;
