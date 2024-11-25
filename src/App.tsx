import React from 'react';

import { Home } from 'components';
import { Login } from 'components';
import { Header } from 'components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Header />
      <Routes>
        {!token ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
      </Routes>
    </Router>
  );
};
