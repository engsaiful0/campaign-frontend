import React, { useState } from "react";
import "./Registerform.css";
import { useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";


const RegisterForm = () => {
  const Navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  console.log(user);
  const handleChange = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleAdmin = (e) => {
    setUser((prev) => {
      return { ...prev, isAdmin: e.target.checked };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newRequest.post("/auth/register", {
        ...user,
      });
      Navigate("/Login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="vv">
        <img src="images/circle.jpg" className="circle-img" />
      </div>
      <img src="images/bottom-circle.jpg" className="bottom--img" />

      <div className="Form-container">
        <div className="containerr">
          <div className="cover">
            <div className="frames">
              <h2>falcon</h2>
              <div className="Center_text">
                <span className="paragraph">
                  With the power of Falcon, you can now focus only on
                  functionaries for your digital products, while leaving the UI
                  design on us!
                </span>
              </div>
              <div className="bb">
                <p>Have an account?</p>
                <button
                  onClick={() => Navigate("/Login")}
                  className="transparent-button"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="Register-form">
                <div className="title">Register</div>
                <div className="inputbox">
                  <span>Username</span>
                  <input type="text" name="userName" onChange={handleChange} />
                </div>
                <div className="inputbox">
                  <span>Email</span>
                  <input type="text" name="email" onChange={handleChange} />
                </div>
                <div className="twoforms">
                  <div className="inputbox">
                    <span>Password</span>
                    <input
                      type="text"
                      name="password"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="inputbox">
                    <span>Confirm Password</span>
                    <input type="text" name="" />
                  </div>
                </div>
                <div className="Terms">
                  <input
                    type="checkbox"
                    onChange={handleAdmin}
                    className="check-input"
                  />
                  I want to register as a admin
                </div>
                <div className=" inputbox">
                  <input type="submit" value="Register" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
