import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import StoreProvider from '../App/store/provider';
import RoutesPrivate from '../App/Routes/private';

import Home from './home/index';
import Login from  './Login/login';

const PagesRoot = () => (
  <Router>
    <StoreProvider>
      <Routes>
        <Route path="/" element={Login} />
        <RoutesPrivate path="/pageT" element={Home} />
      </Routes>
    </StoreProvider>
  </Router>
)


export default PagesRoot;