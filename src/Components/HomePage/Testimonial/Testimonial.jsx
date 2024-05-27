import React from "react";
import TestimonialHead from "./TestimonialHead";
import TestimonialMain from "./TestimonialMain";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testiContainer">
      <TestimonialHead />
      <TestimonialMain />
    </div>
  );
};

export default Testimonial;
