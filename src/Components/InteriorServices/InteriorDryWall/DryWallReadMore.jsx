import React, { useRef, useState } from "react";
import DryWallWhy from "./DryWallWhy";
import DryWallService from "./DryWallService";
import DryWallDiff from "./DryWallDiff";
import DryWallProcess from "./DryWallProcess";
import DryWallApplication from './DryWallApplication';
import DryWallTransform from "./DryWallTransform";

const DryWallReadMore = () => {
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
      <DryWallWhy />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <DryWallService />
        <DryWallDiff />
        <DryWallProcess />
        <DryWallApplication />
        <DryWallTransform/>
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default DryWallReadMore;
