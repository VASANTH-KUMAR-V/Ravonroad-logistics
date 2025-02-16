import React from "react";
import "./Facilities.css";
import truckImage from "../../Assets/Img/depot_img_1.jpg";
import planeImage from "../../Assets/Img/depot_img_2.jpg";
import shipImage from "../../Assets/Img/depot_img_3.jpg";

const services = [
  {
    image: truckImage,
    title: "TRUCK INSURANCE",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio laudantium nulla eos numquam incidunt!",
  },
  {
    image: planeImage,
    title: "PLANE TRANSPORTATION",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio laudantium nulla eos numquam incidunt!",
  },
  {
    image: shipImage,
    title: "SEA & AIR FREIGHT",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae distinctio laudantium nulla eos numquam incidunt!",
  },
];

const Services = () => {
  return (
    <div className="services-container">
        {/* <h1>Services</h1> */}
        {/* <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p> */}
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.image} alt={service.title} className="service-image" />
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Services;
