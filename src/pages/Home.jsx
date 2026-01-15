import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4"; // This is the variable name

function Home() {
  return (
    <>
      <section className="hero-video-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          {/* CHANGE THIS LINE BELOW */}
          <source src={pillVideo} type="video/mp4" /> 
          Your browser does not support the video tag.
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1>Committed to Better Healthcare</h1>
          <p>
            Glemberg Pharma delivers safe, effective, and innovative
            pharmaceutical solutions...
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
