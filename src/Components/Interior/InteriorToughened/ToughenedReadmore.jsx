import React, { useRef, useState } from "react";
import ToughenedBenefits from "./ToughenedBenefits";
import ToughenedTypes from "./ToughenedTypes";
import ToughenedProcess from "./ToughenedProcess";
import ToughenedWhyChoose from "./ToughenedWhyChoose";

const ToughenedReadmore = () => {
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
      <ToughenedBenefits />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <ToughenedTypes />
        <ToughenedProcess />
        <ToughenedWhyChoose />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ToughenedReadmore;
