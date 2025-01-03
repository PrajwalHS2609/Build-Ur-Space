import React, { useRef, useState } from "react";
import BedBenefits from "./BedBenefits";
import BedChoosing from "./BedChoosing";
import BedInstall from "./BedInstall";
import BedWhy from "./BedWhy";
import BedProcess from "./BedProcess";

const BedReadmore = () => {
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
        <BedBenefits />
        <div ref={switchRef} className="architectsReadDisplayContainer">
          <BedChoosing />
          <BedInstall />
          <BedWhy />
          <BedProcess />
        </div>
        <button className="openBut" onClick={open} id="openBut">
          Read {toggle ? "Less" : "More"}
        </button>
      </div>
  );
};

export default BedReadmore;
