import { NavLink } from "react-router-dom";
import { FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Top Row */}
      <div className="navbar-top">
        <div className="logo">Glemberg Pharma</div>

        <div className="social-icons">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>

      {/* Bottom Row */}
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
