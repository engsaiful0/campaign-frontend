import React, { useState } from "react";
import "./LoginForm.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import newRequest from "../utils/newRequest";
const LoginForm = () => {
  const Navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { email, password });
      localStorage.setItem("crunnentUser", JSON.stringify(res.data));
      // Navigate("/compaing");
      const data = res.data;
      if (data.isAdmin) {
        Navigate("/admin");
      } else {
        Navigate("/userPanel");
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="Top-images">
        <img src="images/circle.jpg" className="circle-img" />
      </div>

      <img src="images/bottom-circle.jpg" className="bottom--img" />
      <div className="Form-container">
        <div className="containerr">
          <div className="cover">
            <div className="front">
              <img src="images/bg.jpg" className="BG_image" />
            </div>
            <div className="frames">
              <h2>falcon</h2>
              <div className="Center_text para-txt">
                <span className="paragraph">
                  With the power of Falcon, you can now focus only on
                  functionaries for your digital products, while leaving the UI
                  design on us!
                </span>
              </div>
              <div className="startAccount">
                <p>
                  Don't have an account? <br />
                  <a onClick={() => Navigate("/register")} className="start">
                    Get Started!
                  </a>
                </p>
              </div>
              <div className="Login--Condition">
                <span className="policy">Read our <a>terns</a> and <a>conditions</a></span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-content">
              <div className="login-form">
                <div className="title">Account Login</div>
                <div className="inputbox">
                  <span>Email Address</span>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="inputbox">
                  <span>Password</span>
                  <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="remember">
                  <a href="" className="forgot-link">
                    Forgot password?
                  </a>
                </div>
                <div className=" inputbox">
                  <input type="submit" value="Login in" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
