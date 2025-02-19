import React, { useRef, useState } from "react";
import KannurContent from "./KannurContent";

const KannurReadmore = () => {
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
    <div className="locationReadContainer">
      <p></p>
      <div ref={switchRef} className="locationReadDisplayContainer">
        <KannurContent />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default KannurReadmore;
