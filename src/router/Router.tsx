import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { Header } from '../components';
import { ROUTES } from '../constants';
import { AboutUs, Home, OurProcess, OurWork } from '../pages';

export function Router() {
  return (
    <BrowserRouter>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Routes>
          <Route element={<Home />} index />
          <Route element={<AboutUs />} path={ROUTES.ABOUT_US} />
          <Route element={<OurProcess />} path={ROUTES.OUR_PROCESS} />
          <Route element={<OurWork />} path={ROUTES.OUR_WORK} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
