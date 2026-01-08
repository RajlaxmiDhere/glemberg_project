import { NavLink } from "react-router-dom";
import logo from "../assets/combined.jpg";
import "./navbar.css";

function Navbar() {
  return (
    <>
      {/* TOP SOCIAL BAR */}
      <div className="top-social-bar">
        <div className="social-bar-inner">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://wa.me/918010393478" target="_blank" rel="noreferrer">
            <i className="bi bi-whatsapp"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="navbar-inner">
          <img src={logo} alt="Glemberg Pharma" className="navbar-logo" />

          <ul className="nav-links">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
