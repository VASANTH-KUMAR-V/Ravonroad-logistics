import React from 'react'
import Navbar from './Component/Navbar/Navbar.jsx'
import HeroSection from './Component/Hero/Hero.jsx'
import Services from './Component/Services/Services.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Contact from './Component/Contact/Contact.jsx'
import Why from './Component/Why/Why.jsx'
import About from './Component/Facilities/About.jsx'
import BlogPage from './Component/BlogPage/BlogPage.jsx'
import TestimonialPage from './Component/TestimonialPage/TestimonialPage.jsx'
const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Why />
      <TestimonialPage />
      <BlogPage />
      <Contact />
      <Footer />
    </div>
  )
}

export default App