import React from 'react';

import { Header } from 'components';
import { FilterProvider } from 'contexts';
import { Home, Info, JogForm, Login, NotFoundPage } from 'pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <FilterProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/jogs/create" element={<JogForm />} />
          <Route path="/jogs/update/:id" element={<JogForm />} />
          <Route path="/info" element={<Info />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </FilterProvider>
    </Router>
  );
};
