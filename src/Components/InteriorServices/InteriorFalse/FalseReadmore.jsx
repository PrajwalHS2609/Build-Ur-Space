import React, { useRef, useState } from "react";
import FalseTypes from "./FalseTypes";
import FalseBenefits from "./FalseBenefits";
import FalseService from "./FalseService";
import FalseElevate from "./FalseElevate";

const FalseReadmore = () => {
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
      <FalseTypes />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <FalseBenefits />
        <FalseService />
        <FalseElevate />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default FalseReadmore;
