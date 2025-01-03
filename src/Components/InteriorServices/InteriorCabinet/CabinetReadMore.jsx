import React, { useRef, useState } from "react";
import CabinetBenefits from "./CabinetBenefits";
import CabinetChoosing from "./CabinetChoosing";
import CabinetInstall from "./CabinetInstall";
import CabinetWhy from "./CabinetWhy";
import CabinetProcess from "./CabinetProcess";

const CabinetReadMore = () => {
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
      <CabinetBenefits />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <CabinetChoosing />
        <CabinetInstall />
        <CabinetWhy />
        <CabinetProcess />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default CabinetReadMore;
