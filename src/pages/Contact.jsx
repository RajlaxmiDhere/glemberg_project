import React, { useState } from "react";
import "./Contact.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  // 1. State for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 2. Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Success! Your message has been stored.");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        setStatus("Error: Could not save message.");
      }
    } catch (error) {
      setStatus("Server Error. Please try again later.");
    }
  };

  return (
    <div className="contact-page-wrapper">
      <div className="container contact-top">
        <div className="row align-items-center">
          
          {/* LEFT: INFO (Keeping your original UI) */}
          <div className="col-md-6">
            <div className="contact-info-card">
              <h3>Corporate Office</h3>
              <p><b>Glemberg Pharma Pvt. Ltd.</b><br />Sangli, Maharashtra – 416416</p>
              {/* ... Icons and buttons stay the same ... */}
            </div>
          </div>

          {/* RIGHT: FORM (Updated with handlers) */}
          <div className="col-md-6">
            <div className="contact-form">
              <h4 className="text-center mb-4">Contact Us</h4>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Your Name</label>
                  <input 
                    type="text" name="name" className="form-control" 
                    value={formData.name} onChange={handleChange} required 
                  />
                </div>
                <div className="mb-3">
                  <label>Email Address</label>
                  <input 
                    type="email" name="email" className="form-control" 
                    value={formData.email} onChange={handleChange} required 
                  />
                </div>
                <div className="mb-3">
                  <label>Phone Number</label>
                  <input 
                    type="tel" name="phone" className="form-control" 
                    value={formData.phone} onChange={handleChange} required 
                  />
                </div>
                <div className="mb-3">
                  <label>Message</label>
                  <textarea 
                    name="message" className="form-control" rows="4" 
                    value={formData.message} onChange={handleChange} required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>

                {status && <p className="text-center mt-3" style={{color: status.includes("Success") ? "green" : "red"}}>{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
