import { useState } from 'react'

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
