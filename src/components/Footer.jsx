import "./Footer.css";
import logo from "../assets/logo.jpg"; // your company logo

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

        {/* MIDDLE: Contact */}
        <div className="footer-col footer-contact-col">
          <h4>Contact</h4>

          <p className="footer-contact">
            📍 <strong>Glemberg Pharma Pvt. Ltd.</strong><br />
            Neminath Nagar,<br />
            Sangli, Maharashtra – 416416<br />
            India
          </p>

          <p className="footer-contact">
            📞 <a href="tel:+917559189020">+91 7559189020</a><br />
            📞 <a href="tel:+918975173157">+91 8975173157</a>
          </p>

          <p className="footer-contact">
            ✉️ <a href="mailto:glembergpharmaceuticals@gmail.com">
              glembergpharmaceuticals@gmail.com
            </a>
          </p>

          {/* Social Icons (LinkedIn + Instagram in one line) */}
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

          {/* Enquire Button aligned to right */}
          <div className="footer-enquire-right">
            <a
              href="https://wa.me/917559189020"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* RIGHT: Quick Links */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
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
