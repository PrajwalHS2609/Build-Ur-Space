import React, { useRef, useState } from "react";
import SalonWhy from "./SalonWhy";
import SalonSuccess from "./SalonSuccess";
import SalonElevate from "./SalonElevate";
import SalonProcess from "./SalonProcess";
import SalonKey from "./SalonKey";

const SalonReadmore = () => {
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
      <SalonWhy />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <SalonKey />
        <SalonProcess />
        <SalonSuccess />
        <SalonWhy/>
        <SalonElevate />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default SalonReadmore;
