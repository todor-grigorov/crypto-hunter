import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Coin from '../pages/Coin';
import Home from '../pages/Home';

const RoutesList = (): JSX.Element => {
  console.log('RoutesList');

  return (
    <Routes>
      <Route path="/test" element={<Coin />}></Route>
      <Route path="/" element={<Home />}></Route>
    </Routes>
  );
};

export default RoutesList;
