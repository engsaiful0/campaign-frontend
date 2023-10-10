import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Homescreen from "../Home/Homescreen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  const [] = useState(true);
  const [open, setOpen] = useState(false); // State to control the dropdown menu

  // Toggle the dropdown menu when the user clicks on the user element
  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="hero">
      <nav className="sticky-navbar">
        <img className="logo" src="images/logo.png" />
        <input type="checkbox" id="menu-toggle" style={{ display: "none" }} />
        <label htmlFor="menu-toggle" className="Menu-Icon">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className="menu">
          <li>
            <a onClick={() => Navigate("/Login")}>Login</a>
          </li>
          <li>
            <a href="#">Sign Up</a>
          </li>
          <li>
            <a
              href="#"
              className="orange-btn"
              style={{
                textDecoration: "none",
                listStyle: "none",
              }}
            >
              Contact
            </a>
          </li>
          {/* User dropdown */}
          <li className="user" onClick={toggleDropdown}>
            <img
              src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              className="profile-img"
            />

            {open && (
              <div className="options">
                {/* Add user-specific links here */}
                <a>Profile</a>
                <a>Messages</a>
                <a>Logout</a>
              </div>
            )}
          </li>
        </ul>
      </nav>
      {/* <Homescreen /> */}
    </div>
  );
};

export default Navbar;
