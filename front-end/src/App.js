import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      <Route path="/login" element={ <Login /> } exact />
      <Route path="/register" element={ <Register /> } />
      <Route path="/customer/checkout" element={ <Checkout /> } />
    </Routes>
  );
}

export default App;
