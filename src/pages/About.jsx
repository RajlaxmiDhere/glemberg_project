import "./About.css";

import journeyImg from "../assets/about.jpg";
import teamImg from "../assets/team.jpg";
import visionImg from "../assets/vision.jpg";
import goalImg from "../assets/goal.jpg";
import valuesImg from "../assets/values.jpg";

function About() {
  return (
    <div className="about-page">

      {/* Journey / Who We Are (30% image – 70% text) */}
      <section className="about-row journey">
        <div className="about-image">
          <img src={journeyImg} alt="The Journey So Far" />
        </div>
        <div className="about-content">
          <h2>The Journey So Far</h2>
          <p>
<strong>Glemberg Pharma is a name synonymous with trust and innovation</strong>in the global pharmaceutical landscape. Built on the core pillars of quality, safety, and purity, we go beyond manufacturing—we deliver a promise to improve lives. By adhering to rigorous WHO-GMP standards and stringent quality controls, we ensure that every life-saving innovation we produce meets the highest international benchmarks, providing patients with the efficacy they deserve.
<br></br>
Our mission is fueled by a dedicated team of scientists and researchers working relentlessly to make healthcare both reliable and affordable. We don’t just develop medicines; we create paths to a healthier future through patient-focused solutions and ethical excellence. At Glemberg Pharma, we are committed to enriching human life, ensuring that world-class healthcare is accessible to everyone, everywhere.
          </p>
        </div>
      </section>

      {/* Our Dedicated Team (Full width) */}
      <section className="about-full">
        <h2>Our Dedicated Team</h2>
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

      {/* Our Vision (50% – 50%) */}
      <section className="about-row half reverse">
        <div className="about-image">
          <img src={visionImg} alt="Our Vision" />
        </div>
        <div className="about-content">
          <h2>Our Vision</h2>
          <p>
            To become a globally respected pharmaceutical company by delivering
            innovative, safe, and affordable healthcare solutions.
          </p>
        </div>
      </section>

      {/* Our Goal (50% – 50%) */}
      <section className="about-row half">
        <div className="about-image">
          <img src={goalImg} alt="Our Goal" />
        </div>
        <div className="about-content">
          <h2>Our Goal</h2>
          <p>
            To address critical healthcare needs through continuous research,
            quality manufacturing, and patient-focused solutions.
          </p>
        </div>
      </section>

      {/* Our Core Values (50% – 50%) */}
      <section className="about-row half reverse">
        <div className="about-image">
          <img src={valuesImg} alt="Our Core Values" />
        </div>
        <div className="about-content">
          <h2>Our Core Values</h2>
          <ul>
            <li>Integrity & Transparency</li>
            <li>Quality & Safety</li>
            <li>Innovation & Excellence</li>
            <li>Patient-Centric Care</li>
            <li>Commitment to Health</li>
          </ul>
        </div>
      </section>

    </div>
  );
}

export default About;
