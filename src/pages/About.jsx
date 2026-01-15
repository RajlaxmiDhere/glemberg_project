import React, { useState, useEffect } from 'react';
import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the welcome message in this session
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcome");

    if (!hasSeenWelcome) {
      setShowWelcome(true);
      // Set the flag so it doesn't show again
      sessionStorage.setItem("hasSeenWelcome", "true");
    }
  }, []);

  return (
    <>
      <section className="hero-video-section">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={pillVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          {/* Render the welcome text only if showWelcome is true */}
          {showWelcome && (
            <p className="welcome-tagline">Welcome to Glemberg Pharma</p>
          )}
          
          <h1>Committed to Better Healthcare</h1>
          <p>
            Glemberg Pharma delivers safe, effective, and innovative
            pharmaceutical solutions to improve lives and build a healthier
            tomorrow.
          </p>

          <a href="/contact" className="hero-btn">
            Enquire Now
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
