import React from "react";
import "./Why.css"; // Import the CSS file
import image from "../../Assets/Img/depot_delivery_1.jpg"; // Update the path if needed

const WhyDepot = () => {
  return (
    <div className="why-depot-container">
      <div className="why-depot-text">
        <h2>Why Ravonroad Trucking</h2>
        <p>
          At Ravonroad Trucking, we are committed to delivering reliable and efficient 
          logistics solutions. Our team ensures safe, timely, and cost-effective transportation 
          of goods, backed by secure warehousing and trusted partnerships.
        </p>
        <ul>
          <li>Cargo Express</li>
          <li>Secure Services</li>
          <li>Secure Warehousing</li>
          <li>Cost Savings</li>
          <li>Trusted by Leading Companies</li>
        </ul>
      </div>
      <div className="why-depot-image">
        <img src={image} alt="Reliable Trucking Services" />
      </div>
    </div>
  );
};

export default WhyDepot;
