import React, { useRef, useState } from "react";
import PujaWhyChoose from "./PujaWhyChoose";
import PujaProcess from "./PujaProcess";
import PujaFeature from "./PujaFeature";
import PujaWhy from "./PujaWhy";
import PujaCreate from "./PujaCreate";

const PujaReadmore = () => {
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
      <PujaWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <PujaProcess />
        <PujaFeature />
        <PujaWhy />
        <PujaCreate />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default PujaReadmore;
