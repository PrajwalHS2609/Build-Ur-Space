import React, { useRef, useState } from "react";
import ToughenedGlassPartitionKey from "./ToughenedGlassPartitionKey";
import ToughenedGlassPartitionApplication from "./ToughenedGlassPartitionApplication";
import ToughenedGlassPartitionTrust from "./ToughenedGlassPartitionTrust";
import ToughenedGlassPartitionChoose from "./ToughenedGlassPartitionChoose";
import ToughenedGlassPartitionMaintain from "./ToughenedGlassPartitionMaintain";
import ToughenedGlassPartitionWhy from "./ToughenedGlassPartitionWhy";

const ToughenedGlassPartitionReadMore = () => {
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
      <ToughenedGlassPartitionKey />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <ToughenedGlassPartitionApplication />
        <ToughenedGlassPartitionTrust />
        <ToughenedGlassPartitionChoose />
        <ToughenedGlassPartitionMaintain />
        <ToughenedGlassPartitionWhy />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ToughenedGlassPartitionReadMore;
