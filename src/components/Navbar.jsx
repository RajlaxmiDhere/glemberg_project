import { NavLink } from "react-router-dom";
import logo from "../assets/combined.jpg";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-tagline"></div>
        {/* GROUPED LOGO AND TAGLINE */}
        <div className="logo-group">
          <img src={logo} alt="Glemberg Pharma" className="navbar-logo" />
          <span className="navbar-tagline">Science with a human touch</span>
        </div>

        {/* RIGHT MENU */}
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
