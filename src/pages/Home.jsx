import React, { useState, useEffect, useRef } from "react";
import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";
import { FaIndustry, FaUserMd, FaSmile } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Assets
import featureImg from "../assets/feature-medical.jpg";
import dermaImg from "../assets/derma_division.jpg"; 
import generalImg from "../assets/general_range.jpg";
import orthoImg from "../assets/ortho_division.jpg";
import certificate from "../assets/Certificate of Incorporation Glemberg.pdf";

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

  // ✅ Initializing states at 0
  const [products, setProducts] = useState(0);
  const [team, setTeam] = useState(0);
  const [clients, setClients] = useState(0);

  const featureRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeen) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }

    // ✅ INTERSECTION OBSERVER LOGIC
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        
        // When the user reaches this point on the website
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the text appearance

          // Start counting ONLY when this point is hit and only once
          if (!hasAnimated.current) {
            hasAnimated.current = true; 
            animateCount(setProducts, 20);
            animateCount(setTeam, 25);
            animateCount(setClients, 500);
          }
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) observer.unobserve(featureRef.current);
    };
  }, []);

  const animateCount = (setter, target) => {
    let startTime = null;
    const duration = 2000; // 2 seconds duration
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for a smooth finish
      const easeOutQuad = progress * (2 - progress);
      setter(Math.floor(easeOutQuad * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
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

      {/* ================= BELOW HERO ================= */}
      <section className="below-hero-section">
        <div className="below-hero-inner">
          
          {/* ✅ TRIGGER POINT: Counting and Text entry starts here */}
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
              <div className="category-image">
                <img src={generalImg} alt="General Care" />
              </div>
              <div className="category-info">
                <h3>General Care</h3>
                <p>Wide range of healthcare solutions</p>
                <NavLink to="/products#general" className="view-link">View products</NavLink>
              </div>
            </div>

            <div className="category-card teal">
              <div className="category-image">
                <img src={orthoImg} alt="Ortho Care" />
              </div>
              <div className="category-info">
                <h3>Ortho Care</h3>
                <p>Advanced bone and joint support</p>
                <NavLink to="/products#ortho" className="view-link">View products</NavLink>
              </div>
            </div>

            <div className="category-card blue-light">
              <div className="category-image">
                <img src={dermaImg} alt="Derma Care" />
              </div>
              <div className="category-info">
                <h3>Derma Care</h3>
                <p>Specialized skin health treatments</p>
                <NavLink to="/products#derma" className="view-link">View products</NavLink>
              </div>
            </div>
          </div>

          {/* ================= STATS ================= */}
          <div className="stats-modern">
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

        </div> 
      </section> 
    </>
  );
}

export default Home;
