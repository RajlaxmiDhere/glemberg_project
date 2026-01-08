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

{/* Map Section - Now properly inside the component */}
      <div className="map-container">
        <iframe 
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.571832049615!2d74.58524677516244!3d16.847514383950882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc118a93e50ca2f%3A0x7156be7db78e48d9!2sNeminathnagar%2C%20Sangli%2C%20Maharashtra%20416416!5e0!3m2!1sen!2sin!4v1704715000000!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </div>
  </>
  );
};

export default Contact;
