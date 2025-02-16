import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Navbar.css"; // Import CSS for additional styling

const ResponsiveNavbar = () => {
  return (
    <>
      {/* Top Bar with Contact Info */}
      <div className="top-bar bg-light py-2 d-none d-md-flex justify-content-between px-4">
        <div className="contact-info">
          <FaEnvelope /> <span className="ms-2">info@ravonroadtrucing.com</span>
          <FaPhone className="ms-4" /> <span className="ms-2">+1 (872) 222-2379</span>
        </div>
        <div className="social-icons-navbar">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="me-3" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="ms-3" />
          </a>
        </div>
      </div>

      {/* Fixed Navbar */}
      <Navbar fixed="top" expand="lg" className="bg-white shadow-sm">
        <Container>
          <Navbar.Brand href="#" className="fw-bold text-primary fs-3">
            Ravonroad Trucking
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Services</Nav.Link>
              <Nav.Link href="#">About Us</Nav.Link>
              <Nav.Link href="#">Why Us</Nav.Link>
              <Nav.Link href="#">Testimonials</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default ResponsiveNavbar;
