import { NavLink } from "react-router-dom";
import logo from "../assets/combined.jpg";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* LEFT: Company Logo */}
        <img src={logo} alt="Glemberg Pharma" className="navbar-logo" />

        {/* RIGHT: Menu */}
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
