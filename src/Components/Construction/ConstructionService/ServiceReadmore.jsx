import React, { useRef, useState } from "react";
import ServiceComprehensive from "./ServiceComprehensive";
import ServiceProcess from "./ServiceProcess";
import ServiceSuccess from "./ServiceSuccess";
import ServiceWhy from "./ServiceWhy";

const ServiceReadmore = () => {
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
      <ServiceComprehensive />
      <ServiceProcess />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <ServiceSuccess />
        <ServiceWhy />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ServiceReadmore;
