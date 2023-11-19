import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { makeSelectFirstName } from '../../store/selectors.js'; 

function ProfileName() {
  const firstName = useSelector(makeSelectFirstName);
  return (
    <div>
      <Link to="/profile" className='main-nav-item'>
        <i className="fa fa-user-circle"></i>
        {firstName}
      </Link>
    </div>
  );
}
export default ProfileName;


