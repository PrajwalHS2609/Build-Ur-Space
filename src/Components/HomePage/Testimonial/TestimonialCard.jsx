import React from "react";

const TestimonialCard = (props) => {
  return (
    <div className="testimonialCardContainer">
      <p>
       {props.para}
        <br /> <br />
        <span>{props.name}</span>
      </p>
    </div>
  );
};

export default TestimonialCard;
