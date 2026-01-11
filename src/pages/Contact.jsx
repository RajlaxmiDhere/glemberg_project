import React from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";

const Contact = () => {
  const phoneNumber = "8975173157";
  const displayPhone = (
    <>
      +91 7559189020 <br />
      +91 8975173157
    </>
  );

  const email = "glembergpharmaceuticals@gmail.com";
  const message = "Hello! I have an enquiry regarding your services.";

  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const mapLink =
    "https://www.google.com/maps/place/Neminath+Nagar,+Sangli,+Maharashtra+416416";

  return (
    <div className="contact-page-wrapper">
      <div className="container contact-top">
        <div className="row align-items-center">

          {/* LEFT: INFO */}
          <div className="col-md-6 contact-info">
            <h3>Corporate Office</h3>

            <p>
              <strong>Glemberg Pharma Pvt. Ltd.</strong><br />
              Neminath Nagar,<br />
              Sangli, Maharashtra – 416416<br />
              India
            </p>

            <p className="location-link">
              <FaMapMarkerAlt />
              <a href={mapLink} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </p>

            <h3 className="info-heading">Phone Number</h3>
            <p className="info-value">
              <FaPhoneAlt />
              <a href={`tel:+91${phoneNumber}`} className="contact-link">
                {displayPhone}
              </a>
            </p>

            <h3 className="info-heading">Email</h3>
            <p className="info-value">
              <FaEnvelope />
              <a href={`mailto:${email}`} className="contact-link">
                {email}
              </a>
            </p>

            {/* WHATSAPP BUTTON */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success whatsapp-enquire-btn"
            >
              <FaWhatsapp className="whatsapp-icon" />
              Enquire Now
            </a>
          </div>

          {/* RIGHT: FORM */}
          <div className="col-md-6">
            <div className="contact-form">
              <h4 className="text-center mb-4">Contact Us</h4>

              <form>
                <div className="mb-3">
                  <label>Your Name</label>
                  <input type="text" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label>Email Address</label>
                  <input type="email" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" required />
                </div>

                <div className="mb-3">
                  <label>Message</label>
                  <textarea rows="4" className="form-control"></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* MAP */}
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.571434316682!2d74.60334887584102!3d16.847599918136364"
          width="100%"
          height="550"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
