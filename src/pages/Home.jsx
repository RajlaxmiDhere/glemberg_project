import React from 'react';
// Adjust the number of dots (../) based on where your assets folder is
import pharmaVideo from '../assets/home_v.mp4'; 

function Home() {
  return (
    <div className="home-container">
      <div className="video-banner">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="hero-video"
        >
          <source src={pharmaVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="content-section">
        {/* Your other page content goes here */}
      </div>
    </div>
  );
}

export default Home;
