import React from 'react';
import './SignUp.scss';
const SignUp = () => {
  return (
    <div className="a-right">
      <form action="" className="infoForm authForm">
        <h3>Sign Up</h3>

        <div>
          <input type="text" placeholder="First Name" className="infoInput" name="firstname" />
          <input type="text" placeholder="Last Name" className="infoInput" name="lastname" />
        </div>
        <div>
          <input type="text" placeholder="UserName" className="infoInput" name="username" />
        </div>

        <div>
          <input type="text" placeholder="Password" className="infoInput" name="password" />
          <input type="text" placeholder="Confirm Password" className="infoInput" name="confirmpassword" />
        </div>
        <div>
          <span style={{ fontSize: '12px' }}>Already have an account . Login!</span>
          <button className="button infoButton" type="submit">
            SignUp
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
