import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import User from './pages/User/User.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';

function App() { 
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<SignIn />} /> 
        <Route path="/profile" element={<User />} /> 
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;


