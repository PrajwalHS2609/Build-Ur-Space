import React, { useRef, useState } from "react";
import BidadiService from "./BidadiService";
import BidadiBenefits from "./BidadiBenefits";
import BidadiExpertise from "./BidadiExpertise";
import BidadiCustomer from "./BidadiCustomer";
import BidadiBegin from "./BidadiBegin";

const BidadiReadmore = () => {
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
      <BidadiService />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <BidadiBenefits />
        <BidadiExpertise />
        <BidadiCustomer />
        <BidadiBegin />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default BidadiReadmore;