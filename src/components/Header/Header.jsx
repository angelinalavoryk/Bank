import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../SignIn/SignIn.jsx';
// import LogOut from '../LogOut/LogOut.jsx';
import ArgentBankLogo from '../../images/argentBankLogo.png';


function Header() {
  return (
    <nav className="main-nav">
      <Link to="/">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        <SignIn/> 
        {/* <LogOut/>  */}
      </div>
    </nav>
  );
}

export default Header;
