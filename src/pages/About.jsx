import "./About.css";

function About() {
  return (
    <div className="about-page">

      {/* Hero / Jumbotron Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About Glemberg Pharma</h1>
          <p>
            Innovation with responsibility, care with commitment.
          </p>
        </div>
      </section>

      {/* Company Description */}
      <section className="about-section">
        <p>
          Glemberg Pharma believes that every innovation begins with a promise —
          a promise to improve lives and build a healthier tomorrow. Our
          foundation is built on strong principles of innovation, quality,
          safety, purity, and efficacy. Over the years, Glemberg Pharma has
          emerged as a trusted name in ethical pharmaceutical products across
          India and beyond.
        </p>

        <p>
          We ensure that every product meets the highest international quality
          standards through stringent quality control processes. Our mission is
          to develop and deliver innovative, safe, and high-quality medicines
          that address critical healthcare needs and improve patient outcomes
          worldwide.
        </p>

        <p>
          Driven by a clear and meaningful purpose, our work focuses on enriching
          human life through reliable and affordable healthcare solutions. We
          are more than just a pharmaceutical company — we are a dedicated team
          of scientists, researchers, and healthcare professionals working
          relentlessly towards a healthier future.
        </p>

        <p>
          Glemberg Pharma is committed to promoting good health by providing
          effective medicines at affordable prices. Professionally managed and
          quality-driven, we adhere to international standards such as
          <strong> WHO-GMP</strong>, offering a wide range of trusted
          pharmaceutical products that meet global healthcare expectations.
        </p>
      </section>

      {/* Info Cards */}
      <section className="about-cards">
        <div className="about-card">
          <h3>Our Dedicated Team</h3>
          <p>
            A passionate team of scientists, researchers, and professionals
            driven by excellence, integrity, and compassion.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To become a globally respected pharmaceutical company by delivering
            innovative and accessible healthcare solutions.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Goal</h3>
          <p>
            To improve patient lives worldwide by developing safe, effective,
            and affordable medicines.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Core Values</h3>
          <p>
            Innovation, Quality, Safety, Integrity, Trust, and Commitment to
            Human Health.
          </p>
        </div>
      </section>

    </div>
  );
}

export default About;


