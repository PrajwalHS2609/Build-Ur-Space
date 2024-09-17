import React, { useRef, useState } from "react";
import ChikkabanavaraWhyChoose from "./ChikkabanavaraWhyChoose";
import ChikkabanavaraCustom from "./ChikkabanavaraCustom";

const ChikkabanavaraReadmore = () => {
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
      <ChikkabanavaraWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <ChikkabanavaraCustom />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ChikkabanavaraReadmore;
