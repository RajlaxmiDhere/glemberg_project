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
            <div className="feature-text animate-text">
              <h2 className={`animate-line ${isVisible ? "delay-1" : ""}`}>
                Built on Science. Focused on Care.
              </h2>
              <p className={`feature-sub animate-line ${isVisible ? "delay-2" : ""}`}>
                Purpose-driven pharmaceutical solutions designed to support everyday healthcare needs.
              </p>
              <p className={`animate-line ${isVisible ? "delay-3" : ""}`}>
                Delivering trusted medicines across Orthopaedic, Dermatology, and General healthcare segments.
              </p>
              <NavLink 
                to="/about" 
                className={`feature-btn animate-line ${isVisible ? "delay-5" : ""}`}
              >
                Learn More
              </NavLink>
            </div>
            <div className="feature-image">
              <img src={featureImg} alt="Glemberg Healthcare" className="feature-main-img" />
            </div>
          </div>

          {/* ================= CATEGORY CARDS ================= */}
          <div className="category-section-header">
            <h2 className="category-main-title">Our Products</h2>
          </div>
          
          <div className="category-grid">
            <div className="category-card orange">
              <div className="category-image"><img src={generalImg} alt="General Care" /></div>
              <div className="category-info">
                <h3>General Care</h3>
                <p>Wide range of healthcare solutions</p>
                <NavLink to="/products#general" className="view-link">View products</NavLink>
              </div>
            </div>

            <div className="category-card teal">
              <div className="category-image"><img src={orthoImg} alt="Ortho Care" /></div>
              <div className="category-info">
                <h3>Ortho Care</h3>
                <p>Advanced bone and joint support</p>
                <NavLink to="/products#ortho" className="view-link">View products</NavLink>
              </div>
            </div>

            <div className="category-card blue-light">
              <div className="category-image"><img src={dermaImg} alt="Derma Care" /></div>
              <div className="category-info">
                <h3>Derma Care</h3>
                <p>Specialized skin health treatments</p>
                <NavLink to="/products#derma" className="view-link">View products</NavLink>
              </div>
            </div>
          </div>

          {/* ✅ ADDED: Learn More Button for Products Section */}
          <div className="product-explore-container">
             <NavLink to="/products" className="product-explore-btn">
               Explore All Products
             </NavLink>
          </div>

          {/* ✅ TRIGGER 2: Counting starts only when you scroll to this div */}
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
          {/* ✅ ADDED: Credentials / Trust Section */}
<div className="certification-trust-bar">
  <p className="cert-title">Quality & Compliance Standards</p>
  <div className="cert-logo-container">
    
 <div className="cert-item">
  <img src={fssaiLogo} alt="FSSAI" className="cert-logo-img" />
  <span>FSSAI Certified</span>
</div>

<div className="cert-item">
  <img src={whoGmpLogo} alt="WHO-GMP" className="cert-logo-img" />
  <span>WHO-GMP</span>
</div>

    <div className="cert-item">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png" alt="Government of India" className="cert-logo-img" />
      <span>Govt Approved</span>
    </div>

  </div>
</div>

<div className="credentials-section">
  <div className="credentials-card">
    <div className="cert-info">
      <h3>Corporate Certification</h3>
      <a href={certificate} target="_blank" rel="noopener noreferrer" className="view-cert-link">
        View Registration Certificate <i className="bi bi-file-earmark-pdf"></i>
      </a>
    </div>
    <div className="cert-action">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png" className="gov-logo" alt="GOI" />
    </div>
  </div>
</div>

        </div> 
      </section> 
    </>
  );
}

export default Home;
