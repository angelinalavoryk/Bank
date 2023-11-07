
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import SignIn from './pages/SignIn/SignIn.jsx';
import User from './pages/User/User.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import PrivateRoute from './utils/privateRoute.js';
import PublicRoute from './utils/publicRoute.js';
import './App.css';

function App() {
  const isAuthenticated = localStorage.getItem('authToken') ? true : false;

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <PrivateRoute element={<Home />} isAuthenticated={isAuthenticated} /> : <PublicRoute element={<Home />} isAuthenticated={isAuthenticated} />}
        />
        <Route path="/login" element={<PublicRoute element={<SignIn />} isAuthenticated={isAuthenticated} />} />
        <Route path="/profile" element={<PrivateRoute element={<User />} isAuthenticated={isAuthenticated} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;







