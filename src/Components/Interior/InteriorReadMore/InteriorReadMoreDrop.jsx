import React, { useRef, useState } from "react";
import InteriorReadMoreWhy from './InteriorReadMoreWhy';
import InteriorReadMoreApproach from './InteriorReadMoreApproach';
import InteriorReadMoreKey from './InteriorReadMoreKey';
import InteriorReadMoreWhyBuild from './InteriorReadMoreWhyBuild';
import InteriorReadMoreWhat from './InteriorReadMoreWhat';
import InteriorReadMoreElevate from './InteriorReadMoreElevate';

const InteriorReadMoreDrop = () => {
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
    <div className="homeReadMoreDropContainer">
      <div ref={switchRef} className="homeReadMoreDropDisplay">
        <InteriorReadMoreWhy />
        <InteriorReadMoreApproach />
        <InteriorReadMoreKey />
        <InteriorReadMoreWhyBuild />
        <InteriorReadMoreWhat/>
        <InteriorReadMoreElevate/>
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default InteriorReadMoreDrop;
