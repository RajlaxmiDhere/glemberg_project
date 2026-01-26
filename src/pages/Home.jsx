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
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const [products, setProducts] = useState(0);
  const [team, setTeam] = useState(0);
  const [clients, setClients] = useState(0);

  const featureRef = useRef(null);
  const statsRef = useRef(null);
  const hasAnimatedStats = useRef(false);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenWelcome");
    if (!hasSeen) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");
    }

    const textObserver = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedStats.current) {
          hasAnimatedStats.current = true;
          animateCount(setProducts, 20);
          animateCount(setTeam, 25);
          animateCount(setClients, 500);
        }
      },
      { threshold: 0.5 }
    );

    featureRef.current && textObserver.observe(featureRef.current);
    statsRef.current && statsObserver.observe(statsRef.current);

    return () => {
      featureRef.current && textObserver.unobserve(featureRef.current);
      statsRef.current && statsObserver.unobserve(statsRef.current);
    };
  }, []);

  const animateCount = (setter, target) => {
    let start = null;
    const duration = 1800;
    const step = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      setter(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero-video-section">
        <video
          className={`hero-video ${videoLoaded ? "loaded" : ""}`}
          autoPlay
          muted
          loop
          playsInline
          poster={featureImg}
          onCanPlayThrough={() => setVideoLoaded(true)}
        >
          <source src={pillVideo} type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          {showWelcome && <div className="welcome-tagline">Welcome to Glemberg Pharma</div>}
          <h1>Committed to Better Healthcare</h1>
          <p>
            Glemberg Pharma delivers safe, effective, and innovative pharmaceutical solutions to improve lives.
          </p>
        </div>
      </section>

      {/* ================= BELOW HERO ================= */}
      <section className="below-hero-section">
        <div className="below-hero-inner">

          {/* FEATURE */}
          <div
            ref={featureRef}
            className={`feature-section refined ${isVisible ? "show" : ""}`}
          >
            <div className="feature-text">
              <h2>Built on Science. Focused on Care.</h2>
              <p className="feature-sub">
                Purpose-driven pharmaceutical solutions designed to support everyday healthcare needs.
              </p>
              <p>
                Delivering trusted medicines across Orthopaedic, Dermatology, and General healthcare segments.
              </p>

              <NavLink to="/about" className="feature-btn">
                Learn More
              </NavLink>
            </div>

            <div className="feature-image">
              <img src={featureImg} alt="Healthcare" />
            </div>
          </div>

          {/* CATEGORY */}
          <div className="category-grid">
            <CategoryCard img={generalImg} title="General Care" desc="Wide range of healthcare solutions" link="/products#general" color="orange" />
            <CategoryCard img={orthoImg} title="Ortho Care" desc="Advanced bone & joint support" link="/products#ortho" color="teal" />
            <CategoryCard img={dermaImg} title="Derma Care" desc="Specialized skin treatments" link="/products#derma" color="blue-light" />
          </div>

          {/* STATS */}
          <div ref={statsRef} className="stats-modern">
            <Stat icon={<FaIndustry />} value={products} label="Products" />
            <Stat icon={<FaUserMd />} value={team} label="Team Members" />
            <Stat icon={<FaSmile />} value={clients} label="Happy Clients" />
          </div>

          {/* TRUST */}
          <div className="trust-section">
            <div className="trust-card">
              <div className="trust-left">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/512px-Emblem_of_India.svg.png"
                  alt="Govt"
                />
                <div>
                  <span>Government of India</span>
                  <strong>Ministry of Corporate Affairs</strong>
                </div>
              </div>

              <div className="trust-right">
                <p>Glemberg Pharma is a registered entity under the Companies Act.</p>
                <a href={certificate} target="_blank" rel="noreferrer">
                  View Certificate
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

/* Reusable */
const CategoryCard = ({ img, title, desc, link, color }) => (
  <div className={`category-card ${color}`}>
    <img src={img} alt={title} />
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <NavLink to={link}>View products</NavLink>
    </div>
  </div>
);

const Stat = ({ icon, value, label }) => (
  <div className="stat-card-modern">
    <div className="stat-icon">{icon}</div>
    <h2>{value}+</h2>
    <p>{label}</p>
  </div>
);

export default Home;
