import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-section about">
          <h2>DEPOT</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            voluptate debitis voluptatem et dolorum.
          </p>
        </div>

        <div className="footer-section features">
          <h3>FEATURES</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Testimonials</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section newsletter">
          <h3>SUBSCRIBE TO NEWSLETTER</h3>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter Email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* <div className="footer-section social">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"><FaFacebookF /></i></a>
            <a href="#"><i className="fab fa-twitter"><FaTwitter /></i></a>
            <a href="#"><i className="fab fa-instagram"><FaInstagram /></i></a>
            <a href="#"><i className="fab fa-linkedin"><FaLinkedinIn /></i></a>
          </div>
        </div> */}
      </div>
      <div className="footer-bottom">
        <p>
          Copyright &copy; 2025 All rights reserved | This template is made with ❤️ by Colorlib
        </p>
      </div>
    </footer>
  );
};

export default Footer;
