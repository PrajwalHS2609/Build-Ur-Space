import React, { useRef, useState } from "react";
import "./../LocationStyle.css"
import MSPalyaWhyChoose from "./MSPalyaWhyChoose";
import MSPalyaService from "./MSPalyaService";
import MSPalyaBenefits from "./MSPalyaBenefits";
import MSPalyaWhy from "./MSPalyaWhy";
import MSPalyaHow from "./MSPalyaHow";
import MSPalyaTrends from "./MSPalyaTrends";
import MSPalyaSuccess from "./MSPalyaSuccess";
const MSPalyaReadmore = () => {
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
      <MSPalyaWhyChoose />
      <div ref={switchRef} className="locationReadDisplayContainer">
        <MSPalyaService />
        <MSPalyaWhy />
        <MSPalyaHow />
        <MSPalyaBenefits />
        <MSPalyaTrends />
        <MSPalyaSuccess />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default MSPalyaReadmore;
