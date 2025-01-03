import React, { useRef, useState } from "react";
import CommercialKey from "./CommercialKey";
import CommercialProcess from "./CommercialProcess";
import CommercialSuccess from "./CommercialSuccess";
import CommercialWhy from "./CommercialWhy";
import CommercialElevate from "./CommercialElevate";
import CommercialWhyChoose from "./CommercialWhyChoose";

const CommercialReadmore = () => {
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
      <CommercialWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <CommercialKey />
        <CommercialProcess />
        <CommercialSuccess />
        <CommercialWhy />
        <CommercialElevate />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default CommercialReadmore;
