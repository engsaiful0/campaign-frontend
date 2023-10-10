import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <img src="images/wave2.png" alt="wave2" className="w-100" />
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-box">
            <img src="images/demo-logo.png" alt="Logo" />
            <p className="lead py-4">
              Subscribe Easy tutorial Youtube channel to watch more video on Web
              Developing, Digital Marketing, WordPress, and Graphic Designing.
              Press the bell icon to get the notifications.
            </p>
          </div>
          <div className="col-md-4 footer-box">
            <p className="lead">CONTACT US</p>
            <p className="lead">
              <i className="fa-solid fa-location-dot"></i> World Trade Bank,
              Bangalore
            </p>
            <p className="lead">
              <i className="fa-solid fa-phone"></i> +1 0123456789
            </p>
            <p className="lead">
              <i className="fa-solid fa-envelope"></i> xyz@gmail.com
            </p>
          </div>
          <div className="col-md-4 footer-box" id="contact">
            <p className="lead">SUBSCRIBE NEWSLETTERS</p>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your Email"
            />
            <button className="btn btn-primary">Subscribe</button>
          </div>
          <hr />
          <p className="text-center">Website Crafted by TheDevFamily</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
