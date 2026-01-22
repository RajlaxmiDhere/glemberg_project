import React, { useState, useEffect } from "react";
import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";
import { FaIndustry, FaUserMd, FaSmile } from "react-icons/fa";
import { NavLink } from "react-router-dom";

// Assets
import featureImg from "../assets/feature-medical.jpg";
import certificate from "../assets/Certificate of Incorporation Glemberg.pdf";

function Home() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [products, setProducts] = useState(0);
  const [team, setTeam] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeen) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }

    animateCount(setProducts, 20);
    animateCount(setTeam, 25);
    animateCount(setClients, 500);
  }, []);

  const animateCount = (setter, target) => {
    let startTime = null;
    const duration = 1800;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setter(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <>
      {/* ================= HERO VIDEO ================= */}
      <section className="hero-video-section">
        <video className="hero-video" autoPlay muted loop playsInline>
          <source src={pillVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          {showWelcome && (
            <div className="welcome-tagline">Welcome to Glemberg Pharma</div>
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

          {/* ================= FEATURE SECTION ================= */}
          <div className="feature-section">
            <div className="feature-text animate-text">
              <h2 className="animate-line delay-1">
                Built on Science. Focused on Care.
              </h2>

              <p className="feature-sub animate-line delay-2">
                Purpose-driven pharmaceutical solutions for everyday healthcare.
              </p>

              <p className="animate-line delay-3">
                Delivering reliable medicines across Orthopaedic, Dermatology,
                and General healthcare segments with uncompromised quality.
              </p>

              <NavLink to="/about" className="feature-btn animate-line delay-5">
                Learn More
              </NavLink>
            </div>

            {/* IMAGE */}
            <div className="feature-image">
              <img
                src={featureImg}
                alt="Patient care and medical support"
                className="feature-main-img"
              />
            </div>
          </div>

          {/* ================= DIVISION CARDS ================= */}
          <div className="division-cards">

            <div className="division-card general">
              <h3>General Healthcare</h3>
              <p>
                Comprehensive medicines for common medical conditions,
                supporting everyday health and recovery.
              </p>
              <NavLink to="/products?category=general" className="division-btn">
                View Products
              </NavLink>
            </div>

            <div className="division-card ortho">
              <h3>Orthopaedic Range</h3>
              <p>
                Advanced formulations designed to support bone, joint,
                and musculoskeletal health.
              </p>
              <NavLink to="/products?category=ortho" className="division-btn">
                View Products
              </NavLink>
            </div>

            <div className="division-card derma">
              <h3>Dermatology Range</h3>
              <p>
                Scientifically developed skincare solutions focused on
                safety, efficacy, and skin wellness.
              </p>
              <NavLink to="/products?category=derma" className="division-btn">
                View Products
              </NavLink>
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
