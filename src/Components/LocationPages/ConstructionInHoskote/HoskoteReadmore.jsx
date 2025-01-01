import React, { useRef, useState } from "react";
import HoskoteWhy from "./HoskoteWhy";
import HoskoteService from "./HoskoteService";
import HoskoteWhyBuild from "./HoskoteWhyBuild";

const HoskoteReadmore = () => {
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
      <HoskoteWhy />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <HoskoteService />
        <HoskoteWhyBuild />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default HoskoteReadmore;
