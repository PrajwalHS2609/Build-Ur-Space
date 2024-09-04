import React, { useRef, useState } from "react";
import ResortCustom from "./ResortCustom";
import ResortInCorporate from "./ResortInCorporate";

const ResortReadmore = () => {
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
      <ResortCustom />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <ResortInCorporate />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ResortReadmore;
