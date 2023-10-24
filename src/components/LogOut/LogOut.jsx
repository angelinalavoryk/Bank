import React from 'react';
import { Link } from 'react-router-dom';



function LogOut() {
  return (
    <div>
        <Link 
        className='main-nav-item'
        to="/"
        >
        <i class="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
  );
}

export default LogOut;


