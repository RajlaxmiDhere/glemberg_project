import React, { useState, useEffect } from "react";
import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";
import { FaIndustry, FaUserMd, FaSmile } from "react-icons/fa";


// Certificate PDF
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
      {/* ================= HERO VIDEO (UNCHANGED) ================= */}
      <section className="hero-video-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={pillVideo}
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

      {/* ================= BELOW HERO SECTION (FIXED ONLY HERE) ================= */}
      <section className="below-hero-section">

        <div className="below-hero-inner">

          {/* ================= STATS ================= */}
<div className="stats-modern">

  <div className="stat-card-modern blue">
    <FaIndustry className="stat-icon" />
    <h2>20+</h2>
    <p>Products</p>
  </div>

  <div className="stat-card-modern orange">
    <FaUserMd className="stat-icon" />
    <h2>25+</h2>
    <p>Team Members</p>
  </div>

  <div className="stat-card-modern purple">
    <FaSmile className="stat-icon" />
    <h2>500+</h2>
    <p>Happy Clients</p>
  </div>

</div>


          {/* QUALITY */}
          <div className="quality-section">
            <h2>International Quality Standards</h2>
            <p>
              We manufacture from certified partners, ensuring strict
              compliance with international quality and safety standards.
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
