import React, { useState, useEffect } from "react";
import "./About.css";

// Import your images
import journeyImg from "../assets/about.jpg";
import teamImg from "../assets/team.jpg";
import visionImg from "../assets/vision.jpg";
import goalImg from "../assets/goal.jpg";
import valuesImg from "../assets/values.jpg";

function About() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if the welcome message has been shown in this session
    const hasSeenWelcome = sessionStorage.getItem("hasSeenWelcomeAbout");
    
    if (!hasSeenWelcome) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcomeAbout", "true");
    }
  }, []);

  return (
    <div className="about-page">
      
      {/* Journey / Who We Are Section */}
      <section className="about-row journey">
        <div className="about-image">
          <img src={journeyImg} alt="Glemberg Pharma Journey" />
        </div>
        <div className="about-content">
          {/* One-time Welcome Message */}
          {showWelcome && (
            <span className="welcome-tagline">Welcome to Glemberg Pharma</span>
          )}
          
          <h1>The Journey So Far</h1>
          <p>
            <strong>
              Glemberg Pharma is a name synonymous with trust and innovation
            </strong>{" "}
            in the global pharmaceutical landscape. Built on the core pillars of
            quality, safety, and purity, we go beyond manufacturing—we deliver a
            promise to improve lives. By adhering to rigorous WHO-GMP standards
            and stringent quality controls, we ensure that every life-saving
            innovation we produce meets the highest international benchmarks.
          </p>
          <p>
            Our mission is fueled by a dedicated team of scientists working 
            relentlessly to make healthcare both reliable and affordable. At 
            Glemberg Pharma, we are committed to enriching human life, ensuring 
            that world-class healthcare is accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Our Dedicated Team Section */}
      <section className="about-full">
        <h1>Our Dedicated Team</h1>
        <p>
          We are a committed team of scientists, researchers, and healthcare
          professionals working together to deliver high-quality, safe, and
          effective pharmaceutical solutions.
        </p>

        <div className="team-gallery">
          <img src={teamImg} alt="Team Member 1" />
          <img src={teamImg} alt="Team Member 2" />
          <img src={teamImg} alt="Team Member 3" />
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="about-row half reverse">
        <div className="about-image">
          <img src={visionImg} alt="Our Vision" />
        </div>
        <div className="about-content">
          <h1>Our Vision</h1>
          <h3>Pioneering innovation with Enduring trust</h3>
          <p>
            Our vision is rooted in the belief that standard is never enough. We
            are committed to pushing the boundaries of medical science through
            continuous research and development. By investing in modern
            technology, we aim to bring new, more effective therapies to market 
            that set entirely new benchmarks for the industry.
          </p>
        </div>
      </section>

      {/* Our Goal Section */}
      <section className="about-row half">
        <div className="about-image">
          <img src={goalImg} alt="Our Goal" />
        </div>
        <div className="about-content">
          <h1>Our Goal</h1>
          <h3>Advancing Global Health</h3>
          <p>
            Our goal is to address critical healthcare needs through continuous
            research, quality manufacturing, and patient-focused solutions. We 
            strive to be a global leader in providing accessible medicine.
          </p>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="about-row half reverse">
        <div className="about-image">
          <img src={valuesImg} alt="Our Core Values" />
        </div>
        <div className="about-content">
          <h1>Our Core Values</h1>
          <ul>
            <li>Innovation & Excellence</li>
            <li>Patient-Centric Care</li>
            <li>Quality & Safety</li>
            <li>Integrity & Transparency</li>
            <li>Commitment to Health</li>
          </ul>
        </div>
      </section>

    </div>
  );
}

export default About;
