import React from "react";
import "./social.css";

const SocialMedia = () => {
  
  return (
    <>
      <section id="social-media">
        <div className="container text-center">
          <p>Find US ON SOCIAL MEDIA</p>
          <div className="social-icons">
            <a href="#">
              <img src="images/facebook-icon.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="images/instagram-icon.png" alt="instagram" />
            </a>
            <a href="#">
              <img src="images/whatsapp-icon.png" alt="whatsapp" />
            </a>
            <a href="#">
              <img src="images/linkedin-icon.png" alt="linkedin" />
            </a>
            <a href="#">
              <img src="images/twitter-icon.png" alt="twitter" />
            </a>
            <a href="#">
              <img src="images/snapchat-icon.png" alt="snapchat" />
            </a>
          </div>
        </div>
      </section>
      
    </>
  );
};

export default SocialMedia;
