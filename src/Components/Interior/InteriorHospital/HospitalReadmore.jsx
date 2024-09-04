import React, { useRef, useState } from "react";
import HospitalProcess from './HospitalProcess';
import HospitalKey from './HospitalKey';
import HospitalBenefits from './HospitalBenefits';

const HospitalReadmore = () => {
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
      <HospitalKey />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <HospitalBenefits />
        <HospitalProcess />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default HospitalReadmore;
