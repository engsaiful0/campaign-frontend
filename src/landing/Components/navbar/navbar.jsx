import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

import "./navbar.css";

function App() {
  const Navigate = useNavigate();
  return (
    <>
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="images/demo-logo.png" alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#ffffff", fontSize: "30px" }}
              />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link ms-4" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ms-4" onClick={() => Navigate("/Login")}>
                    Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ms-4" onClick={() => Navigate("/register")}>
                    Join
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link ms-4" href="#services">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ms-4" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link ms-4" href="#testimonials">
                    Testimonials
                  </a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link ms-4" href="#contact">
                  <button className="btn btn-primary">Contact Us</button>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default App;
