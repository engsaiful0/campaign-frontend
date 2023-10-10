import React from "react";
import "./Footer.css"
{/*
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { FaLocationArrow } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";  */}



const Footer = () => {
  
  /* textarea = document.querySelector("textarea");
  textarea.addEventListener("keyup", e =>{
    let scHeight = e.target.scrollHeight;
    textarea.style.height = `${scHeight}px`;
  }); */
  return (
    <>
      <section className="Talbot_footer-section">
        <div
          className="footer"
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "60px",
            margin: "auto",
          }}
        >
          <div className="Box_1">
            <img className="Footer---Logo" src="images/logo.png" />
            <p>
              <span>Experience the difference </span> <br />
              and let us help you achieve your
              real estate goals Whether you're looking for commercial
              land sales or expansive properties spanning acres, we have
              the knowledge and resources to assist you.
            </p>
          </div>
          <div className="Box" id="contact">
            <form>
              <div className="user-input-box">
                <label for="full Name" className="Label--name">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className='vv'
                />
              </div>
              <div className="user-input-box">
                <label for="email" className="Label--name">Email</label>
                <input
                  type="text"
                  name="user_email"
                />
              </div>
              <div className="user-input-box">
                <label for="message" className="Label--Name">
                  Message
                </label>
                <textarea
                  name="message" required

                >
                  {" "}
                </textarea>
                <button type="submit" className="submit---BTN">
                  INQUIRY NOW
                </button>
              </div>
            </form>
          </div>
          {/* <div className="Box">
            <h3>Quick Links</h3>
            <a href="#" className="Links">
              Home
            </a>
            <a href="#" className="Links">
              About Us
            </a>
            <a href="#" className="Links">
              Gallery
            </a>
            <a href="#" className="Links">
              Contact
            </a>
          </div> */}
          <div className="Box">
            <h3>Contact Us</h3>
            <a className="Links vv">
          {/*  <CiLocationOn className="White--icon--1" /> */}
              Head Office: Level 14 / 333 Collins Street <br /> <span className='sidetext'>Melbourne VIC
                3000 </span>
            </a>
            <a className="Links--1">
         {/*   <FiPhoneCall className="White--icon" /> */}
              0405 555 000
            </a>

            <a href="mailto:info@talbotscommercial.com.au" className="Links--2">
          {/*   <FaLocationArrow className="White--icon" /> */}
              patrick@talbotscommercial.com.au
            </a>

            <h4 className="social-links">Follow Us</h4>
            <div className="rounded_Ico">
              <a
                href="https://instagram.com/talbotscommercial?igshid=NTc4MTIwNjQ2YQ=="
                className="Social_Lnk"
              >
              {/* <BsInstagram className="inherit---icon" />{" "} */}
              </a>
              <a
                href="https://www.linkedin.com/in/talbots-commercial-b42a96267"
                className="Social_Lnk"
              >
               {/* <AiOutlineLinkedin className="inherit---icon" /> */}
              </a>
              <a
                href="https://www.facebook.com/talbotscommercialrealestategroup?mibextid=LQQJ4d"
                className="Social_Lnk"
              >
{/*<FaFacebookF className="inherit---icon" /> */}
              </a>
              <a href="#" className="Social_Lnk">
        {/*<AiOutlineYoutube className="inherit---icon" /> */}
              </a>
            </div>
          </div>
        </div>
        <hr style={{ border: "2px solid #222943" }} />
        <div className="copyright-area">
          <p>© Talbots Commercial – All rights reserved</p>
        </div>


      </section>
      
    </>
  );
};
export default Footer;