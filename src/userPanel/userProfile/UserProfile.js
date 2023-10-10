import React, { useState, useEffect } from "react";
import "./styles.css";
import UserNav from "../UserNav";
import newRequest from "../../utils/newRequest";

const UserProfile = () => {
  const [isSidebarActive, setIsSidebarActive] = useState(false);
  const [phone, setPhone] = useState("");
  const [address, setaAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { });
      localStorage.setItem("crunnentUser", JSON.stringify(res.data));
      // Navigate("/compaing");

      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

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

  const crunnentUser = JSON.parse(localStorage.getItem("crunnentUser"));
  return (
    <>
      <UserNav />
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
                  <strong>Name:</strong>{" "}
                  <span id="user-name">{crunnentUser.userName}</span>
                  {/* <button id="edit-name">Edit</button> */}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span>{crunnentUser.email}</span>
                  {/* <button id="edit-email">Edit</button> */}
                </p>

                {/* <p>
                  <strong>Joined:</strong>{" "}
                  <span id="user-joined">January 1, 20XX</span>
                </p> */}
              </section>
              <section className="password-update">
                <h2>Update Phone Number and Address</h2>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="current-password">Phone Number:</label>
                  <input
                    type="text"
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />

                  <label htmlFor="new-password">Address:</label>
                  <input
                    type="text"
                    name="address"
                    onChange={(e) => setaAddress(e.target.value)}
                    required
                  />

                  <button type="submit">Update</button>
                </form>
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
