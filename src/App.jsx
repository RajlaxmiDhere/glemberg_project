import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About Us />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact Us />} />
        
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
