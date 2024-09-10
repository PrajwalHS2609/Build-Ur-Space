import React, { useRef, useState } from "react";
import DevanahalliWhyChoose from "./DevanahalliWhyChoose";
import DevanahalliService from "./DevanahalliService";
import DevanahalliBenefits from "./DevanahalliBenefits";
import DevanahalliTailored from "./DevanahalliTailored";

const DevanahalliReadmore = () => {
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
      <DevanahalliWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <DevanahalliService />
        <DevanahalliBenefits />
        <DevanahalliTailored />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default DevanahalliReadmore;
