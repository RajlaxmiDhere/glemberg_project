import "./Products.css";

// Product Images
import product1 from "../assets/gabanx_NT_100.jpg";
import product2 from "../assets/Bonew_jelly_sachet.jpg";
import product3 from "../assets/Carnex_LC_tab.jpg";
import product4 from "../assets/Glemvit_D3_60K.jpg";

function Products() {
  return (
    <div className="products-page">
      <div className="container">

        {/* Page Title */}
        <h2 className="products-title">Our Products</h2>

        {/* Products Row */}
        <div className="row products-row">

          {/* Product Card 1 */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card product-card h-100">
              <img src={product1} className="card-img-top" alt="Pain Relief Medicine" />
              <div className="card-body">
                <h5 className="card-title">Pain Relief Medicine</h5>
                <p className="card-text">
                  Fast-acting and effective pain relief solutions developed
                  with high safety, quality, and patient care standards.
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card product-card h-100">
              <img src={product2} className="card-img-top" alt="Antibiotic Range" />
              <div className="card-body">
                <h5 className="card-title">Antibiotic Range</h5>
                <p className="card-text">
                  Broad-spectrum antibiotics designed to combat bacterial
                  infections with proven clinical effectiveness.
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card product-card h-100">
              <img src={product3} className="card-img-top" alt="Healthcare Supplements" />
              <div className="card-body">
                <h5 className="card-title">Healthcare Supplements</h5>
                <p className="card-text">
                  Nutritional supplements formulated to strengthen immunity
                  and support overall health and wellness.
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card product-card h-100">
              <img src={product4} className="card-img-top" alt="Cardiac Care Products" />
              <div className="card-body">
                <h5 className="card-title">Cardiac Care Products</h5>
                <p className="card-text">
                  Advanced cardiac care medicines developed to support heart
                  health and manage cardiovascular conditions effectively.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Products;
