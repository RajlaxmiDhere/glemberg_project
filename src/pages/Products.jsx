import React, { useState } from 'react';
import './Products.css';

// Asset Imports
import bonewJelly from '../assets/Bonew_jelly_sachet.jpg';
import carnexLc from '../assets/Carnex_LC_tab.jpg';
import glemvitD3 from '../assets/Glemvit_D3_60K.jpg';
import gabanxNt from '../assets/gabanx_NT_100.jpg';
import AceglemMR from '../assets/Aceglem_MR_tab.png';
import AceglemSP from '../assets/Aceglem_SP_tab.png';
import AceglemP from '../assets/Aceglem_P_tab.png';
import Moxgemcv625 from '../assets/Moxgem_cv_625_tab.png';
import Moxgem500cap from '../assets/Moxgem_500_cap.png';
import Cefogem100 from '../assets/Cefogem_100_tab.png';
import Cefogem200 from '../assets/Cefogem_200_tab.png';
import Cefogemcv from '../assets/Cefogem_cv_tab.png';
import Cefixgim100 from '../assets/Cefixgim_100_tab.png';
import Cefixgim200 from '../assets/Cefixgim_200_tab.png';
import Gempan40 from '../assets/Gempan_40_tab.png';
import RabergDSR from '../assets/Raberg_DSR_cap.png';
import Ferrozxt from '../assets/Ferroz_xt_tab.png';
import Genzocopowder from '../assets/Genzoco_powder.png';
import Itragem200 from '../assets/Itragem_200_cap.png';

const Product = () => {
  const [filter, setFilter] = useState('all');

  const products = [
    { id: 1, name: "Bonew Jelly Sachet", desc: "Alendronic acid jelly 70mg", category: "ortho", division: "ORTHO DIVISION", image: bonewJelly },
    { id: 2, name: "Carnex LC Tab", desc: "L-Carnitine, L-Arginine, Vitamin E", category: "ortho", division: "ORTHO DIVISION", image: carnexLc },
    { id: 3, name: "GLEMVIT D3 60K", desc: "Cholecalciferol softgel cap 60000 IU", category: "ortho", division: "ORTHO DIVISION", image: glemvitD3 },
    { id: 4, name: "Gabanx NT 100", desc: "Gabapentin and Nortriptyline tablet", category: "ortho", division: "ORTHO DIVISION", image: gabanxNt },
    { id: 5, name: "Aceglem MR Tab", desc: "", category: "general", division: "GENERAL RANGE", image: AceglemMR },
    { id: 6, name: "Aceglem SP Tab", desc: "", category: "general", division: "GENERAL RANGE", image: AceglemSP },
    { id: 7, name: "Aceglem P Tab", desc: "", category: "general", division: "GENERAL RANGE", image: AceglemP },
    { id: 8, name: "Moxgem CV 625 Tab", desc: "", category: "general", division: "GENERAL RANGE", image: Moxgemcv625 },
    { id: 9, name: "Moxgem 500 Cap", desc: "", category: "general", division: "GENERAL RANGE", image: Moxgem500cap },
    { id: 10, name: "Cefogem 100 Tab", desc: "", category: "general", division: "GENERAL RANGE", image: Cefogem100 },
    { id: 11, name: "Cefogem 200 Tab", desc: "", category: "general", division: "GENERAL RANGE", image: Cefogem200 },
    { id: 12, name: "Cefogem CV Tab", desc: "", category: "general", division: "GENERAL RANGE", image: Cefogemcv },
    { id: 13, name: "Cefixgim 100 Tab", desc: "", category: "general", division: "GENERAL RANGE", image: Cefixgim100 },
    { id: 14, name: "Cefixgim 200 Tab", desc: "", category: "general", division: "GENERAL RANGE", image: Cefixgim200 },
    { id: 15, name: "Gempan 40 Tab", desc: "", category: "general", division: "GENERAL RANGE", image: Gempan40 },
    { id: 16, name: "Raberg DSR Cap", desc: "", category: "general", division: "GENERAL RANGE", image: RabergDSR },
    { id: 17, name: "Ferroz XT Tab", desc: "", category: "general", division: "GENERAL RANGE", image: Ferrozxt },
    { id: 18, name: "Genzoco powder", desc: "Pre & Probiotic Powder", category: "derma", division: "DERMA DIVISION", image: Genzocopowder },
    { id: 19, name: "Itragem 200 cap", desc: "", category: "derma", division: "DERMA DIVISION", image: Itragem200 },
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="product-page-wrapper">
      {/* 1. Header Title Centered Below Logo */}
      <h1 className="section-title">Our Products</h1>

      {/* 2. Main Content Area */}
      <div className="product-page-container">
        
        {/* Sidebar */}
        <aside className="filter-sidebar">
          <h3 className="filter-title">Filter by Product Division</h3>
          <ul className="filter-list">
            <li className={`filter-item ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
              Show All Products
            </li>
            <li className={`filter-item ${filter === 'general' ? 'active' : ''}`} onClick={() => setFilter('general')}>
              General Range
            </li>
            <li className={`filter-item ${filter === 'ortho' ? 'active' : ''}`} onClick={() => setFilter('ortho')}>
              Ortho Division
            </li>          
            <li className={`filter-item ${filter === 'derma' ? 'active' : ''}`} onClick={() => setFilter('derma')}>
              Derma Division
            </li>
          </ul>
        </aside>

        {/* Product Grid */}
        <main className="product-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="product-card">
                <div className="card-inner">
                  <div className="product-image-box">
                    <img src={product.image} alt={product.name} className="product-img" />
                  </div>
                  <h3 className="brand-text">{product.name}</h3>
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
    </div>
  );
};

export default Product;
