import React, { useState } from 'react';
import './product.css';

const Product = () => {
  // 1. State to track the selected division
  const [filter, setFilter] = useState('all');

  // 2. Your Product Data (Add your items here)
  const products = [
    { id: 1, name: "General Medicine A", category: "general", division: "GENERAL RANGE" },
    { id: 2, name: "Derma Cream X", category: "derma", division: "DERMA DIVISION" },
    { id: 3, name: "Ortho Tablet Y", category: "ortho", division: "ORTHO DIVISION" },
    { id: 4, name: "General Tonic B", category: "general", division: "GENERAL RANGE" },
    // Add more products as needed
  ];

  // 3. Logic to filter the list
  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div className="product-page-container">
      {/* Sidebar Filter */}
      <aside className="filter-sidebar">
        <h3 className="filter-title">Filter by Product Division</h3>
        <ul className="filter-list">
          <li 
            className={`filter-item ${filter === 'all' ? 'active' : ''}`} 
            onClick={() => setFilter('all')}
          >
            Show All Products
          </li>
          <li 
            className={`filter-item ${filter === 'general' ? 'active' : ''}`} 
            onClick={() => setFilter('general')}
          >
            General Range
          </li>
          <li 
            className={`filter-item ${filter === 'derma' ? 'active' : ''}`} 
            onClick={() => setFilter('derma')}
          >
            Derma Division
          </li>
          <li 
            className={`filter-item ${filter === 'ortho' ? 'active' : ''}`} 
            onClick={() => setFilter('ortho')}
          >
            Ortho Division
          </li>
        </ul>
      </aside>

      {/* Product Grid */}
      <main className="product-grid">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="card-inner">
              <div className="product-logo-placeholder">
                {/* Replace with <img> tag later */}
                <span className="brand-text">{product.name}</span>
              </div>
              <div className="category-label">
                {product.division}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Product;
