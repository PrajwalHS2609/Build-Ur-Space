import React, { useRef, useState } from "react";
import GlassTypes from "./GlassTypes";
import GlassBenefits from "./GlassBenefits";
import GlassService from "./GlassService";
import GlassTransform from "./GlassTransform";

const GlassReadmore = () => {
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
      <GlassTypes />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <GlassBenefits />
        <GlassService />
        <GlassTransform />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default GlassReadmore;
