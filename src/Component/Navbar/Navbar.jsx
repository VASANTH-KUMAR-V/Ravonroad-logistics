import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Navbar.css";

const ResponsiveNavbar = () => {
  const [expanded, setExpanded] = useState(false); // Track navbar state

  // Function to scroll and close navbar
  const scrollToSection = (section) => {
    const element = document.querySelector(`.${section}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setExpanded(false); // Close the navbar after clicking
  };

  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="top-bar">
        <div className="contact-info">
          <FaEnvelope /> <span>info@ravonroadtrucking.com</span>
          <FaPhone className="ms-4" /> <span>+1 (872) 222-2379</span>
        </div>
        <div className="social-icons-navbar">
          <a href="https://www.instagram.com/ravonroadtrucking?igsh=MTF0dXBxcDRwdzgxZg==" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/share/19B6MCcqvy/" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <Navbar fixed="top" expand="lg" expanded={expanded} className="custom-navbar">
        <Container>
          <Navbar.Brand onClick={() => scrollToSection("hero-section")} className="nav-brand">
            Ravonroad Trucking
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link onClick={() => scrollToSection("hero-section")}>Home</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("services-wrapper")}>Services</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("about-container")}>About Us</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("why-depot-container")}>Why Us</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("testimonial-container")}>Testimonials</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("blog-container")}>Blog</Nav.Link>
              <Nav.Link onClick={() => scrollToSection("contact-container")}>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ResponsiveNavbar;
