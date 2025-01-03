import React, { useRef, useState } from "react";
import KindergartenKey from "./KindergartenKey";
import KindergartenWhyChoose from "./KindergartenWhyChoose";
import KindergartenRecent from "./KindergartenRecent";

const KindergartenReadmore = () => {
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
    <div>
      <div className="architectsReadContainer">
        <KindergartenKey />
        <div ref={switchRef} className="architectsReadDisplayContainer">
          <KindergartenWhyChoose />
          <KindergartenRecent />
        </div>
        <button className="openBut" onClick={open} id="openBut">
          Read {toggle ? "Less" : "More"}
        </button>
      </div>
    </div>
  );
};

export default KindergartenReadmore;
