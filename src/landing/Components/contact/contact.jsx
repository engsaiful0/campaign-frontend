import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const recaptchaRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      alert("Please complete the reCAPTCHA.");
      return;
    }
    console.log("Form submitted with reCAPTCHA value:", recaptchaValue);
  };

  return (
    <>
      <section className=" container mb-4">
        <h2 className="h1-responsive font-weight-bold text-center my-4">
          Contact us
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Do you have any questions? Please do not hesitate to contact us
          directly. Our team will come back to you within a matter of hours to
          help you.
        </p>
        <form id="contact-form" name="contact-form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="md-form mb-0">
                <label htmlFor="name">Your name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="md-form mb-0">
                <label htmlFor="email">Your email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form mb-0">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="md-form">
                <label htmlFor="message">Your message</label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  rows="2"
                  className="form-control md-textarea"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="text-center text-md-left mt-4">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeShSwoAAAAAN8bL85HdVIDT1BlhqL3Af6bbZ2p"
            />
            <button type="submit" className="btn btn-primary" style={{ width: '150px' }}>
              Send
            </button>
          </div>
          <div className="status"></div>
        </form>
      </section>
    </>
  );
};

export default Contact;
