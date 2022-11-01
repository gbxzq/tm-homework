import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from '../pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} index />
      </Routes>
    </BrowserRouter>
  );
}
