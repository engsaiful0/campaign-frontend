import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./banner.css";
function banner() {
  return (
    <>
      <section id="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="promo-title">Donation Center</p>
              <p className="lead">
                Always give without remembering and always receive without
                forgetting.
              </p>
              <div className="search-barr">
                <select
                  style={{
                    flex: 1,
                    border: "none",
                    borderRight: "1px solid #ccc",
                    backgroundColor: "#fff",
                    margin : 0
                  }}
                >
                  <option value="all">All</option>
                  <option value="products">Name</option>
                  <option value="users">Institute Name</option>
                  <option value="users">Address</option>
                </select>
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    flex: 2,
                    border: "none",
                    padding: "10px",
                    backgroundColor: "transparent",
                    fontSize: "16px",
                    outline: "none",
                    margin:0
                  }}
                />
                <button type="button" className="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src="images/home2.png" alt="Banner" className="img-fluid" />
            </div>
          </div>
        </div>
        <img src="images/wave1.png" alt="" className="w-100" />
      </section>
    </>
  );
}
export default banner;