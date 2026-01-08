import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/combined.jpg";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Top Social Bar – only on Home */}
      {isHome && (
        <div className="top-social-bar">
          <div className="social-bar-inner">
            <a href="#" className="social-icon">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-whatsapp"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-inner">
          <img src={logo} alt="Company Logo" className="navbar-logo" />

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
