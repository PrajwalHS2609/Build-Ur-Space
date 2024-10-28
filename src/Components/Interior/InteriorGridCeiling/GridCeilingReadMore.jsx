import React, { useRef, useState } from "react";
import GridCeilingAdvantage from "./GridCeilingAdvantage";
import GridCeilingApplication from "./GridCeilingApplication";
import GridCeilingWhyChoose from "./GridCeilingWhyChoose";
import GridCeilingProcess from "./GridCeilingProcess";
import GridCeilingTransform from "./GridCeilingTransform";

const GridCeilingReadMore = () => {
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
      <GridCeilingAdvantage />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <GridCeilingApplication />
        <GridCeilingWhyChoose />
        <GridCeilingProcess />
        <GridCeilingTransform />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default GridCeilingReadMore;
