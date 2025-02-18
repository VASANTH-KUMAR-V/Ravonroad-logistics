import React from "react";
import "./Hero.css"; // Import CSS file

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div> {/* Overlay for better readability */}
      <div className="hero-content">
        <h1>Transportations &amp; Logistics</h1>
        <p className="description">
          Reliable, fast, and secure transportation solutions for businesses of all sizes. 
          We take the hassle out of logistics so you can focus on growth.
        </p>
        <form className="tracking-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your tracking number"
            />
            <button type="submit" className="btn-track">
              Track Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HeroSection;
