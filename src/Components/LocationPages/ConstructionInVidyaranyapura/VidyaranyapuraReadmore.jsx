import React, { useRef, useState } from "react";
import VidyaranyapuraWhyChoose from './VidyaranyapuraWhyChoose';
import VidyaranyapuraService from "./VidyaranyapuraService";
import VidyaranyapuraWhat from './VidyaranyapuraWhat';
import VidyaranyapuraProcess from './VidyaranyapuraProcess';
import VidyaranyapuraBudget from "./VidyaranyapuraBudget";
import VidyaranyapuraTestimonial from "./VidyaranyapuraTestimonial";

const VidyaranyapuraReadmore = () => {
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
    <div className="locationReadContainer">
      <VidyaranyapuraWhyChoose />
      <div ref={switchRef} className="locationReadDisplayContainer">
        <VidyaranyapuraService />
        <VidyaranyapuraWhat />
        <VidyaranyapuraProcess />
        <VidyaranyapuraBudget />
        <VidyaranyapuraTestimonial />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default VidyaranyapuraReadmore;
