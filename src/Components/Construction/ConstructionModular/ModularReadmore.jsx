import React, { useRef, useState } from "react";
import ModularChoosing from "./ModularChoosing";
import ModularInstall from "./ModularInstall";
import ModularWhy from "./ModularWhy";
import ModularProcess from "./ModularProcess";

const ModularReadmore = () => {
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
      <ModularChoosing />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <ModularInstall />
        <ModularWhy />
        <ModularProcess />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ModularReadmore;
