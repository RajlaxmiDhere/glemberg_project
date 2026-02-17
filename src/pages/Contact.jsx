import React, { useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const phoneNumbers = [
    "+91 7559189020"
  ];

  const email = "glembergpharmaceuticals@gmail.com";
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // ✅ FORMSPREE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {

      const response = await fetch("https://formspree.io/f/xgolyeba", {  
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        setStatus("Failed to send message.");
      }

    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="container contact-top">
        <div className="row align-items-center">

          {/* LEFT */}
          <div className="col-md-6">
            <div className="contact-info-card">

              <h3>Corporate Office</h3>
              <p>
                <b>Glemberg Pharma Pvt. Ltd.</b> <br />
                Neminath Nagar,<br />
                Sangli, Maharashtra – 416416<br />
                India
              </p>

              <div className="info-value">
                <span className="icon-circle"><FaMapMarkerAlt /></span>
                <a
                  href="https://www.google.com/maps/place/Neminath+Nagar,+Sangli,+Maharashtra+416416"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Maps
                </a>
              </div>

              <h3 className="info-heading">Phone Number</h3>
              {phoneNumbers.map((num, index) => (
                <div className="info-value" key={index}>
                  <span className="icon-circle"><FaPhoneAlt /></span>
                  <a href={`tel:${num.replace(/\s/g, "")}`} className="contact-link">
                    {num}
                  </a>
                </div>
              ))}

              <h3 className="info-heading">Email</h3>
              <div className="info-value">
                <span className="icon-circle"><FaEnvelope /></span>
                <a href={`mailto:${email}`} className="contact-link">{email}</a>
              </div>

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
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-6">
            <div className="contact-form">
              <h4 className="text-center mb-4">Contact Us</h4>

              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Full Name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="Phone Number"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={status === "Sending..."}
                >
                  {status === "Sending..." ? "Sending..." : "Submit"}
                </button>

                {status && (
                  <p className="mt-3 text-center small">{status}</p>
                )}

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
