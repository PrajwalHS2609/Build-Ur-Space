import React, { useRef, useState } from "react";
import StudyFeature from './StudyFeature';
import StudyBenefits from "./StudyBenefits";
import StudyHow from "./StudyHow";
import StudyElevate from "./StudyElevate";

const StudyReadmore = () => {
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
        <StudyFeature/>
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <StudyBenefits/>
        <StudyHow/>
        <StudyElevate/>
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default StudyReadmore;
