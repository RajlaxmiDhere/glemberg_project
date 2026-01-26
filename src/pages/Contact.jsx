import React, { useState } from "react";
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const phoneNumbers = ["+91 7559189020", "+91 8975173157"];
  const email = "glembergpharmaceuticals@gmail.com";
  const whatsappLink =
    "https://wa.me/917559189020?text=Hello! I have an enquiry regarding your services.";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(
        "https://glemberg-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error connecting to server.");
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="container contact-top">
        <div className="row align-items-center">

          {/* LEFT INFO */}
          <div className="col-md-6">
            <h3>Corporate Office</h3>
            <p>
              <b>Glemberg Pharma Pvt. Ltd.</b><br />
              Neminath Nagar,<br />
              Sangli, Maharashtra – 416416
            </p>

            <div className="info-value">
              <FaMapMarkerAlt />
              <a href="https://www.google.com/maps" target="_blank" rel="noreferrer">
                View on Google Maps
              </a>
            </div>

            <h3>Phone</h3>
            {phoneNumbers.map((num, i) => (
              <div key={i} className="info-value">
                <FaPhoneAlt /> <a href={`tel:${num}`}>{num}</a>
              </div>
            ))}

            <h3>Email</h3>
            <div className="info-value">
              <FaEnvelope /> <a href={`mailto:${email}`}>{email}</a>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-enquire-btn"
            >
              <FaWhatsapp /> Enquire Now
            </a>
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-6">
            <div className="contact-form">
              <h4>Contact Us</h4>

              <form onSubmit={handleSubmit}>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                />

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  required
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                ></textarea>

                <button type="submit">
                  {status === "Sending..." ? "Sending..." : "Submit"}
                </button>

                {status && <p>{status}</p>}
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
