import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component1/navbar/Navbar'
import Hero from './component2/Hero'
import Coins from './component2/Coin'
import Signup from './component2/Signup'
import Footer from './component1/footer/Footer'
import ContactPage from './component3/ContactPage'





function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<> <Hero/>  <Coins/> <Signup/> </>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    
    
      <Footer />
    </>
  );
}

export default App;
