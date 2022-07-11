import React from 'react';
import './Login.scss';
const Login = () => {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Log In</h3>

        <div>
          <input type="text" placeholder="Username" className="infoInput" name="username" />
        </div>
        <div>
          <input type="text" placeholder="Password" className="infoInput" name="password" />
        </div>
        <div>
          <span style={{ fontSize: '12px' }}>Don't have an account . Sign Up!</span>
          <button className="button infoButton">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
