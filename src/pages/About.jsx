import "./About.css";
import journeyImg from "../assets/about.jpg";
import visionImg from "../assets/vision.jpg";
import goalImg from "../assets/goal.jpg";
import valuesImg from "../assets/values.jpg";

function About() {
  return (
    <div className="about-page">

      {/* Journey / Who We Are */}
      <section className="about-row journey">
        <div className="about-image">
          <img src={journeyImg} alt="About Us" />
        </div>
        <div className="about-content">
          <h1>The Journey So Far</h1>
          <p>
            <strong>Glemberg Pharma</strong> is a name synonymous with{" "}
            <strong>trust and innovation</strong> in the global pharmaceutical
            landscape. Built on the core pillars of quality, safety, and purity,
            we go beyond manufacturing—we deliver a promise to improve lives.
            <br /><br />
            Our mission is fueled by dedicated scientists and researchers
            working relentlessly to make healthcare reliable and affordable.
            At Glemberg Pharma, we are committed to enriching human life by
            ensuring world-class healthcare access for everyone.
          </p>
        </div>
      </section>

      {/* Our Vision */}
      <section className="about-row half reverse">
        <div className="about-image">
          <img src={visionImg} alt="Our Vision" />
        </div>
        <div className="about-content">
          <h1>Our Vision</h1>
          <h3>Pioneering Innovation with Enduring Trust</h3>
          <p>
            We believe that “standard” is never enough. Through continuous
            research, modern technology, and creative scientific thinking, we
            aim to develop therapies that redefine industry benchmarks while
            maintaining absolute reliability.
          </p>
        </div>
      </section>

      {/* Our Goal */}
      <section className="about-row half">
        <div className="about-image">
          <img src={goalImg} alt="Our Goal" />
        </div>
        <div className="about-content">
          <h1>Our Goal</h1>
          <h3>Making a Positive Contribution to Society</h3>
          <p>
            Our goal is to make a positive contribution to the society by providing every customer with product and service representing the best combination of performance and value.

Our goal is to contribute positively to society by delivering products and services that embody the perfect balance of performance and value.
          </p>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="about-row half reverse">
        <div className="about-image">
          <img src={valuesImg} alt="Our Core Values" />
        </div>
        <div className="about-content">
          <h1>Incorporating Core Values into Business Practices</h1>
          <p>Honesty, humility, integrity, quality, collaboration, timely service and customer satisfaction. We believe that these values are the foundation of a successful business.

We believe that honesty, humility, integrity, quality, collaboration, timely service, and customer satisfaction are the pillars that drive a truly successful business.</p>
        </div>
      </section>

    </div>
  );
}

export default About;
