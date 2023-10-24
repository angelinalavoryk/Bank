import React from 'react';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import UserHeader from '../../components/UserHeader/UserHeader.jsx';
import './_User.scss'

function User() {
  return (
    <div> 
    <Header/>
    <div> 
    <main className='main bg-dark'> 
    <div> 
    <UserHeader/>
    </div>
    <Dashboard/>
    </main>
    </div>
    <Footer/>
    </div>
  );
}

export default User;