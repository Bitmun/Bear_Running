import React from 'react';

import { Header } from 'components';
import { FilterPanelProvider } from 'contexts/FilterContext';
import { Home, Info, JogForm, Login, NotFoundPage } from 'pages';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <FilterPanelProvider>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/jogs/create" element={<JogForm />} />
          <Route path="/jogs/update/:id" element={<JogForm />} />
          <Route path="/info" element={<Info />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </FilterPanelProvider>
    </Router>
  );
};
