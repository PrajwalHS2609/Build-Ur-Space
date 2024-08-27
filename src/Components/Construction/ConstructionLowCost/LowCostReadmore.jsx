import React, { useRef, useState } from 'react'
import LowCostKeyFactor from './LowCostKeyFactor';
import LowCostProcess from './LowCostProcess';
import LowCostBenefits from './LowCostBenefits';
import LowCostCaseStudy from './LowCostCaseStudy';
import LowCostStart from './LowCostStart';

const LowCostReadmore = () => {
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
    <LowCostKeyFactor />
    <LowCostProcess />
    <div ref={switchRef} className="architectsReadDisplayContainer">
      <LowCostBenefits />
      <LowCostCaseStudy />
      <LowCostStart />

    </div>
    <button className="openBut" onClick={open} id="openBut">
      Read {toggle ? "Less" : "More"}
    </button>
  </div>
  )
}

export default LowCostReadmore
