import "./Products.css";

// Product Images
import product1 from "../assets/gabanx_NT_100.jpg";
import product2 from "../assets/Bonew_jelly_sachet.jpg";
import product3 from "../assets/Carnex_LC_tab.jpg";
import product4 from "../assets/Glemvit_D3_60K.jpg";

function Products() {
  const products = [
    {
      img: product1,
      title: "Gabanx_NT_100",
      desc: (
        <>
          <b>Diabetic Neuropathy:</b> Reduces neurotransmitter release from neurons.
          <br />
          <b>Peripheral Neuropathy:</b> Reduces neuropathic pain.
        </>
      ),
    },
    {
      img: product2,
      title: "Bonew_jelly_sachet",
      desc: (
        <>
          <b>Osteoporosis:</b> Prevents bone loss and fractures.
          <br />
          <b>Paget's Disease:</b> Manages excessive bone turnover.
        </>
      ),
    },
    {
      img: product3,
      title: "Carnex_LC_tab",
      desc: (
        <>
          <b>Muscle Pain & Cramps:</b> Relieves muscle pain.
          <br />
          <b>Nerve Function:</b> Supports nerve repair.
        </>
      ),
    },
    {
      img: product4,
      title: "Glemvit_D3_60K",
      desc: (
        <>
          <b>Bone Health:</b> Improves calcium absorption.
          <br />
          <b>Muscle Function:</b> Reduces weakness and cramps.
        </>
      ),
    },
    {
      img: product1,
      title: "Gabanx_NT_200",
      desc: "Advanced neuropathic pain management.",
    },
    {
      img: product2,
      title: "Bonew_Jelly Plus",
      desc: "Enhanced calcium and vitamin support.",
    },
    {
      img: product3,
      title: "Carnex_LC Forte",
      desc: "Improved muscle recovery formulation.",
    },
    {
      img: product4,
      title: "Glemvit_D3 Max",
      desc: "High-dose vitamin D supplementation.",
    },
    {
      img: product1,
      title: "Gabanx_NT SR",
      desc: "Sustained-release neuropathy care.",
    },
    {
      img: product2,
      title: "Bonew_Jelly Kids",
      desc: "Bone health support for children.",
    },
  ];

  return (
    <div className="products-page">
      <div className="container">

        <h1 className="products-title">Our Products</h1>

        <div className="row products-row">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="card product-card h-100">
                <img
                  src={product.img}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Products;
