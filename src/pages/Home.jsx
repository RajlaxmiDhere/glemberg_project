import React, { useState, useEffect } from "react";
import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";

// Certificate PDF
import certificate from "../assets/Certificate of Incorporation Glemberg.pdf";

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [count, setCount] = useState({
    products: 0,
    team: 0,
    clients: 0,
  });

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeen) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }

    // Counter animation
    let p = 0, t = 0, c = 0;
    const interval = setInterval(() => {
      if (p < 20) p++;
      if (t < 25) t++;
      if (c < 500) c += 10;

      setCount({
        products: p,
        team: t,
        clients: c,
      });

      if (p === 20 && t === 25 && c === 500) {
        clearInterval(interval);
      }
    }, 40);

    return () => clearInterval(interval);
  }, []);

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

      {/* ================= BELOW HERO SECTION ================= */}
      <section className="below-hero-section">

        {/* FEATURE / STATS */}
        <div className="feature-wrapper">
          <div className="feature-card">
            <h2>{count.products}+</h2>
            <p>Quality Products</p>
          </div>

          <div className="feature-card">
            <h2>{count.team}+</h2>
            <p>Experienced Professionals</p>
          </div>

          <div className="feature-card">
            <h2>{count.clients}+</h2>
            <p>Trusted Clients</p>
          </div>
        </div>

        {/* QUALITY */}
        <div className="quality-highlight">
          <h2>International Quality Standards</h2>
          <p>
            We partner with certified manufacturers and follow strict global
            quality norms to ensure safety, efficacy, and reliability in every
            product we deliver.
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

      </section>
    </>
  );
}

export default Home;
