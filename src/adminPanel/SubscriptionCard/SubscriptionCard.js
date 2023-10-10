import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faCheck,
  faHelicopter,
} from "@fortawesome/free-solid-svg-icons";
import "./SubscriptionCard.css";
import { Link } from "react-router-dom";
import AdminNav from "../AdminNav";

const SubscriptionCard = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarActive(!isSidebarActive);
  };

  useEffect(() => {
    const sidebarBtn = document.querySelector(".sidebarBtn");

    const handleSidebarToggle = () => {
      toggleSidebar();
    };

    sidebarBtn.addEventListener("click", handleSidebarToggle);

    return () => {
      sidebarBtn.removeEventListener("click", handleSidebarToggle);
    };
  }, [isSidebarActive]);
  return (
    <>
      <AdminNav />
      <section className="home-section">
        <nav>
          <div className="sidebar-button">
            <i
              className={`bx ${
                isSidebarActive ? "bx-menu-alt-right" : "bx-menu"
              } sidebarBtn`}
            ></i>
            <span className="dashboard">Dashboard</span>
          </div>

          <div className="profile-details">
            <i className="bx bx-bell bell-icon"></i>
            <img src="images/avaatar.jpg" alt="" />
          </div>
        </nav>

        <div className="home-content">
          <section className="Pricing">
            <div className="Card-Content">
              <div className="Header">
                <h1>One Month Subscription</h1>
                <FontAwesomeIcon icon={faHelicopter} className="car-icon" />
              </div>
              <div className="card-price">
                <p>
                  <sup>$</sup>99<sub>/m</sub>
                </p>
              </div>
              <div className="CARD-Details">
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  </span>
                  Unlimited BroadCasts
                </p>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  </span>
                  Unlimited Sequence
                </p>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  </span>
                  Advanced marketing
                </p>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  </span>
                  Api & Developer Tools
                </p>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  </span>
                  Integration
                </p>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  </span>
                  Payements
                </p>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  </span>
                  Unlimited Tags
                </p>
                <p>
                  <span>
                    <FontAwesomeIcon icon={faCheck} className="check-icon" />
                  </span>
                  Custom Fields
                </p>
              </div>
              <Link to="/adminPay">
                <button className="purchase-button">Purchase Now</button>
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default SubscriptionCard;
