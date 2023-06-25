import React from 'react';
import './styles/main.scss';
import Newsletter from './pages/Newsletter';
import ConfirmationEmail from './pages/ConfirmationEmail';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route index element={<Newsletter />} />
      <Route path="confirmation-email" element={<ConfirmationEmail />} />
    </Routes>
  );
};
