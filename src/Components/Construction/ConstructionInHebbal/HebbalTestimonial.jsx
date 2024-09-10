import React from "react";
import "./HebbalTestimonial.css";
const HebbalTestimonial = () => {
  return (
    <div className="hebbalTestimonial">
      <h2>
        <span>Testimonials</span>: What Our Clients Say
      </h2>
      <p>
        Our reputation as a trusted house construction company in Hebbal is
        built on the satisfaction of our clients. Here’s what some of them have
        to say:
      </p>
      <div className="hebbalTestimonialContent">
        <div className="hebbalTestimonialItem">
          <p>
            {" "}
            <span>"</span> Choosing Build Ur Space was the best decision we made
            for our home construction. They were professional, transparent, and
            delivered beyond our expectations. <span>"</span>
            <br /> – <span>Mr. Rajesh, Hebbal.</span>
          </p>
        </div>
        <div className="hebbalTestimonialItem">
          <p>
            <span>"</span> From design to finishing, Build Ur Space made the
            entire construction process seamless and stress-free. They truly are
            the best house construction company in Hebbal. <span>"</span>
            <br /> – <span>Mrs. Meena, Hebbal.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HebbalTestimonial;
