import React from 'react';
import './Home.css';
import pillVideo from '../assets/home.mp4'; 

const Home= () => {
  return (
    <div className="video-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        {/* Use the imported variable here */}
        <source src={pillVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome</h1>
      </div>
    </div>
  );
};

export default Home;
