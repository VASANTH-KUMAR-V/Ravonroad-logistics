import React from "react";
import "./About.css";
import truckImage from "../../Assets/Img/depot_img_1.jpg";
import planeImage from "../../Assets/Img/depot_img_2.jpg";
import shipImage from "../../Assets/Img/depot_img_3.jpg";

const aboutContent = {
  title: "About Us",
  description:
    "We are committed to providing world-class logistics and transportation services. With years of experience in freight forwarding, we ensure smooth and reliable deliveries across air, land, and sea.",
};

const services = [
  {
    image: truckImage,
    title: "Truck Insurance",
    description:
      "Protect your goods and vehicles with our comprehensive truck insurance policies, ensuring safe and hassle-free transportation.",
  },
  {
    image: planeImage,
    title: "Plane Transportation",
    description:
      "Fast and efficient air freight services to ensure timely deliveries across the globe.",
  },
  {
    image: shipImage,
    title: "Sea & Air Freight",
    description:
      "Reliable shipping solutions for international logistics, covering both sea and air freight options.",
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
