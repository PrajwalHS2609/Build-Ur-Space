import React, { useRef, useState } from "react";
import RajankunteWhyChoose from "./RajankunteWhyChoose";
import RajankunteService from "./RajankunteService";
import RajankunteBenefits from "./RajankunteBenefits";
import RajankunteCustomer from "./RajankunteCustomer";

const RajankunteReadmore = () => {
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
      <RajankunteWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <RajankunteService />
        <RajankunteBenefits />
        <RajankunteCustomer />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default RajankunteReadmore;
