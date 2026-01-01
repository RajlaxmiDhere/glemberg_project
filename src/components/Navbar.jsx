import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>PharmaCare</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
    </nav>
  );
}

export default Navbar;

