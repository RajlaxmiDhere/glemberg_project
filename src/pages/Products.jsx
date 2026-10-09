import React, { useState, useEffect } from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./Products.css";

/* Assets */
import bonewJelly from "../assets/Bonew_jelly_sachet.jpg";
import carnexLc from "../assets/Carnex_LC_tab.jpg";
import glemvitD3 from "../assets/Glemvit_D3_60K.jpg";
import gabanxNt from "../assets/gabanx_NT_100.jpg";

import Gempan40 from "../assets/Gempan_40_tab.png";
import RabergDSR from "../assets/Raberg_DSR_cap.png";

import Genzocopowder from "../assets/Genzoco_powder.png";
import Itragem200 from "../assets/Itragem_200_cap.png";

const Product = () => {

  const [filter, setFilter] = useState("all");
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash.replace("#", "");

    if (hash === "general" || hash === "ortho" || hash === "derma") {
      setFilter(hash);
    } else {
      setFilter("all");
    }

    window.scrollTo(0, 0);
  }, [location]);

  const products = [
    { id: 1, name: "Gabanx NT 100", category: "ortho", division: "ORTHO DIVISION", image: gabanxNt },
    { id: 2, name: "Carnex LC Tab", category: "ortho", division: "ORTHO DIVISION", image: carnexLc },
    { id: 3, name: "GLEMVIT D3 60K", category: "ortho", division: "ORTHO DIVISION", image: glemvitD3 },
    { id: 4, name: "Bonew Jelly Sachet", category: "ortho", division: "ORTHO DIVISION", image: bonewJelly },
   
    { id: 5, name: "Gempan 40 Tab", category: "general", division: "GENERAL RANGE", image: Gempan40 },
    { id: 6, name: "Raberg DSR Cap", category: "general", division: "GENERAL RANGE", image: RabergDSR },
    
    { id: 7, name: "Genzoco Powder", category: "derma", division: "DERMA DIVISION", image: Genzocopowder },
    { id: 8, name: "Itragem 200 Cap", category: "derma", division: "DERMA DIVISION", image: Itragem200 },
  ];

  const filteredProducts =
    filter === "all" ? products : products.filter(p => p.category === filter);

  return (
    <>

      {/* ✅ FULL WIDTH HERO (NO TOP SPACE) */}
      <div className="contact-hero" style={{marginTop:"0"}}>
        <div className="contact-hero-inner">

          <h1 className="contact-title">Our Products</h1>

          <div className="breadcrumb">
            <NavLink to="/" className="breadcrumb-link">Home</NavLink>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-current">Our Products</span>
          </div>

        </div>
      </div>


      {/* ORIGINAL PAGE CONTENT (UNCHANGED) */}
      <div className="product-page-container">

        <div className="product-content-body">

          <aside className="filter-sidebar">
            <h3 className="filter-title">Filter by Product Division</h3>

            <ul className="filter-list">

              <li className={`filter-item ${filter==="all"?"active":""}`} onClick={()=>setFilter("all")}>
                Show All Products
              </li>

              <li className={`filter-item ${filter==="general"?"active":""}`} onClick={()=>setFilter("general")}>
                General Range
              </li>

              <li className={`filter-item ${filter==="ortho"?"active":""}`} onClick={()=>setFilter("ortho")}>
                Ortho Division
              </li>

              <li className={`filter-item ${filter==="derma"?"active":""}`} onClick={()=>setFilter("derma")}>
                Derma Division
              </li>

            </ul>
          </aside>


          <main className="product-grid">

            {filteredProducts.length>0 ? (

              filteredProducts.map(product => (

                <div key={product.id} className="product-card">

                  <div className="card-inner">

                    <div className="product-image-box">
                      <img src={product.image} alt={product.name} className="product-img"/>
                    </div>

                    <h2 className="brand-text">{product.name}</h2>
                    <div className="category-label">{product.division}</div>

                  </div>

                </div>

              ))

            ) : (
              <p className="no-products">No products found in this category.</p>
            )}

          </main>

        </div>
      </div>

    </>
  );
};

export default Product;
