import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screens/Home";
import Steps from '../screens/Steps';
import Trail from '../screens/Trail';

const NavigationRoutes = () => {
  return (
      <Routes>
        <Route element={<Home />} path='' exact />
        <Route element={<Trail />} path='/trilha' exact />
        <Route element={<Steps />} path='/step' exact />
      </Routes>
  );
}

export default NavigationRoutes;