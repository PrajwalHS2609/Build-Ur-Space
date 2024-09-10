import React, { useRef, useState } from "react";
import KrPuramTailored from "./KrPuramTailored";
import KrPuramProject from "./KrPuramProject";
import KrPuramWhy from "./KrPuramWhy";

const KrPuramReadmore = () => {
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
      <KrPuramWhy />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <KrPuramTailored />
        <KrPuramProject />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default KrPuramReadmore;
