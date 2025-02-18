import React from "react";
import { Card } from "antd";
import "./TestimonialPage.css";

const testimonials = [
  {
    name: "John Doe",
    feedback: "Ravonroad Trucking is the best! Fast and reliable service.",
  },
  {
    name: "Sarah Smith",
    feedback: "Professional and efficient. Highly recommended!",
  },
  {
    name: "Michael Johnson",
    feedback: "Great service! My goods arrived on time and safely.",
  },
];

const TestimonialPage = () => {
  return (
    <div className="testimonial-container">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="testimonial-card">
            <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TestimonialPage;
