import "./Footer.css";
import logo from "../assets/logo.jpg"; 

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT: Logo + About */}
        <div className="footer-col">
          <img src={logo} alt="Glemberg Pharma Logo" className="footer-logo" />
          <p className="footer-about">
            Glemberg Pharmaceuticals Pvt. Ltd. is committed to delivering
            high-quality, safe, and effective pharmaceutical products,
            improving lives through innovation, trust, and global standards.
          </p>
        </div>

        {/* MIDDLE: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* RIGHT: Contact + Social + WhatsApp */}
        <div className="footer-col">
          <h4>Contact</h4>

          <p className="footer-contact">
            📍<strong>Glemberg Pharma Pvt. Ltd.</strong><br />
              Neminath Nagar,<br />
              Sangli, Maharashtra – 416416<br />
              India
          </p>

          <p className="footer-contact">
            📞 <a href="tel: +91 7559189020"> +91 7559189020</a><br></br>
             📞 <a href="tel:+91 8975173157">+91 8975173157</a>
            
          </p>

          <p className="footer-contact">
            ✉️ <a href="mailto:glembergpharmaceuticals@gmail.com">
             glembergpharmaceuticals@gmail.com
            </a>
          </p>

          {/* Social Icons */}
              <div className="top-social-inner">
  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <i className="bi bi-instagram"></i>
  </a>

  <a href="https://wa.me/918975173157" target="_blank" rel="noreferrer">
    <i className="bi bi-whatsapp"></i>
  </a>

  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
    <i className="bi bi-linkedin"></i>
  </a>
</div>

          {/* WhatsApp Enquire Button */}
          <a
            href="https://wa.me/ +91 7559189020"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <i className="bi bi-whatsapp"></i>
            Enquire Now
          </a>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Glemberg Pharmaceuticals Pvt. Ltd.  
        All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;
