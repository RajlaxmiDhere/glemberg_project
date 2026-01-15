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
  );
}

export default Home;

