import React, { useState, useEffect } from "react";
import { useLocation, useNavigate, NavLink } from "react-router-dom";
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
import Minoxarsolution from "../assets/Minoxarsolution.jpeg";

const productsData = [
  { id: 1, name: "Gabanx NT 100", category: "ortho", division: "ORTHO DIVISION", image: gabanxNt },
  { id: 2, name: "Carnex LC Tab", category: "ortho", division: "ORTHO DIVISION", image: carnexLc },
  { id: 3, name: "GLEMVIT D3 60K", category: "ortho", division: "ORTHO DIVISION", image: glemvitD3 },
  { id: 4, name: "Bonew Jelly Sachet", category: "ortho", division: "ORTHO DIVISION", image: bonewJelly },
  { id: 5, name: "Gempan 40 Tab", category: "general", division: "GENERAL RANGE", image: Gempan40 },
  { id: 6, name: "Raberg DSR Cap", category: "general", division: "GENERAL RANGE", image: RabergDSR },
  { id: 7, name: "Genzoco Powder", category: "derma", division: "DERMA DIVISION", image: Genzocopowder },
  { id: 8, name: "Itragem 200 Cap", category: "derma", division: "DERMA DIVISION", image: Itragem200 },
  { id: 9, name: "Minoxar 5% solution", category: "derma", division: "DERMA DIVISION", image: Minoxarsolution },
];

const Product = () => {
  const [filter, setFilter] = useState("all");
  const location = useLocation();
  const navigate = useNavigate();

  // Handle Hash updates from URL
  useEffect(() => {
    const hash = location.hash.replace("#", "").toLowerCase();

    if (["general", "ortho", "derma"].includes(hash)) {
      setFilter(hash);
    } else {
      setFilter("all");
    }

    window.scrollTo(0, 0);
  }, [location.hash]);

  // Handle filter selection and sync URL hash
  const handleFilterChange = (selectedCategory) => {
    setFilter(selectedCategory);
    if (selectedCategory === "all") {
      navigate(location.pathname, { replace: true });
    } else {
      navigate(`${location.pathname}#${selectedCategory}`, { replace: true });
    }
  };

  const filteredProducts =
    filter === "all" ? productsData : productsData.filter((p) => p.category === filter);

  return (
    <>
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-inner">
          <h1 className="contact-title">Our Products</h1>
          <div className="breadcrumb">
            <NavLink to="/" className="breadcrumb-link">Home</NavLink>
            <span className="breadcrumb-arrow">›</span>
            <span className="breadcrumb-current">Our Products</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="product-page-container">
        <div className="product-content-body">

          {/* Sidebar Filter */}
          <aside className="filter-sidebar">
            <h3 className="filter-title">Filter by Product Division</h3>
            <ul className="filter-list">
              <li
                className={`filter-item ${filter === "all" ? "active" : ""}`}
                onClick={() => handleFilterChange("all")}
                role="button"
                tabIndex={0}
              >
                Show All Products
              </li>
              <li
                className={`filter-item ${filter === "general" ? "active" : ""}`}
                onClick={() => handleFilterChange("general")}
                role="button"
                tabIndex={0}
              >
                General Range
              </li>
              <li
                className={`filter-item ${filter === "ortho" ? "active" : ""}`}
                onClick={() => handleFilterChange("ortho")}
                role="button"
                tabIndex={0}
              >
                Ortho Division
              </li>
              <li
                className={`filter-item ${filter === "derma" ? "active" : ""}`}
                onClick={() => handleFilterChange("derma")}
                role="button"
                tabIndex={0}
              >
                Derma Division
              </li>
            </ul>
          </aside>

          {/* Product Grid */}
          <main className="product-grid">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="card-inner">
                    <div className="product-image-box">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="product-img"
                        loading="lazy"
                      />
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
