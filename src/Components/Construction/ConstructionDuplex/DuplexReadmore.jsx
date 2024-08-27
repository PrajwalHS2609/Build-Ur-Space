import React, { useRef, useState } from "react";
import DuplexProcess from "./DuplexProcess";
import DuplexExpertise from "./DuplexExpertise";
import DuplexSuccess from "./DuplexSuccess";
import DuplexWhy from "./DuplexWhy";

const DuplexReadmore = () => {
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
      <DuplexProcess />
      <DuplexExpertise />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <DuplexSuccess />
        <DuplexWhy />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default DuplexReadmore;
