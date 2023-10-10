import React from 'react';
import FormSignIn from '../../components/FormSignin/FormSignin.jsx';
import Header from '../../components/Header/Header.jsx';
import Footer from '../../components/Footer/Footer.jsx';
import './_SignIn.scss';



function SignIn() {
  return (
    <div> 
    <Header/>
    <div className='main-form-sign-in'> 
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <FormSignIn />
      </section>
    </main>
    </div>
    <Footer/>
    </div>
  );
}

export default SignIn;

