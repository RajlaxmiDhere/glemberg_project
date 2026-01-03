import React from 'react';
import logo from './assets/'; // Adjust the path and file extension

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
      {/* This displays your logo */}
      <img 
        src={logo} 
        alt="Glemberg Pharma Logo" 
        style={{ height: '50px', width: 'auto' }} 
      />
      <h1>Glemberg Pharma</h1>
    </nav>
  );
};

export default Navbar;
