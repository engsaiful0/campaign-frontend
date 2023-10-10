import React, { useState, useEffect } from "react";
import "./Adminpanel.css";
import "boxicons/css/boxicons.min.css"; // Import Boxicons CSS
import Compaing from "./compaing/Compaing";
import { useNavigate } from "react-router-dom";

const AdminNav = () => {
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
      <div className={`sidebar ${isSidebarActive ? "active" : ""}`}>
        <div className="logo-details">
          <i className="bx bxl-c-plus-plus"></i>
          <span className="logo_name">Admin</span>
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={() => Navigate("/")} className="active">
              <i class="bx bx-grid-alt"></i>
              <span className="links_name">Visit Home</span>
            </a>
          </li>
          <li>
            <a onClick={() => Navigate("/listing")}>
              <i className="bx bx-box"></i>
              <span className="links_name">Listing</span>
            </a>
          </li>
          <li>
            <a onClick={() => Navigate("/adminProfile")}>
              <i class="bx bx-list-ul"></i>
              <span className="links_name">profile</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-pie-chart-alt-2"></i>
              <span className="links_name">Account</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bx-coin-stack"></i>
              <span className="links_name">Payment</span>
            </a>
          </li>
          <li>
            <a onClick={() => Navigate("/sub")}>
              <i className="bx bx-book-alt"></i>
              <span className="links_name">Subscription</span>
            </a>
          </li>
          <li>
            <a onClick={() => Navigate("/compaing")}>
              <i className="bx bx-user"></i>
              <span className="links_name">Add Campaing</span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AdminNav;
