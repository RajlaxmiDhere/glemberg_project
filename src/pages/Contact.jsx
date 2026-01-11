import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;

  const mapLink =
    "https://www.google.com/maps/place/Neminath+Nagar,+Sangli,+Maharashtra+416416";

  return (
    <div className="contact-page-wrapper">
      <div className="container contact-top">
        <div className="row contact-row">

          {/* LEFT – 60% */}
          <div className="col-md-7 contact-info">
            <h2 className="section-title">Corporate Office</h2>

            <p className="address">
              <strong>Glemberg Pharma Pvt. Ltd.</strong><br />
              Neminath Nagar,<br />
              Sangli, Maharashtra – 416416<br />
              India
            </p>

            <p className="map-link">
              <FaMapMarkerAlt />
              <a href={mapLink} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </p>

            <div className="info-block">
              <h4>Phone</h4>
              <p>
                <FaPhoneAlt />
                <a href={`tel:+91${phoneNumber}`}>{displayPhone}</a>
              </p>
            </div>

            <div className="info-block">
              <h4>Email</h4>
              <p>
                <FaEnvelope />
                <a href={`mailto:${email}`}>{email}</a>
              </p>
            </div>

            <div className="cta-row">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  alt="Whatsapp"
                />
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn enquire-btn"
              >
                Enquire Now
              </a>
            </div>
          </div>

          {/* RIGHT – 40% */}
          <div className="col-md-5">
            <div className="contact-form">
              <h3>Contact Us</h3>

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
                  <textarea className="form-control" rows="4"></textarea>
                </div>

                <button type="submit" className="btn submit-btn w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Map */}
      <div className="map-container">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.571434316682!2d74.60334887584102!3d16.847599918136364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1230623d53bc5%3A0xb5f67cf6931948d9!2sNeminath%20Nagar%2C%20Sangli%2C%20Maharashtra%20416416!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;


