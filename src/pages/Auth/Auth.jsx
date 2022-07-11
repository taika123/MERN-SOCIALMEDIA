import React from 'react';
import Logo from '~/img/logo.png';
import './Auth.scss';
import Login from './Login';
import SignUp from './SignUp';

const Auth = () => {
  return (
    <div className="Auth">
      <div className="a-left">
        <img src={Logo} alt="loggo" />
        <div className="Webname">
          <h1>Twitter</h1>
          <h6>Explore the ideas througout the word</h6>
        </div>
      </div>

      <SignUp />
    </div>
  );
};

export default Auth;
