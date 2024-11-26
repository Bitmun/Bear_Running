import React from 'react';

import { Home } from 'components';
import { Login } from 'components';
import { CreateJog } from 'components/CreateJog/CreateJog';
import { Header } from 'components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/jogs/create" element={<CreateJog />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};
