import "./About.css";
import aboutImg from "../assets/about.jpg";
import teamImg from "../assets/team.jpg";
import visionImg from "../assets/vision.jpg";
import goalImg from "../assets/goal.jpg";
import valuesImg from "../assets/values.jpg";

function About() {
  return (
    <div className="about-page">

      {/* WHO WE ARE */}
      <section className="about-row">
        <div className="about-image">
          <img src={aboutImg} alt="About Glemberg Pharma" />
        </div>
        <div className="about-content">
          <h2>Who We Are</h2>
          <p>
            Glemberg Pharma believes that every innovation begins with a promise —
            a promise to improve lives and build a healthier tomorrow. Our
            foundation is built on strong principles of innovation, quality,
            safety, purity, and efficacy.
          </p>
          <p>
            Over the years, Glemberg Pharma has emerged as a trusted name in
            ethical pharmaceutical products across India and beyond, delivering
            reliable and affordable healthcare solutions.
          </p>
        </div>
      </section>

      {/* OUR DEDICATED TEAM */}
      <section className="about-full">
        <h2>Our Dedicated Team</h2>
        <p>
          We are a passionate team of scientists, researchers, healthcare
          professionals, and industry experts working together to create
          high-quality pharmaceutical products that improve patient lives.
        </p>

        <div className="team-gallery">
          <img src={teamImg} alt="Team 1" />
          <img src={teamImg} alt="Team 2" />
          <img src={teamImg} alt="Team 3" />
        </div>
      </section>

      {/* OUR VISION */}
      <section className="about-row reverse">
        <div className="about-image">
          <img src={visionImg} alt="Our Vision" />
        </div>
        <div className="about-content">
          <h2>Our Vision</h2>
          <p>
            To become a globally respected pharmaceutical company by continuously
            delivering innovative, safe, and effective healthcare solutions that
            enhance quality of life.
          </p>
        </div>
      </section>

      {/* OUR GOAL */}
      <section className="about-row">
        <div className="about-image">
          <img src={goalImg} alt="Our Goal" />
        </div>
        <div className="about-content">
          <h2>Our Goal</h2>
          <p>
            Our goal is to address critical healthcare needs by developing
            affordable, high-quality medicines while maintaining the highest
            international standards of safety and efficacy.
          </p>
        </div>
      </section>

      {/* OUR CORE VALUES */}
      <section className="about-row reverse">
        <div className="about-image">
          <img src={valuesImg} alt="Core Values" />
        </div>
        <div className="about-content">
          <h2>Our Core Values</h2>
          <ul>
            <li>Integrity & Transparency</li>
            <li>Quality & Safety</li>
            <li>Innovation & Excellence</li>
            <li>Patient-Centric Approach</li>
            <li>Commitment to Health</li>
          </ul>
        </div>
      </section>

    </div>
  );
}

export default About;
