import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// ❌ REMOVED THE LINK TAG FROM HERE

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
     <div className="top-social-inner">
  <a href="https://instagram.com" target="_blank" rel="noreferrer">
    <i className="bi bi-instagram"></i>
  </a>

                <img
  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
  alt="Whatsapp"
  style={{ 
    width: "26px",      // 42px is too big for a button, 24px fits better
    height: "26px", 
    display: "block",    // Prevents weird spacing issues
    objectFit: "contain" // Ensures the logo doesn't stretch
  }}
/>

  <a href="https://linkedin.com" target="_blank" rel="noreferrer">
    <i className="bi bi-linkedin"></i>
  </a>
</div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
