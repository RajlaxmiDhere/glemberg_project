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
      <div className="top-social-bar">
        <div className="top-social-inner">
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram" style={{ "--logo-color": "#E4405F" }}></i>
          </a>
          <a href="https://wa.me/918975173157" target="_blank" rel="noreferrer">
            <i className="bi bi-whatsapp" style={{ "--logo-color": "#25D366" }}></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="bi bi-linkedin" style={{ "--logo-color": "#0A66C2" }}></i>
          </a>
        </div>
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
