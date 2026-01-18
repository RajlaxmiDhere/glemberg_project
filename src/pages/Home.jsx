import React, { useState, useEffect } from "react";
import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";

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
      {/* =========================
         HERO VIDEO SECTION
         ========================= */}
      <section className="hero-video-section">
        {/* VIDEO */}
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={pillVideo} type="video/mp4" />
        </video>

        {/* OVERLAY */}
        <div className="hero-overlay"></div>

        {/* CONTENT */}
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

      {/* =========================
         BELOW HERO SECTION
         ========================= */}
      <section className="home-highlights">
        <h2 className="section-heading">Why Choose Glemberg Pharma</h2>

        <div className="highlights-grid">

          <div className="highlight-card">
            <h3>Quality Assurance</h3>
            <p>
              We follow strict quality standards to ensure safe,
              reliable, and effective pharmaceutical products.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Wide Product Range</h3>
            <p>
              A diverse portfolio covering general, ortho, and
              specialty healthcare needs.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Trusted Expertise</h3>
            <p>
              Backed by experienced professionals committed to
              improving healthcare outcomes.
            </p>
          </div>

          <div className="highlight-card">
            <h3>Customer Centric</h3>
            <p>
              We believe in long-term relationships built on trust,
              transparency, and care.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Home;
