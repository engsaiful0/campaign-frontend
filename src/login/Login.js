import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const Navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        userName,
        password,
      });
      console.log(res.data);
      localStorage.setItem("crunnentUser", JSON.stringify(res.data));
      Navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="Login-containerr">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            name="userName"
            type="text"
            placeholder="EmailAdress"
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            name="password"
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="Continue-btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
