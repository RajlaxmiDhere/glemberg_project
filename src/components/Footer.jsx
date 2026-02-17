import "./Footer.css";
import logo from "../assets/logo (2).jpg";
import { NavLink } from "react-router-dom";

/* ICONS */
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: Logo + Tagline */}
        <div className="footer-col">
          <img src={logo} alt="Glemberg Pharma Logo" className="footer-logo" />
          <p className="footer-tagline">
            Science with a Human Touch
          </p>
        </div>

        {/* MIDDLE: Office & Contact */}
        <div className="footer-col">
          <h4>Office</h4>

          <p className="footer-contact">
            <FaMapMarkerAlt />{" "}
            <strong>Glemberg Pharma Pvt. Ltd.</strong><br />
            Neminath Nagar,<br />
            Sangli, Maharashtra – 416416<br />
            India
          </p>

          <h4>Phone</h4>
          <p className="footer-contact">
            <FaPhoneAlt />{" "}
            <a href="tel:+917559189020">+91 7559189020</a><br />
          </p>

          <h4>Email</h4>
          <p className="footer-contact">
            <FaEnvelope />{" "}
            <a href="mailto:glembergpharmaceuticals@gmail.com">
              glembergpharmaceuticals@gmail.com
            </a>
          </p>
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

 
     

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Glemberg Pharmaceuticals Pvt. Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
