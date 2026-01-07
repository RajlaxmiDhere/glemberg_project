import { NavLink } from "react-router-dom";
import logo from "../assets/combined.jpg";   
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      {/* Top Row */}
      <div className="navbar-top">
        {/* Left: Logo */}
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo-img" />
          
        </div>
        </div>
    
      {/* Bottom Row */}
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/contact">Contact Us</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
