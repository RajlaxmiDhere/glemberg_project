import React from 'react';
import './Home.css';
import pillVideo from '../assets/video1.mp4'; 

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
     

      
    </div>
  );
};

export default Home;
