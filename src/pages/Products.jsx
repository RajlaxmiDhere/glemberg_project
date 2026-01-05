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
        <h1 className="products-title">Our Products</h1>

        {/* Products Row */}
        <div className="row products-row">

          {/* Product Card 1 */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card product-card h-100">
              <img src={product1} className="card-img-top" alt="Gabanx_NT_100" />
              <div className="card-body">
                <h5 className="card-title">Gabanx_NT_100</h5>
                <p className="card-text">
                <b>Diabetic Neuropathy: </b> Reduces neurotransmitter realease from neurons in the spiral cord and brain
                  <br></br>
                  <b>Peripheral Neuropathy:</b> Reduces neuropathic pain
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card product-card h-100">
              <img src={product2} className="card-img-top" alt="Bonew_jelly_sachet" />
              <div className="card-body">
                <h5 className="card-title">Bonew_jelly_sachet</h5>
                <p className="card-text">
                 
 <b>Osteoporosis:</b> Prevents bone loss, especially after menopause, and rebuilds bone to lower hip/spine fracture risk. 
<br></br>
<b>Paget's Disease:</b> Manages this bone disorder characterized by excessive bone turnover. 
Glucocorticoid-Induced 
<br></br>
<b>Osteoporosis:</b> Treats bone loss from steroid use. 
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 3 */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card product-card h-100">
              <img src={product3} className="card-img-top" alt="Carnex_LC_tab" />
              <div className="card-body">
                <h5 className="card-title">Carnex_LC_tab</h5>
                <p className="card-text">
                  <b>Muscle Pain & Cramps:</b>Helps relieve muscle pain (myalgia) and cramps, including statin-induced cramps.
                  <br></br>
                  <b>Nerve Function:</b> Supports nerve repair and improves pain and function in conditions like diabetic neuropathy and carpal tunnel syndrome.
<br></br>
<b>Wound & Fracture Healing:</b> Promotes collagen and protein synthesis, aiding faster wound healing and bone repair.
<br></br>
<b>Anti-inflammatory & Bone Health:</b>Reduces inflammation and helps prevent bone loss by supporting healthy bone metabolism.
                </p>
              </div>
            </div>
          </div>

          {/* Product Card 4 */}
          <div className="col-md-6 col-lg-5 mb-4">
            <div className="card product-card h-100">
              <img src={product4} className="card-img-top" alt="Glemvit_D3_60K" />
              <div className="card-body">
                <h5 className="card-title">Glemvit_D3_60K</h5>
                <p className="card-text">
               <b>Bone Health:</b> Helps the body 
absorb calcium and phosphorus, essential for building and maintaining strong bones and preventing bone diseases like rickets (in children) and osteomalacia (in adults).

<b>Muscle Function: </b>Supports muscle strength and proper functioning, reducing weakness and cramps
<br></br>
<b>Calcium Regulation:</b> Treats low blood calcium levels (hypocalcemia) and related conditions like hypoparathyroidism.

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
