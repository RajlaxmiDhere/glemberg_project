import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="contact-form">
        <h4 className="text-center mb-4">Contact Us</h4>

        <form>
          <div className="mb-3">
            <label>Your Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Full-Name"
              required
            />
          </div>

          <div className="mb-3">
            <label>Your Email Address</label>
            
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="mb-3">
            <label>Your Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="mb-3">
            <label>Additional Information</label>
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
