import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo (2).jpg";
import "./navbar.css";

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

return ( <nav className="navbar"> <div className="navbar-inner"> <div className="logo-group"> <img src={logo} alt="Glemberg Pharma" className="navbar-logo" /> <span className="navbar-tagline">Science with a Human Touch</span> </div>

```
    {/* HAMBURGER BUTTON (ADDED) */}
    <div
      className="hamburger"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      ☰
    </div>

    {/* RIGHT MENU */}
    <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/about">About Us</NavLink></li>
      <li><NavLink to="/products">Products</NavLink></li>
      <li><NavLink to="/contact">Contact Us</NavLink></li>
    </ul>
  </div>
</nav>
```

);
}

export default Navbar;
