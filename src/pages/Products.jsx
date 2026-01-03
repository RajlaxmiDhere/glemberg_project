import "./Products.css";

function Products() {
  const products = [
    {
      name: "Pain Relief",
      info: "Fast-acting and safe pain management medicines."
    },
    {
      name: "Antibiotics",
      info: "Effective treatment for bacterial infections."
    },
    {
      name: "Supplements",
      info: "Daily nutrition for better immunity."
    },
    {
      name: "Cardiac Care",
      info: "Advanced medicines for heart health."
    }
  ];

  return (
    <div className="page">
      <h2>Our Products</h2>

      <div className="products-grid">
        {products.map((p, index) => (
          <div className="product-card" key={index}>
            <div className="product-logo">💊</div>
            <h3>{p.name}</h3>
            <p>{p.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;


