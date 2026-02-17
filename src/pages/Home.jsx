import React, { useState, useEffect, useRef } from "react";
import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";
import { FaIndustry, FaUserMd, FaSmile } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Assets
// Add these at the top of Home.jsx with your other imports
import fssaiLogo from "../assets/fssai-seeklogo.png";
import whoGmpLogo from "../assets/WHO-GMP.jpg";
import featureImg from "../assets/feature-medical.jpg";
import dermaImg from "../assets/derma_division.jpg"; 
import generalImg from "../assets/general_range1.jpg";
import orthoImg from "../assets/ortho_division1.jpg";
import certificate from "../assets/Certificate of Incorporation Glemberg.pdf";

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

  // ✅ COUNT-UP STATES
  const [products, setProducts] = useState(0);
  const [team, setTeam] = useState(0);
  const [clients, setClients] = useState(0);

  // ✅ TWO SEPARATE REFS
  const featureRef = useRef(null); // Triggers "Built on Science"
  const statsRef = useRef(null);   // Triggers the actual counting
  const hasAnimatedStats = useRef(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeen) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedStats.current) {
          hasAnimatedStats.current = true; 
          animateCount(setProducts, 20);
          animateCount(setTeam, 25);
          animateCount(setClients, 500);
        }
      },
      { threshold: 0.5 } 
    );

    if (featureRef.current) textObserver.observe(featureRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);

    return () => {
      if (featureRef.current) textObserver.unobserve(featureRef.current);
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
    };
  }, []);

  const animateCount = (setter, target) => {
    let startTime = null;
    const duration = 2000; 
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = progress * (2 - progress);
      setter(Math.floor(easeOutQuad * target));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  return (
    <>
      {/* ================= HERO VIDEO ================= */}
      <section className="hero-video-section">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto">
          <source src={pillVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {showWelcome && <div className="welcome-tagline">Welcome to Glemberg Pharma</div>}
          <h1>Committed to Better Healthcare</h1>
          <p>Glemberg Pharma delivers safe, effective, and innovative pharmaceutical solutions to improve lives.</p>
        </div>
      </section>

      <section className="below-hero-section">
        <div className="below-hero-inner">
          
{/* ✅ TRIGGER 1: Text entrance */}
<div 
  className={`feature-section ${isVisible ? "is-visible" : "is-hidden"}`} 
  ref={featureRef}
>
  <div className="feature-text-container">
    <h2 className={`animate-line ${isVisible ? "delay-1" : ""}`}>
      Built on Science. <br/> 
      <span className="text-highlight">Focused on Care.</span>
    </h2>
    
    <div className={`feature-accent-box animate-line ${isVisible ? "delay-2" : ""}`}>
      <p className="feature-sub">
        Purpose-driven pharmaceutical solutions designed to support everyday healthcare needs.
      </p>
    </div>

    <p className={`feature-description animate-line ${isVisible ? "delay-3" : ""}`}>
      Delivering trusted medicines across Orthopaedic, Dermatology, and General healthcare segments.
    </p>

    <div className={`animate-line ${isVisible ? "delay-5" : ""}`}>
      <NavLink to="/about" className="feature-btn">
        Learn More
      </NavLink>
    </div>
  </div>

  <div className="feature-image">
    <div className="image-border-deco">
       <img src={featureImg} alt="Glemberg Healthcare" className="feature-main-img" />
    </div>
  </div>
</div>
{/* ================= PRODUCTS SECTION ================= */}
<section className="products-container-modern">
  <div className="products-header">
    <div className="header-text-group">
      <h2 className="category-main-title">Our Products</h2>
      <p className="category-subtitle">
        Our diverse product portfolio covers specialized divisions including  
        general,ortho,darma care. Each category is developed with 
        precision, ensuring quality, safety, and efficacy to meet global healthcare needs.
      </p>
    </div>
    <NavLink to="/products" className="learn-more-pill">
      Learn More <span>↗</span>
    </NavLink>
  </div>

  <div className="category-grid">
    {/* Cardiac Care (Mapping your General Care data or adding new) */}
    <div className="category-card">
      <div className="category-image">
        <img src={generalImg} alt="General Care" />
      </div>
      <div className="category-info cardiac">
        <h3>General Care</h3>
        <p>Advanced solutions for cardiovascular health.</p>
        <NavLink to="/products#general" className="view-link">View Products</NavLink>
      </div>
    </div>

    {/* Diabetic Care */}
    <div className="category-card">
      <div className="category-image">
        <img src={orthoImg} alt="Ortho Care" />
      </div>
      <div className="category-info diabetic">
        <h3>Ortho Care</h3>
        <p>Comprehensive management for metabolic health.</p>
        <NavLink to="/products#ortho" className="view-link">View Products</NavLink>
      </div>
    </div>

    {/* Neuro Care */}
    <div className="category-card">
      <div className="category-image">
        <img src={dermaImg} alt="Darma Care" />
      </div>
      <div className="category-info neuro">
        <h3>Darma Care</h3>
        <p>Innovative treatments for neurological wellbeing.</p>
        <NavLink to="/products#derma" className="view-link">View Products</NavLink>
      </div>
    </div>
  </div>
</section>

          {/* ================= STATS SECTION ================= */}
          <div className="stats-modern" ref={statsRef}>
            <div className="stat-card-modern blue">
              <FaIndustry className="stat-icon" />
              <h2>{products}+</h2>
              <p>Products</p>
            </div>
            <div className="stat-card-modern orange">
              <FaUserMd className="stat-icon" />
              <h2>{team}+</h2>
              <p>Team Members</p>
            </div>
            <div className="stat-card-modern purple">
              <FaSmile className="stat-icon" />
              <h2>{clients}+</h2>
              <p>Happy Clients</p>
            </div>
          </div>
          
          {/* ================= CORPORATE ROW ================= */}
          <div className="corporate-row">
            <div className="corporate-cert-card">
              <div className="corporate-cert-logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png" className="gov-logo" alt="GOI" />
              </div>
              <div className="corporate-cert-info">
                <h3>Corporate Certification</h3>
                <p>Glemberg Pharma Pvt. Ltd. is officially registered and compliant with Indian corporate regulatory standards.</p>
                <a href={certificate} target="_blank" rel="noopener noreferrer" className="view-cert-link">View Registration Certificate</a>
              </div>
            </div>

            <div className="trust-side">
              <h3 className="trust-title">Quality & Compliance Standards</h3>
              <div className="trust-logos">
                <div className="trust-item who">
                  <img src={whoGmpLogo} className="cert-logo-img" alt="WHO GMP"/>
                </div>
                <div className="trust-item">
                  <img src={fssaiLogo} className="cert-logo-img" alt="FSSAI"/>
                </div>
                <div className="trust-item">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png" className="cert-logo-img" alt="Government" />
                </div>
              </div>
            </div>
          </div>
        </div> {/* ✅ Closes below-hero-inner */}
      </section> {/* ✅ Closes below-hero-section */}
    </>
  );
}

export default Home;
