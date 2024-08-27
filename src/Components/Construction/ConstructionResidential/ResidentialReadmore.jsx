import React, { useRef, useState } from "react";
import ResidentialProcess from "./ResidentialProcess";
import ResidentialExpertise from "./ResidentialExpertise";
import ResidentialSuccess from "./ResidentialSuccess";
import ResidentialWhy from './ResidentialWhy';

const ResidentialReadmore = () => {
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
      <ResidentialProcess />
      <ResidentialExpertise />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <ResidentialSuccess />
        <ResidentialWhy />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ResidentialReadmore;
