import React, { useRef, useState } from "react";
import MadanaykanahalliWhyChoose from "./MadanaykanahalliWhyChoose";
import MadanaykanahalliBenefits from "./MadanaykanahalliBenefits";
import MadanaykanahalliTrust from "./MadanaykanahalliTrust";
import MadanaykanahalliCustomer from './MadanaykanahalliCustomer';
import MadanaykanahalliFuture from "./MadanaykanahalliFuture";
import MadanaykanahalliWhy from "./MadanaykanahalliWhy";

const MadanaykanahalliReadmore = () => {
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
      <MadanaykanahalliWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <MadanaykanahalliBenefits />
        <MadanaykanahalliWhy />
        <MadanaykanahalliTrust />
        <MadanaykanahalliCustomer/>
        <MadanaykanahalliFuture/>
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default MadanaykanahalliReadmore;
