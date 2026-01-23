import React, { useRef, useState } from "react"; // Added useRef and useState
import emailjs from "@emailjs/browser"; // Import EmailJS
import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const phoneNumbers = ["+91 7559189020", "+91 8975173157"];
  const email = "glembergpharmaceuticals@gmail.com";
  const whatsappLink = `https://wa.me/917559189020?text=Hello! I have an enquiry regarding your services.`;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Replace these with your actual IDs from EmailJS dashboard
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          alert("Message sent successfully!");
          setIsSending(false);
          e.target.reset(); // Clears the form
      }, (error) => {
          alert("Failed to send message. Please try again.");
          setIsSending(false);
      });
  };

  return (
    <div className="contact-page-wrapper">
      <div className="container contact-top">
        <div className="row align-items-center">
          
          {/* LEFT: CONTACT INFO */}
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
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  View on Google Maps
                </a>
              </div>

              <h3 className="info-heading">Phone Number</h3>
              {phoneNumbers.map((num, index) => (
                <div className="info-value" key={index}>
                  <span className="icon-circle"><FaPhoneAlt /></span>
                  <a href={`tel:${num.replace(/\s/g, "")}`} className="contact-link">{num}</a>
                </div>
              ))}

              <h3 className="info-heading">Email</h3>
              <div className="info-value">
                <span className="icon-circle"><FaEnvelope /></span>
                <a href={`mailto:${email}`} className="contact-link">{email}</a>
              </div>

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-enquire-btn">
                <FaWhatsapp className="whatsapp-icon" /> Enquire Now
              </a>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="col-md-6">
            <div className="contact-form">
              <h4 className="text-center mb-4">Contact Us</h4>

              {/* Added ref and onSubmit */}
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label>Your Name</label>
                  {/* IMPORTANT: 'name' attributes must match EmailJS template placeholders */}
                  <input type="text" name="from_name" className="form-control" placeholder="Full Name" required />
                </div>

                <div className="mb-3">
                  <label>Email Address</label>
                  <input type="email" name="from_email" className="form-control" placeholder="Email Address" required />
                </div>

                <div className="mb-3">
                  <label>Phone Number</label>
                  <input type="tel" name="phone_number" className="form-control" placeholder="Phone Number" required />
                </div>

                <div className="mb-3">
                  <label>Message</label>
                  <textarea name="message" className="form-control" rows="4" placeholder="Your Message" required></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100" disabled={isSending}>
                  {isSending ? "Sending..." : "Submit"}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122180.3134651325!2d74.51010350419137!3d16.844445341257125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1230f8767709d%3A0xe673981977d46f55!2sSangli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000"
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
