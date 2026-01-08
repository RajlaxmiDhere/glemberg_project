import React from "react";
import "./Contact.css";

const Contact = () => {
  const phoneNumber = "8010393478";
  const displayPhone = "+91 80103 93478";
  const email = "info@glembergpharma.com";

  const message = "Hello! I have an enquiry regarding your services.";
  const whatsappLink = `https://wa.me/91${phoneNumber}?text=${encodeURIComponent(message)}`;

  const mapLink =
    "https://www.google.com/maps/place/Neminath+Nagar,+Sangli,+Maharashtra+416416";

  return (
    <div className="contact-page-wrapper">

      {/* WhatsApp Floating Button */}
      <a
        href={whatsappLink}
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          style={{ width: "50px", height: "50px" }}
        />
      </a>

      {/* Top Section */}
      <div className="container contact-top">
        <div className="row align-items-center">

          {/* LEFT: Corporate Office Info */}
          <div className="col-md-6 contact-info">
            <h3 className="mb-3">Corporate Office</h3>

            <p className="mb-3">
              <strong>Glemberg Pharma Pvt. Ltd.</strong><br />
              Neminath Nagar,<br />
              Sangli, Maharashtra – 416416<br />
              India
            </p>

            {/* Get Location Button */}
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary mb-4"
              style={{ borderRadius: "25px", padding: "8px 22px" }}
            >
              Get Location
            </a>

            {/* Phone */}
            <h1 className="contact-heading">
              <a href={`tel:+91${phoneNumber}`} className="contact-link">
                {displayPhone}
              </a>
            </h1>

            {/* Email */}
            <h1 className="contact-heading">
              <a href={`mailto:${email}`} className="contact-link">
                {email}
              </a>
            </h1>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="col-md-6">
            <div className="contact-form">
              <h4 className="text-center mb-4">Contact Us</h4>

              <form>
                <div className="mb-3">
                  <label>Your Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Message</label>
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

        </div>
      </div>

      {/* Bottom Section: Map */}
      <div className="map-container">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.571434316682!2d74.60334887584102!3d16.847599918136364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1230623d53bc5%3A0xb5f67cf6931948d9!2sNeminath%20Nagar%2C%20Sangli%2C%20Maharashtra%20416416!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;
