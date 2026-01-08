import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      {/* 1. The Top Line with Logos - Now inside the return and wrapped */}
      <div className="top-social-bar">
        <div className="social-icons-container">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" className="social-logo" alt="LinkedIn" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" className="social-logo" alt="Instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" className="social-logo" alt="Facebook" />
          </a>
        </div>
      </div>

      {/* 2. Navigation Menu */}
      <Navbar />

      {/* 3. Page Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
