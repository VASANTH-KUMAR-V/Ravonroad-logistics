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
      <h2 className="contact-heading">Contact Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quam corporis, eveniet similique nostrum dolores delectus, dolore optio deleniti beatae earum et! Dolorum natus dolore in quam, ut velit officia.</p>
      <div className="services-container">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${hoveredIndex === index ? "active" : "inactive"}`}
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
