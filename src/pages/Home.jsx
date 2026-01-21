import React, { useState, useEffect } from "react";
import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";
import { FaIndustry, FaUserMd, FaSmile } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Certificate PDF
import certificate from "../assets/Certificate of Incorporation Glemberg.pdf";

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  // ✅ COUNT-UP STATES
  const [products, setProducts] = useState(0);
  const [team, setTeam] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeen) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }

    // ✅ Start all counters
    animateCount(setProducts, 20);
    animateCount(setTeam, 25);
    animateCount(setClients, 500);
  }, []);

  // 🔹 Smooth counter function using requestAnimationFrame
  const animateCount = (setter, target) => {
    let startTime = null;
    const duration = 5000; // 2 seconds for all animations

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setter(Math.floor(progress * target));
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
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={pillVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          {showWelcome && (
            <div className="welcome-tagline">
              Welcome to Glemberg Pharma
            </div>
          )}
          <h1>Committed to Better Healthcare</h1>
          <p>
            Glemberg Pharma delivers safe, effective, and innovative
            pharmaceutical solutions to improve lives.
          </p>
        </div>
      </section>

      {/* ================= BELOW HERO ================= */}
      <section className="below-hero-section">
        <div className="below-hero-inner">

          {/* ================= FEATURE INTRO ================= */}
          <div className="feature-section">
            <div className="feature-text animate-text">
              <h2 className="animate-line delay-1">
                Built on Science. Focused on Care.
              </h2>

              <p className="feature-sub animate-line delay-2">
                Purpose-driven pharmaceutical solutions designed to support
                everyday healthcare needs.
              </p>

              <p className="animate-line delay-3">
                Delivering trusted medicines across Orthopaedic, Dermatology,
                and General healthcare segments.
              </p>

              <p className="animate-line delay-4">
                From development to delivery, our focus remains on safety,
                consistency, and real-world clinical reliability.
              </p>

              <NavLink
                to="/about"
                className="feature-btn animate-line delay-5"
              >
                Learn More
              </NavLink>
            </div>

            <div className="feature-image">
              <div className="image-placeholder">
                Image Area
              </div>
            </div>
          </div>

          {/* ================= STATS (COUNT-UP) ================= */}
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

          {/* ================= QUALITY ================= */}
          <div className="quality-section">
            <h2>International Quality Standards</h2>
            <p>
              We manufacture from certified partners, ensuring strict compliance
              with international quality and safety standards.
            </p>

            <a
              href={certificate}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate of Incorporation
            </a>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
