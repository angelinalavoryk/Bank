import React from 'react';
import Dashboard from '../../components/Dashboard/Dashboard.jsx';
import UserHeader from '../../components/UserHeader/UserHeader.jsx';
import './_User.scss';

function User() {
  return (
    <div>
      <div>
        <main className='main bg-dark'>
          <div>
            <UserHeader />
            <Dashboard />
          </div>
        </main>
      </div>
    </div>
  );
}

export default User;

