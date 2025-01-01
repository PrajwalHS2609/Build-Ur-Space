import React, { useRef, useState } from "react";
import HesaraghattaWhyChoose from "./HesaraghattaWhyChoose";
import HesaraghattaImp from "./HesaraghattaImp";
import HesaraghattaService from "./HesaraghattaService";
import HesaraghattaCustomer from "./HesaraghattaCustomer";
import HesaraghattaWhy from "./HesaraghattaWhy.jsx";

const HesaraghattaReadmore = () => {
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
      <HesaraghattaWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <HesaraghattaImp />
        <HesaraghattaService />
        <HesaraghattaWhy />
        <HesaraghattaCustomer />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};
  
export default HesaraghattaReadmore;
