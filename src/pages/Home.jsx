import React, { useState, useEffect } from "react";
import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";

// certification logos (use your own images if available)
import certificate from "../assets/Certificate of Incorporation Glemberg.pdf";
function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeen) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }
  }, []);

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="hero-video-section">
        <video className="hero-video" autoPlay muted loop playsInline>
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

      {/* ================= STATS SECTION ================= */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-card blue">
            <h2>20+</h2>
            <p>Products</p>
          </div>

          <div className="stat-card orange">
            <h2>25+</h2>
            <p>Team Members</p>
          </div>

          <div className="stat-card purple">
            <h2>500+</h2>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      {/* ================= QUALITY STANDARDS ================= */}
      <section className="quality-section">
        <div className="quality-container">

          {/* LEFT */}
          <div className="quality-text">
            <h2>International Quality Standards</h2>
            <p>
              We manufacture from partners holding the following
              certifications, ensuring our commitment to superior
              standards in every aspect of production.
            </p>
          </div>

          {/* RIGHT */}
          <div className="quality-logos">
            <h4>Global Quality Certifications</h4>
            <div className="logo-grid">
              <img src={who} alt="WHO GMP" />
              <img src={fda} alt="FDA" />
              <img src={iso} alt="ISO" />
              <img src={iso2018} alt="ISO 2018" />
              <img src={fssai} alt="FSSAI" />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;

