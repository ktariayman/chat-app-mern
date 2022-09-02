import React from 'react';
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/authPages/Login/Login';
import Register from './pages/authPages/Register/Register';

import Dashboard from './pages/Dashboard/Dashboard';
function App() {
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />} ></Route>
        <Route exact path="/dashboard" element={<Dashboard />} ></Route>
        <Route  path="/" element={<Dashboard />} ></Route>
        
      </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
