import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import User from './pages/User/User.jsx';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<SignIn />} /> 
        <Route path="/profile" element={<User />} /> 
      </Routes>
    </div>
  );
}

export default App;


