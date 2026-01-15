import React, { useState, useEffect } from 'react';
import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if user has seen this during the current session
    const hasSeen = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeen) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }
  }, []);

  return (
    <section className="hero-video-section">
      {/* 1. The Video */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src={pillVideo} type="video/mp4" />
      </video>

      {/* 2. The Dark Overlay (important so text is visible) */}
      <div className="hero-overlay"></div>

      {/* 3. The Content (Z-index ensures this is on top) */}
      <div className="hero-content">
        {showWelcome && (
          <div className="welcome-tagline">Welcome to Glemberg Pharma</div>
        )}
        <h1>Committed to Better Healthcare</h1>
        <p>
          Glemberg Pharma delivers safe, effective, and innovative
          pharmaceutical solutions to improve lives.
        </p>
        <a href="/contact" className="hero-btn">Enquire Now</a>
      </div>
    </section>
  );
}

export default Home;
