import React, { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import { FaWhatsapp } from "react-icons/fa";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* ⭐ WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/917559189020"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-whatsapp-float"
      >
        <FaWhatsapp />
        Enquire Now
      </a>

      <Footer />
    </HashRouter>
  );
}

export default App;