import React, { useState, useEffect, useRef } from "react";
import "./HeroVideo.css";
import pillVideo from "../assets/head2.jpg";
import { FaIndustry, FaUserMd, FaSmile } from "react-icons/fa";
import { NavLink } from "react-router-dom";

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

  const [products, setProducts] = useState(0);
  const [team, setTeam] = useState(0);
  const [clients, setClients] = useState(0);

  const featureRef = useRef(null);
  const statsRef = useRef(null);
  const hasAnimatedStats = useRef(false);

  useEffect(() => {

    const hasSeen = sessionStorage.getItem("hasSeenWelcome");

    if (!hasSeen) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
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
    {/* HERO SECTION WITH IMAGE */}
<section className="hero-video-section">
  {/* Changed video to img */}
  <img src={pillVideo} alt="Healthcare Banner" className="hero-video" />

  {/* 1. Lighten or remove this overlay if the image is too dark */}
  <div className="hero-overlay"></div>

  <div className="hero-content">
    {showWelcome && <div className="welcome-tagline">Welcome to Glemberg Pharma</div>}
    <h1>Committed to Better Healthcare</h1>
    <p>Glemberg Pharma delivers safe, effective, and innovative pharmaceutical solutions to improve lives.</p>
  </div>
</section>

      <section className="below-hero-section">
        <div className="below-hero-inner">

{/* ✅ FEATURE SECTION (UPDATED ONLY THIS PART) */}

<div 
  className={`feature-section ${isVisible ? "is-visible" : "is-hidden"}`} 
  ref={featureRef}
>

  <div className="feature-text-container">

    {/* ⭐ NEW WRAPPER */}
    <div className="feature-text-wrapper">

      <h2 className={`feature-big animate-line ${isVisible ? "delay-1" : ""}`}>
        Built on Science. Focused on Care.
      </h2>

      <p className={`feature-medium animate-line ${isVisible ? "delay-2" : ""}`}>
        Purpose-driven pharmaceutical solutions designed to support everyday healthcare needs.
      </p>

      <p className={`feature-small animate-line ${isVisible ? "delay-3" : ""}`}>
        Delivering trusted medicines across Orthopaedic, Dermatology, and General healthcare segments.
      </p>

    </div>

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

{/* PRODUCTS SECTION (UNCHANGED) */}
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
      Learn More
    </NavLink>
  </div>

  <div className="category-grid">
    <div className="category-card">
      <div className="category-image">
        <img src={generalImg} alt="General Care" />
      </div>
      <div className="category-info cardiac">
        <h3>General Care</h3>
                <NavLink to="/products#general" className="view-link">View Products</NavLink>
      </div>
    </div>

    <div className="category-card">
      <div className="category-image">
        <img src={orthoImg} alt="Ortho Care" />
      </div>
      <div className="category-info diabetic">
        <h3>Ortho Care</h3>
       
        <NavLink to="/products#ortho" className="view-link">View Products</NavLink>
      </div>
    </div>

    <div className="category-card">
      <div className="category-image">
        <img src={dermaImg} alt="Derma Care" />
      </div>
      <div className="category-info neuro">
        <h3>Darma Care</h3>
       
        <NavLink to="/products#derma" className="view-link">View Products</NavLink>
      </div>
    </div>
  </div>
</section>

{/* REST CODE UNCHANGED BELOW */}

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

        </div>
      </section>
    </>
  );
}

export default Home;
