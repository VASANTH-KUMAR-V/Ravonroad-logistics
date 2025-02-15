import React from "react";
import "./Hero.css"; // Import CSS file
import backgroundImage from '../../Assets/Img/depot_hero_1.jpg'

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div
        className="hero-overlay"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-lg-6">
              <h1>Transportations &amp; Logistics</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
                dolorem eius eligendi esse quod?
              </p>
              <form action="#" className="tracking-form">
                <div className="form-group d-flex">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your tracking number"
                  />
                  <input
                    type="submit"
                    className="btn btn-primary text-white px-4"
                    value="Track Now"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
