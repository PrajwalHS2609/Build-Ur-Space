import React, { useRef, useState } from "react";
import SarjapuraWhyChoose from "./SarjapuraWhyChoose";
import SarjapuraProcess from "./SarjapuraProcess";
import SarjapuraHeadTailored from "./SarjapuraHeadTailored";
import SarjapuraWhy from "./SarjapuraWhy";

const SarjapuraReadmore = () => {
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
      <SarjapuraWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <SarjapuraProcess />
        <SarjapuraWhy />
        <SarjapuraHeadTailored />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default SarjapuraReadmore;
