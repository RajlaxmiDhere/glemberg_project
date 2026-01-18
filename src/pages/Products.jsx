import React, { useState } from 'react';
import './Products.css';

// Importing your specific ortho assets
import bonewJelly from '../assets/Bonew_jelly_sachet.jpg';
import carnexLc from '../assets/Carnex_LC_tab.jpg';
import glemvitD3 from '../assets/Glemvit_D3_60K.jpg';
import gabanxNt from '../assets/gabanx_NT_100.jpg';
import AceglemMR from '../assets/Aceglem_MR_tab.png';
import AceglemSP from '../assets/Aceglem_SP_tab.png';


const Product = () => {
  const [filter, setFilter] = useState('all');

  const products = [
    { 
      id: 1, 
      name: "Bonew Jelly Sachet", 
      desc: "Alendronic acid jelly 70mg",
      category: "ortho", 
      division: "ORTHO DIVISION",
      image: bonewJelly
    },
    { 
      id: 2, 
      name: "Carnex LC tab", 
      desc: "L-Carnitine, L-arginine vitamin E, folic acid, Cynocobalamin",
      category: "ortho", 
      division: "ORTHO DIVISION",
      image: carnexLc
    },
    { 
      id: 3, 
      name: "GLEMVIT D3 60K", 
      desc: "Cholecalciferol softgel cap 60000 IU",
      category: "ortho", 
      division: "ORTHO DIVISION",
      image: glemvitD3
    },
    { 
      id: 4, 
      name: "Gabanx NT 100", 
      desc: "Gabapentin and nortriptyline tablet",
      category: "ortho", 
      division: "ORTHO DIVISION",
      image: gabanxNt
    },
    { 
      id: 5, name: "Aceglem_MR_tab", 
      desc: "", category: "general", 
      division: "GENERAL RANGE", 
      image:AceglemMR
    },
    { id: 6, name: "Aceglem_SP_tab", desc: "", category: "general", division: "GENERAL RANGE", image: "AceglemSP" },
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="product-page-container">
      <aside className="filter-sidebar">
        <h3 className="filter-title">Filter by Product Division</h3>
        <ul className="filter-list">
          <li className={`filter-item ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            Show All Products
          </li>
          <li className={`filter-item ${filter === 'general' ? 'active' : ''}`} onClick={() => setFilter('general')}>
            General Range
          </li>
          <li className={`filter-item ${filter === 'derma' ? 'active' : ''}`} onClick={() => setFilter('derma')}>
            Derma Division
          </li>
          <li className={`filter-item ${filter === 'ortho' ? 'active' : ''}`} onClick={() => setFilter('ortho')}>
            Ortho Division
          </li>
        </ul>
      </aside>

      <main className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="card-inner">
                <div className="product-image-box">
                  <img src={product.image} alt={product.name} className="product-img" />
                </div>
                <h2 className="brand-text">{product.name}</h2>
                <p className="product-description">{product.desc}</p>
                <div className="category-label">
                  {product.division}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-products">No products found in this division.</div>
        )}
      </main>
    </div>
  );
};

export default Product;
