import React, { useState, useEffect, useRef } from "react";
import "./HeroVideo.css";
// Ensure the video file name and path are exactly correct in your assets folder
import pillVideo from "../assets/introv_sUQGXCwy (online-video-cutter.com).mp4";
import { FaIndustry, FaUserMd, FaSmile, FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Standard image imports
import fssaiLogo from "../assets/fssai-seeklogo.png";
import whoGmpLogo from "../assets/WHO-GMP.jpg";
import emblem from "../assets/Emblem_of_india.png";
import featureImg from "../assets/feature-medical.jpg";
import dermaImg from "../assets/derma_division.jpg"; 
import generalImg from "../assets/general_range1.jpg";
import orthoImg from "../assets/ortho_division1.jpg";

// PDF import
import certificate from "../assets/Certificate of Incorporation Glemberg.pdf";

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

  // State for animated statistics counts
  const [products, setProducts] = useState(0);
  const [team, setTeam] = useState(0);
  const [clients, setClients] = useState(0);
  
  // State for the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for Intersection Observers
  const featureRef = useRef(null);
  const statsRef = useRef(null);
  const hasAnimatedStats = useRef(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Check if the user has seen the welcome message in this session
    const hasSeen = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeen) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }

    // Observer for feature section animations
    const textObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 } // Triggers when 20% of the element is visible
    );

    // Observer for statistics counting animation
    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedStats.current) {
          hasAnimatedStats.current = true; // Prevents re-animation
          animateCount(setProducts, 9); // Animate Products count to 20
          animateCount(setTeam, 11);     // Animate Team count to 25
          animateCount(setClients, 500);  // Animate Clients count to 500
        }
      },
      { threshold: 0.5 } // Triggers when 50% of the element is visible
    );

    // Start observing if the references exist
    if (featureRef.current) textObserver.observe(featureRef.current);
    if (statsRef.current) statsObserver.observe(statsRef.current);

    // Clean up observers on component unmount
    return () => {
      if (featureRef.current) textObserver.unobserve(featureRef.current);
      if (statsRef.current) statsObserver.unobserve(statsRef.current);
    };
  }, []); // Empty dependency array means this runs once on mount

  // Helper function to animate number counting
  const animateCount = (setter, target) => {
    let startTime = null;
    const duration = 2000; // Animation lasts 2 seconds
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = progress * (2 - progress); // Easing function for smooth animation
      setter(Math.floor(easeOutQuad * target));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  };

  return (
    <>
      <section className="hero-video-section">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          key={pillVideo} // Helps React reload the video if the source changes
          className="hero-video"
        >
          <source src={pillVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          {showWelcome && <div className="welcome-tagline">Welcome to Glemberg Pharma</div>}
          <h1>Committed to Better Healthcare</h1>
          <p>Glemberg Pharmaceuticals delivers safe, effective, and innovative pharmaceutical solutions to improve lives.</p>
        </div>
      </section>

      <section className="below-hero-section">
        <div className="below-hero-inner">
          {/* Feature section with entry animations */}
          <div className={`feature-section ${isVisible ? "is-visible" : "is-hidden"}`} ref={featureRef}>
            <div className="feature-text-container">
              <div className="feature-text-wrapper">
                <h2 className={`feature-big animate-line ${isVisible ? "delay-1" : ""}`}>Built on Science. Focused on Care.</h2>
                <p className={`feature-medium animate-line ${isVisible ? "delay-2" : ""}`}>Purpose-driven pharmaceutical solutions designed to support everyday healthcare needs.</p>
                <p className={`feature-small animate-line ${isVisible ? "delay-3" : ""}`}>Delivering trusted medicines across Orthopaedic, Dermatology, and General healthcare segments.</p>
              </div>
              <div className={`animate-line ${isVisible ? "delay-5" : ""}`}>
                <NavLink to="/about" className="feature-btn">Learn More</NavLink>
              </div>
            </div>
            <div className="feature-image">
              <div className="image-border-deco">
                <img src={featureImg} alt="Glemberg Healthcare" className="feature-main-img" />
              </div>
            </div>
          </div>

          {/* Products overview section */}
          <section className="products-container-modern">
            <div className="products-header">
              <div className="header-text-group">
                <h2 className="category-main-title">Our Products</h2>
                <p className="category-subtitle">Our diverse product portfolio covers specialized divisions including general, ortho, and derma care.</p>
              </div>
              <NavLink to="/products" className="learn-more-pill">Learn More</NavLink>
            </div>

            {/* Grid of product categories */}
            <div className="category-grid">
              <div className="category-card">
                <div className="category-image"><img src={generalImg} alt="General Care" /></div>
                <div className="category-info general"><h3>General Care</h3><NavLink to="/products#general" className="view-link">View Products</NavLink></div>
              </div>
              <div className="category-card">
                <div className="category-image"><img src={orthoImg} alt="Ortho Care" /></div>
                <div className="category-info ortho"><h3>Ortho Care</h3><NavLink to="/products#ortho" className="view-link">View Products</NavLink></div>
              </div>
              <div className="category-card">
                <div className="category-image"><img src={dermaImg} alt="Derma Care" /></div>
                <div className="category-info derma"><h3>Derma Care</h3><NavLink to="/products#derma" className="view-link">View Products</NavLink></div>
              </div>
            </div>
          </section>

          {/* Statistics section with animated counters */}
          <div className="stats-modern" ref={statsRef}>
            <div className="stat-card-modern blue"><FaIndustry className="stat-icon" /><h2>{products}+</h2><p>Products</p></div>
            <div className="stat-card-modern orange"><FaUserMd className="stat-icon" /><h2>{team}+</h2><p>Team Members</p></div>
            <div className="stat-card-modern purple"><FaSmile className="stat-icon" /><h2>{clients}+</h2><p>Happy Clients</p></div>
          </div>

          {/* Certification sections */}
         
         {/* Certifications and Quality Standards Row */}
          <div className="certifications-row">
            <div className="corporate-cert-card">
              <div className="corporate-cert-logo">
                <img src={emblem} className="gov-logo" alt="Government of India Emblem" />
              </div>
              <div className="corporate-cert-info">
                <h3>Corporate Certification</h3>
                <p>Glemberg Pharmaceuticals Pvt. Ltd. is officially registered and compliant.</p>
                <a href={certificate} target="_blank" rel="noopener noreferrer" className="view-cert-link">
                  View Registration Certificate
                </a>
              </div>
            </div>
            
            <div className="trust-side">
              <h3 className="trust-title">Quality Standards</h3>
              <div className="trust-logos">
                <div className="trust-item who">
                  <img src={whoGmpLogo} className="cert-logo-img" alt="WHO GMP Certified"/>
                </div>
                <div className="trust-item fssai">
                  <img src={fssaiLogo} className="cert-logo-img" alt="FSSAI Certified"/>
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
