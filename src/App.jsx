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
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
      alt="Instagram"
      style={{ width: "26px", height: "26px", display: "block", objectFit: "contain" }}
    />
  </a>

               <a href="https://wa.me/918975173157" target="_blank" rel="noreferrer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
      alt="Whatsapp"
      style={{ width: "30px", height: "30px", display: "block", objectFit: "contain" }}
    />
  </a>

<a href="https://linkedin.com" target="_blank" rel="noreferrer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
      alt="LinkedIn"
      style={{ width: "26px", height: "26px", display: "block", objectFit: "contain" }}
    />
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
