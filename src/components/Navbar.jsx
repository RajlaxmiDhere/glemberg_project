import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/combined.jpg";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      {/* Top Social Bar – ONLY on Home */}
      {isHome && (
        <div className="top-social-bar">
          <div className="container d-flex justify-content-end gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-white fs-5"
            >
              <i className="bi bi-instagram"></i>
            </a>

            <a
              href="https://wa.me/918010393478"
              target="_blank"
              rel="noreferrer"
              className="text-white fs-5"
            >
              <i className="bi bi-whatsapp"></i>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-white fs-5"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-top">
          <div className="logo-container">
            <img src={logo} alt="Company Logo" className="logo-img" />
          </div>
        </div>

        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
