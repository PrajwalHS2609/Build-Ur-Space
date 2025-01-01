import React, { useRef, useState } from "react";
import KanakapuraWhyChoose from "./KanakapuraWhyChoose";
import KanakapuraTailored from "./KanakapuraTailored";
import KanakapuraCustomer from "./KanakapuraCustomer";
import KanakapuraWhy from "./KanakapuraWhy";

const KanakapuraReadmore = () => {
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
      <KanakapuraWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <KanakapuraWhy />
        <KanakapuraTailored />
        <KanakapuraCustomer />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default KanakapuraReadmore;
