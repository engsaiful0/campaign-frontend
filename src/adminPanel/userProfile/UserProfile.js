import React, { useState, useEffect } from "react";
import "./styles.css";
import AdminNav from "../AdminNav";

const UserProfile = () => {
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
          <div>
            <main className="content">
              <section className="user-info">
                <h2>User Information</h2>
                <p>
                  <strong>Name:</strong> <span id="user-name">John Doe</span>
                  {/* <button id="edit-name">Edit</button> */}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span id="user-email">john.doe@example.com</span>
                  {/* <button id="edit-email">Edit</button> */}
                </p>
                <p>
                  <strong>Location:</strong>{" "}
                  <span id="user-location">New York, USA</span>
                  {/* <button id="edit-location">Edit</button> */}
                </p>
                <p>
                  <strong>Joined:</strong>{" "}
                  <span id="user-joined">January 1, 20XX</span>
                </p>
              </section>
              <section className="password-update">
                <h2>Update Password</h2>
                <form>
                  <label htmlFor="current-password">Current Password:</label>
                  <input type="password" id="current-password" required />

                  <label htmlFor="new-password">New Password:</label>
                  <input type="password" id="new-password" required />

                  <button type="submit">Update Password</button>
                </form>
              </section>

              <section className="account-delete">
                <h2>Delete Account</h2>
                <p>Are you sure you want to delete your account?</p>
                <button id="delete-account">Delete Account</button>
              </section>
            </main>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
