import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
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

      <div className="top-social-inner">
  <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ "--hover-color": "#E4405F" }}>
    <i className="bi bi-instagram"></i>
  </a>
  <a href="https://wa.me/918010393478" target="_blank" rel="noreferrer" style={{ "--hover-color": "#25D366" }}>
    <i className="bi bi-whatsapp"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ "--hover-color": "#0A66C2" }}>
    <i className="bi bi-linkedin"></i>
  </a>
</div>

      {/* NAVBAR */}
      <Navbar />

      {/* ROUTES */}
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
