import React from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {

  const phoneNumbers = [
    "+91 7559189020",
    "+91 8975173157",
  ];

  const email = "glembergpharmaceuticals@gmail.com";

  const whatsappNumber = "917559189020";
  const whatsappMessage = "Hello! I have an enquiry regarding your services.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const mapLink =
    "https://www.google.com/maps/place/Neminath+Nagar,+Sangli,+Maharashtra+416416";

  return (
    <div className="contact-page-wrapper">

      <div className="container contact-top">
        <div className="row align-items-center">

          {/* LEFT: CONTACT INFO */}
          <div className="col-md-6 contact-info">

            <h3>Corporate Office</h3>

            <p>
              <strong>Glemberg Pharma Pvt. Ltd.</strong><br />
              Neminath Nagar,<br />
              Sangli, Maharashtra – 416416<br />
              India
            </p>

            {/* LOCATION */}
            <p className="info-value">
              <FaMapMarkerAlt />
              <a href={mapLink} target="_blank" rel="noopener noreferrer">
                View on Google Maps
              </a>
            </p>

            {/* PHONE */}
            <h3 className="info-heading">Phone Number</h3>
            <div className="info-value">
              <FaPhoneAlt />
              <div>
                {phoneNumbers.map((num, index) => (
                  <a
                    key={index}
                    href={`tel:${num.replace(/\s/g, "")}`}
                    className="contact-link"
                  >
                    {num}
                    <br />
                  </a>
                ))}
              </div>
            </div>

            {/* EMAIL */}
            <h3 className="info-heading">Email</h3>
            <div className="info-value">
              <FaEnvelope />
              <a href={`mailto:${email}`} className="contact-link">
                {email}
              </a>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-enquire-btn"
            >
              <FaWhatsapp className="whatsapp-icon" />
              Enquire Now
            </a>

          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="col-md-6">
            <div className="contact-form">
              <h4 className="text-center mb-4">Contact Us</h4>

              <form>
                <div className="mb-3">
                  <label>Your Name</label>
                  <input type="text" className="form-control" placeholder="Full Name" />
                </div>

                <div className="mb-3">
                  <label>Email Address</label>
                  <input type="email" className="form-control" placeholder="Email Address" />
                </div>

                <div className="mb-3">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" placeholder="Phone Number" />
                </div>

                <div className="mb-3">
                  <label>Message</label>
                  <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
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
          src="https://www.google.com/maps?q=Neminath%20Nagar%20Sangli%20Maharashtra&output=embed"
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
