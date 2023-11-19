import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authAction.js';
import './_SignIn.scss';

function LogIn() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');

  // Appelé quand le formulaire est soumis
  const handleLogin = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/;
    if (!emailRegex.test(email)) {
      setEmailError('Adresse e-mail invalide');
      return;
    }
    setEmailError(''); // Si l'e-mail est valide, effacez les erreurs précédentes
    dispatch(login(email, password));
  };

  return (
    <div>
      <div className='main-form-sign-in'>
        <main className="main bg-dark">
          <div className='padding'> 
            <section className="sign-in-content">
              <i className="fa fa-user-circle sign-in-icon" style={{ fontSize: '6rem' }}></i>
              <h1>Sign In</h1>
              <form onSubmit={handleLogin}>
                <div className="input-wrapper">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && <p className="error-message">{emailError}</p>}
                </div>
                <div className="input-wrapper">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit">
                  Sign In
                </button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LogIn;









