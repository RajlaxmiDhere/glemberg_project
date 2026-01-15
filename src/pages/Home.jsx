import "./HeroVideo.css";
import pillVideo from "../assets/video1.mp4";
function Home() {
  return (
    <>
      {/* HERO VIDEO SECTION */}
      <section className="hero-video-section">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Content */}
        <div className="hero-content">
          <h1>Committed to Better Healthcare</h1>
          <p>
            Glemberg Pharma delivers safe, effective, and innovative
            pharmaceutical solutions to improve lives and build a healthier
            tomorrow.
          </p>

          <a href="/contact" className="hero-btn">
            Enquire Now
          </a>
        </div>
      </section>

      {/* REST OF HOME PAGE CONTENT CAN CONTINUE BELOW */}
    </>
  );
}

export default Home;
