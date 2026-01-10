import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: Company Info */}
        <div className="footer-section">
          <h4>Glemberg Pharmaceuticals Pvt. Ltd.</h4>
          <p>
            Committed to quality healthcare solutions with trust,
            innovation, and global standards.
          </p>
        </div>

        {/* MIDDLE: Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* RIGHT: Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📍 Sangli, Maharashtra, India</p>
          <p>📞 +91 80103 93478</p>
          <p>✉️ info@glembergpharma.com</p>
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
