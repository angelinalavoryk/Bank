import React, { useEffect } from 'react';
import './_Header.scss';
import { Link } from 'react-router-dom';
import SignIn from '../SignIn/SignIn.jsx';
import LogOut from '../LogOut/LogOut.jsx';
import ProfileName from '../ProfileName/ProfileName.jsx';
import ArgentBankLogo from '../../images/argentBankLogo.png';
import { useSelector, useDispatch } from 'react-redux';
import { getUserProfile } from '../../store/profileAction'; 
import { makeSelectIsAuthenticated } from '../../store/selectors.js';

function Header() {
  const isAuthenticated = useSelector(makeSelectIsAuthenticated); 
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUserProfile()); // appeler getUserProfile après une connexion réussie
    }
  }, [isAuthenticated, dispatch]);

  return (
    <nav className="main-nav">
      <Link to="/">
        <img
          className="main-nav-logo-image"
          src={ArgentBankLogo}
          alt="Argent Bank Logo"
        />
      </Link>
      <div>
        {!isAuthenticated && <SignIn />}
        {isAuthenticated && (
          <div className='header-profile-page'>
            <ProfileName />
            <LogOut />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Header;
