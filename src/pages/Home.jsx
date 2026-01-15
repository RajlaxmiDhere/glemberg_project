import React from 'react';
import './Home.css';
import pillVideo from '../assets/video1.mp4'; 

const Home= () => {
  return (
    <div className="video-container">
  <video
    className="background-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/your-video1.mp4" type="video/mp4" />
  </video>

  <div className="video-overlay"></div>

  <div className="video-content">
    <h1>Committed to Better Healthcare</h1>
    <p>
      Delivering safe, effective and innovative pharmaceutical
      solutions for a healthier tomorrow.
    </p>

    <a href="/contact" className="cta-btn">
      Enquire Now
    </a>
  </div>
</div>

  );
};

export default Home;
