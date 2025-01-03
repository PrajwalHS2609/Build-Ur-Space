import React, { useRef, useState } from "react";
import GypsumCelingWhy from "./GypsumCelingWhy";
import GypsumCelingService from "./GypsumCelingService";
import GypsumCelingProcess from "./GypsumCelingProcess";
import GypsumCelingDiff from "./GypsumCelingDiff";
import GypsumCelingStarted from "./GypsumCelingStarted";

const GypsumCelingReadMore = () => {
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
      <GypsumCelingWhy />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <GypsumCelingService />
        <GypsumCelingDiff />
        <GypsumCelingProcess />
        <GypsumCelingStarted />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default GypsumCelingReadMore;
