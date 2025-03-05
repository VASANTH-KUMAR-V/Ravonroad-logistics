import React from "react";
import "./About.css";
import truckImage from "../../Assets/Img/BG-1.jpeg";
import planeImage from "../../Assets/Img//BG-2.jpg";
import shipImage from "../../Assets/Img/BG-3.jpg";

const aboutContent = {
  title: "About Us",
  description:
    "We are committed to providing world-class logistics and transportation services. With years of experience in freight forwarding, we ensure smooth and reliable deliveries across air, land, and sea.",
};

const services = [
  {
    image: truckImage,
    title: "Commercial Rentals",
    description:
      "Our wide selection of rental vehicles and flexible terms help you stay on track, whenever or wherever you need them.",
  },
  {
    image: planeImage,
    title: "Fleet Management",
    description:
      "Expert fleet consultants, cutting-edge technology, and outside-the-box solutions to keep your business moving.",
  },
  {
    image: shipImage,
    title: "Electrify Fleet",
    description:
      "Curious about EVs but don't know where to start? Get help with Electrify Fleet resources, tools, and experts!",
  },
];

const AboutUs = () => {
  return (
    <div className="about-container">
      {/* Introduction Section */}
      <div className="about-intro">
        <h2>{aboutContent.title}</h2>
        <p>{aboutContent.description}</p>
      </div>

      {/* Services Section */}
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
