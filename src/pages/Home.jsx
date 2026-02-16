import React, { useState, useEffect, useRef } from "react";
import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";
import {
  FaIndustry,
  FaUserMd,
  FaSmile
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Assets
import featureImg from "../assets/feature-medical.jpg";
import dermaImg from "../assets/derma_division.jpg";
import generalImg from "../assets/general_range.jpg";
import orthoImg from "../assets/ortho_division.jpg";
import certificate from "../assets/Certificate of Incorporation Glemberg.pdf";

function Home() {
  // State management
  const [showWelcome, setShowWelcome] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Count-up states
  const [products, setProducts] = useState(0);
  const [team, setTeam] = useState(0);
  const [clients, setClients] = useState(0);

  // Refs for scroll animations
  const featureRef = useRef(null); 
  const statsRef = useRef(null);   
  const hasAnimatedStats = useRef(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeen) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }

    const textObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    const statsObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimatedStats.current) {
        hasAnimatedStats.current = true;
        animateCount(setProducts, 20);
        animateCount(setTeam, 25);
        animateCount(setClients, 500);
      }
    }, { threshold: 0.5 });

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
      {/* ================= HERO VIDEO SECTION ================= */}
      <section className="hero-video-section">
        <video className="hero-video" autoPlay muted loop playsInline preload="auto">
          <source src={pillVideo} type="video/mp4" />
        </video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {showWelcome && <div className="welcome-tagline">Welcome to Glemberg Pharma</div>}
          <h1>Committed to Better Healthcare</h1>
          <p>Glemberg Pharma delivers safe, effective, and innovative pharmaceutical solutions.</p>
        </div>
      </section>

      <section className="below-hero-section">
        <div className="below-hero-inner">
          
          {/* ================= FEATURE SECTION ================= */}
          <div className={`feature-section ${isVisible ? "is-visible" : "is-hidden"}`} ref={featureRef}>
            <div className="feature-text animate-text">
              <h2 className={`animate-line ${isVisible ? "delay-1" : ""}`}>Built on Science. Focused on Care.</h2>
              <h3 className={`feature-sub animate-line ${isVisible ? "delay-2" : ""}`}>Purpose-driven pharmaceutical solutions.</h3>
              <p className={`animate-line ${isVisible ? "delay-3" : ""}`}>Delivering trusted medicines across Orthopaedic, Dermatology, and General healthcare segments.</p>
              <NavLink to="/about" className="feature-btn">Learn More</NavLink>
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
                <NavLink to="/products#general" className="view-link">View products</NavLink>
              </div>
            </div>
            <div className="category-card teal">
              <div className="category-image"><img src={orthoImg} alt="Ortho Care" /></div>
              <div className="category-info">
                <h3>Ortho Care</h3>
                <NavLink to="/products#ortho" className="view-link">View products</NavLink>
              </div>
            </div>
            <div className="category-card blue-light">
              <div className="category-image"><img src={dermaImg} alt="Derma Care" /></div>
              <div className="category-info">
                <h3>Derma Care</h3>
                <NavLink to="/products#derma" className="view-link">View products</NavLink>
              </div>
            </div>
          </div>

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

{/* ================= INTERNATIONAL QUALITY STANDARDS ================= */}
<div className="quality-standards-section">
  <div className="quality-content">
    <div className="quality-text">
      <h2>International Quality Standards</h2>
      <p>
        We manufacture from partners holding the following certifications, 
        ensuring our commitment to superior standards in every aspect of production.
      </p>
    </div>

    <div className="certifications-grid">
      {/* WHO-GMP */}
      <div className="cert-card">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/WHO_Logo.svg/1200px-WHO_Logo.svg.png" 
          alt="WHO-GMP" 
        />
        <span className="cert-name">WHO-GMP</span>
      </div>

      {/* FDA */}
      <div className="cert-card">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/US_FDA_logo.svg/1200px-US_FDA_logo.svg.png" 
          alt="U.S. FDA" 
        />
      </div>

      {/* ISO 9001 */}
      <div className="cert-card">
        <div className="iso-seal">
          <div className="iso-inner">
            <span>CERTIFIED</span>
            <strong>ISO</strong>
            <span>9001:2015</span>
          </div>
        </div>
        <span className="cert-name">ISO 9001:2015</span>
      </div>

      {/* FSSAI */}
      <div className="cert-card">
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/FSSAI_logo.svg/1200px-FSSAI_logo.svg.png" 
          alt="FSSAI" 
        />
      </div>

      {/* ISO 22000 */}
      <div className="cert-card">
        <div className="iso-seal blue">
          <div className="iso-inner">
            <span>CERTIFIED</span>
            <strong>ISO</strong>
            <span>22000:2018</span>
          </div>
        </div>
        <span className="cert-name">ISO 22000:2018</span>
      </div>
    </div>
  </div>
</div> {/* Closing credentials-section */}

        </div> {/* Closing below-hero-inner */}
      </section> {/* Closing below-hero-section */}
    </>
  );
}

export default Home;
