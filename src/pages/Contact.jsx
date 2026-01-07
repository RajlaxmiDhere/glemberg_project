import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="contact-form">
        <h4 className="text-center mb-4">Contact Us</h4>

        <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="tel"
              className="form-control"
              placeholder="Your Phone Number"
              required
            />
          </div>

          <div className="mb-3">
            <textarea
              className="form-control"
              rows="4"
              placeholder="Your Query / Message"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
