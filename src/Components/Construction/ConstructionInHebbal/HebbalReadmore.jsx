import React, { useRef, useState } from "react";
import HebbalWhyChoose from "./HebbalWhyChoose";
import HebbalService from "./HebbalService";
import HebbalTestimonial from "./HebbalTestimonial";
import HebbalJourney from "./HebbalJourney";
import HebbalWhy from "./HebbalWhy";

const HebbalReadmore = () => {
  let [toggle, setToggle] = useState(false);
  let switchRef = useRef();
  let open = () => {
    if (!toggle) {
      setToggle(true);
      switchRef.current.style.display = "block";
    } else {
      setToggle(false);
      switchRef.current.style.display = "none";
    }
  };
  return (
    <div className="architectsReadContainer">
      <HebbalWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <HebbalService />
        <HebbalWhy />
        <HebbalTestimonial />
        <HebbalJourney />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default HebbalReadmore;
