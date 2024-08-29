import React, { useRef, useState } from "react";
import ShowerWhyChoose from "./ShowerWhyChoose";
import ShowerTypes from "./ShowerTypes";
import ShowerProcess from "./ShowerProcess";
import ShowerCustomization from "./ShowerCustomization";
import ShowerWhy from "./ShowerWhy";

const ShowerReadmore = () => {
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
      <ShowerWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <ShowerTypes />
        <ShowerProcess />
        <ShowerCustomization />
        <ShowerWhy />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ShowerReadmore;
