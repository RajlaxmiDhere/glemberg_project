import React from "react";
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
      <div className="app-main-layout">
        
        {/* 1. TOP SOCIAL BAR - Full Width with Large Icons */}
        <div className="top-social-bar">
          <div className="social-icons-container">
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/145/145807.png" 
                className="social-logo" 
                alt="LinkedIn" 
              />
            </a>

            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" 
                className="social-logo" 
                alt="Instagram" 
              />
            </a>

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <img 
                src="https://cdn-icons-png.flaticon.com/512/145/145802.png" 
                className="social-logo" 
                alt="Facebook" 
              />
            </a>
          </div>
        </div>

        {/* 2. NAVIGATION BAR */}
        <Navbar />

        {/* 3. PAGE CONTENT ROUTES */}
        <div className="content-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;
