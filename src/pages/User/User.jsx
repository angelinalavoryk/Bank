import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Profile from '../../components/Profile/Profile.jsx';
import './_User.scss'

function User() {
  return (
    <div> 
    <Header/>
    <div> 
    <Profile/>
    </div>
    <Footer/>
    </div>
  );
}

export default User;