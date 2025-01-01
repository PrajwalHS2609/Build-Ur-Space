import React, { useRef, useState } from "react";
import HerohalliService from "./HerohalliService";
import HerohalliProcess from "./HerohalliProcess";
import HerohalliBenefits from "./HerohalliBenefits";
import HerohalliWhy from "./HerohalliWhy";
import HerohalliCustomer from "./HerohalliCustomer";
import HerohalliBuilding from "./HerohalliBuilding";

const HerohalliReadmore = () => {
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
      <HerohalliService />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <HerohalliProcess />
        <HerohalliBenefits />
        <HerohalliWhy />
        <HerohalliCustomer />
        <HerohalliBuilding />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default HerohalliReadmore;
