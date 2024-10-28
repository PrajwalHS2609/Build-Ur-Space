import React, { useRef, useState } from "react";
import ToughenedGlassDoorAdvantage from "./ToughenedGlassDoorAdvantage";
import ToughenedGlassDoorWhyChoose from "./ToughenedGlassDoorWhyChoose";
import ToughenedGlassDoorApplication from "./ToughenedGlassDoorApplication";
import ToughenedGlassDoorHow from "./ToughenedGlassDoorHow";
import ToughenedGlassDoorMaintain from "./ToughenedGlassDoorMaintain";
import ToughenedGlassDoorInvest from "./ToughenedGlassDoorInvest";

const ToughenedGlassDoorReadMore = () => {
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
      <ToughenedGlassDoorAdvantage />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <ToughenedGlassDoorWhyChoose />
        <ToughenedGlassDoorApplication />
        <ToughenedGlassDoorHow />
        <ToughenedGlassDoorMaintain />
        <ToughenedGlassDoorInvest />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ToughenedGlassDoorReadMore;
