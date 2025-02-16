import React from "react";
import "./Why.css"; // Import the CSS file
import image from "../../Assets/Img/depot_delivery_1.jpg"; // Update the path if needed

const WhyDepot = () => {
  return (
    <div className="why-depot-container">
      <div className="why-depot-text">
        <h2>WHY DEPOT</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam error
          aliquid, dolores animi obcaecati quisquam accusamus soluta?
        </p>
        <ul>
          <li>Cargo express</li>
          <li>Secure Services</li>
          <li>Secure Warehousing</li>
          <li>Cost savings</li>
          <li>Proven by great companies</li>
        </ul>
      </div>
      <div className="why-depot-image">
        <img src={image} alt="Product Unboxing" />
      </div>
    </div>
  );
};

export default WhyDepot;
