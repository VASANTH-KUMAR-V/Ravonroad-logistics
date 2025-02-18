import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {

  // Function to scroll smoothly to sections
  const scrollToSection = (section) => {
    const element = document.querySelector(`.${section}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* About Section */}
        <div className="footer-section about">
          <h2>Ravonroad Trucking</h2>
          <p>
            Connecting businesses with the world through efficient logistics and
            transportation services. Whether by land, air, or sea, we move your
            cargo with precision and care.
          </p>
        </div>

        {/* Features Section */}
        <div className="footer-section features">
          <h3>FEATURES</h3>
          <ul>
            <li>
              <a onClick={() => scrollToSection("hero-section")}>Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("about-container")}>About Us</a>
            </li>
            <li>
              <a onClick={() => scrollToSection("services-wrapper")}>
                Service
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("testimonial-container")}>
                Testimonials
              </a>
            </li>
            <li>
              <a onClick={() => scrollToSection("contact-container")}>
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="footer-section newsletter">
          <h3>SUBSCRIBE TO NEWSLETTER</h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter Email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/19B6MCcqvy/" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/ravonroadtrucking?igsh=MTF0dXBxcDRwdzgxZg==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>
          Copyright &copy; {new Date().getFullYear()} All rights reserved | 
          Designed by <span className="company-name">Ravonroad Trucking</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
