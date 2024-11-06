import React, { useRef, useState } from "react";
import MagadiService from "./MagadiService";
import MagadiBenefits from "./MagadiBenefits";
import MagadiBuilding from "./MagadiBuilding";
import MagadiCustomer from "./MagadiCustomer";
import MagadiConnect from "./MagadiConnect";
import MagadiProcess from './MagadiProcess';

const MagadiReadmore = () => {
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
      <MagadiService />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <MagadiProcess />
        <MagadiBenefits />
        <MagadiBuilding />
        <MagadiCustomer />
        <MagadiConnect />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default MagadiReadmore;
