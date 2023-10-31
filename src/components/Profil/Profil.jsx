import React from 'react';
import { Link } from 'react-router-dom';




function Profile() {
  return (
    <div>
        <Link> 
          <i className="fa fa-user-circle"></i>
          UserName
        </Link>
      </div>
  );
}

export default Profile;