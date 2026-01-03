import "./Products.css";

function Products() {
  const products = [
    {
      name: "Glemvit d3",
      info: "Bone Health: Helps the body absorb calcium and phosphorus, essential for building and maintaining strong bones and preventing bone diseases like rickets (in children) and osteomalacia (in adults).Muscle Function: Supports muscle strength and proper functioning, reducing weakness and crampsCalcium Regulation: Treats low blood calcium levels (hypocalcemia) and related conditions like hypoparathyroidism."
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


