function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <div className="hero">
        <h1>Trusted Healthcare Solutions</h1>
        <p>
          Glemberg Pharma is committed to delivering high-quality, safe, and
          affordable pharmaceutical products to improve lives globally.
        </p>
      </div>

      {/* About Preview */}
      <section style={{ marginTop: "40px" }}>
        <h2>Who We Are</h2>
        <p>
          We are a research-driven pharmaceutical company focused on innovation,
          quality, and patient well-being. Our products are manufactured under
          strict quality standards and trusted by healthcare professionals.
        </p>
      </section>

      {/* Highlights */}
      <section style={{ marginTop: "30px" }}>
        <h2>Why Choose Us</h2>
        <ul style={{ marginTop: "15px", paddingLeft: "20px" }}>
          <li>✔ WHO-GMP Certified Manufacturing</li>
          <li>✔ Wide Range of Quality Medicines</li>
          <li>✔ Trusted by Doctors & Hospitals</li>
          <li>✔ Strong Research & Development</li>
        </ul>
      </section>
    </div>
  );
}

export default Home;

