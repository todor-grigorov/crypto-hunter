import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CoinPage from '../pages/CoinPage';
import Home from '../pages/Home';

const RoutesList = (): JSX.Element => {
  console.log('RoutesList');

  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/coins/:id" element={<CoinPage />}></Route>
    </Routes>
  );
};

export default RoutesList;
