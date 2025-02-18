import React, { useState } from "react";
import "./Service.css";
import { FaShip, FaPlane, FaTruck, FaWarehouse, FaBoxOpen } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";

const services = [
  {
    icon: <FaShip />,
    title: "SEA FREIGHT",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: <FaPlane />,
    title: "AIR FREIGHT",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: <MdLocalShipping />,
    title: "PACKAGE FORWARDING",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: <FaTruck />,
    title: "TRUCKING",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: <FaWarehouse />,
    title: "WAREHOUSE",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
  {
    icon: <FaBoxOpen />,
    title: "DELIVERY",
    description: "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="services-wrapper">
      <h2 className="contact-heading">Services</h2>
      <p>We ensure safe and timely delivery of goods across the country.</p>
      <div className="services-section-container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-section-card ${hoveredIndex === index ? "active" : "inactive"}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
