import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <>
      <div className="Register-container">
        <h1>Register Now</h1>
        <form method="post">
          <div className="user-details">
            <div className="txt-field">
              <input type="text" required />
              <span></span>
              <label>Name</label>
            </div>
            <div className="txt-field">
              <input type="text" required />
              <span></span>
              <label>Email Address</label>
            </div>
            <div className="txt-field">
              <input type="text" required />
              <span></span>
              <label>Password</label>
            </div>
            <div className="txt-field">
              <input type="password" required />
              <span></span>
              <label>Confirm Password</label>
            </div>
          </div>
          <div className="gender-details">
            <input type="radio" name="gndr" id="Dot-1" />
            <input type="radio" name="gndr" id="Dot-2" />
            <input type="radio" name="gndr" id="Dot-3" />

            <div className="category">
              <label htmlFor="Dot-1">
                <span className="Dot one"></span>
                <span className="gndr">I want to register as an admin</span>
              </label>
            </div>
          </div>
          <input type="Submit" className="Signin-BTN" value="Register" />
          <div className="signin_link"></div>
        </form>
      </div>
    </>
  );
};

export default Register;
