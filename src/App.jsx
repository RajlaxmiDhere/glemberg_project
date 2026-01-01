import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About Us />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<Contact Us />} />
        
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
