import React, { useEffect } from "react"; // Added useEffect
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; // Added useLocation
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import "./App.css";

// --- SCROLL TO TOP HELPER ---
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
// ----------------------------

function App() {
  return (
    <BrowserRouter>
      {/* Place it here so it runs on every route change */}
      <ScrollToTop />
      
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
