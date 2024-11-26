import React from 'react';

import { Header } from 'components';
import { CreateJog, Home, Info, Login, NotFoundPage } from 'pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/jogs/create" element={<CreateJog />} />
        <Route path="/info" element={<Info />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};
