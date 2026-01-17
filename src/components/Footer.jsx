import "./Footer.css";
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT: Logo + About */}
        <div className="footer-col">
          <img src={logo} alt="Glemberg Pharma Logo" className="footer-logo" />
          <p className="footer-tagline">
                Science with a Human Touch
           </p>
        </div>

        {/* MIDDLE: Contact */}
        <div className="footer-col">
          <h4>Contact</h4>

          <p className="footer-contact">
            📍Glemberg Pharma Pvt. Ltd.<br />
            Neminath Nagar,<br />
            Sangli, Maharashtra – 416416<br />
            India
          </p>

          <p className="footer-contact">
            📞 <a href="tel:+917559189020">+91 7559189020</a><br />
            📞 <a href="tel:+918975173157">+91 8975173157</a>
          </p>

          <p className="footer-contact">
  <span className="contact-icon">✉️</span>
  <a href="mailto:glembergpharmaceuticals@gmail.com">
    glembergpharmaceuticals@gmail.com
  </a>
</p>

          {/* Social Icons */}
          <div className="footer-social-row">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                className="footer-social-img"
              />
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="Instagram"
                className="footer-social-img"
              />
            </a>
          </div>
        </div>

        {/* RIGHT: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>

      </div>

      {/* FLOATING WHATSAPP BUTTON – FOOTER BOTTOM RIGHT */}
      <a
        href="https://wa.me/917559189020"
        target="_blank"
        rel="noreferrer"
        className="footer-whatsapp-float"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
        Enquire Now
      </a>

      {/* BOTTOM COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Glemberg Pharmaceuticals Pvt. Ltd.
        All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
