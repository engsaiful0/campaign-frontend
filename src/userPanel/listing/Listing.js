import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Adminpanel.css";
import AdminNav from "../AdminNav";
import "boxicons/css/boxicons.min.css";
import ProductCards from "../../components/Product cards/ProductCards";
import Card from "../cards/Card";

const Listing = () => {
  const Navigate = useNavigate();
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
          {/*
          <div className="search-box">
            <input type="text" placeholder="Search..." />
            <i className="bx bx-search"></i>
          </div> */}

          <div className="profile-details">
            <i className="bx bx-bell bell-icon"></i>
            <img src="images/avaatar.jpg" alt="" />
          </div>
        </nav>

        <div className="home-content">
          <Card />
        </div>
      </section>
    </>
  );
};

export default Listing;
