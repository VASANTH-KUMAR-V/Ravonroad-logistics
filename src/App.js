import React from 'react'
import Navbar from './Component/Navbar/Navbar.jsx'
import HeroSection from './Component/Hero/Hero.jsx'
import Services from './Component/Services/Services.jsx'
import Facilities from './Component/Facilities/Facilities.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Why from './Component/Why/Why.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <Facilities />
      <Why />
      <Contact />
      <Footer />
    </div>
  )
}

export default App