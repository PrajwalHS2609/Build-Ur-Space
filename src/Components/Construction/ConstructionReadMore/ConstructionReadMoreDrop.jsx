import React, { useRef, useState } from "react";
import ConstructionReadMoreUnderstand from "./ConstructionReadMoreUnderstand";
import ConstructionReadMoreHow from "./ConstructionReadMoreHow";
import ConstructionReadMoreBreaking from "./ConstructionReadMoreBreaking";
import ConstructionReadMoreWhy from "./ConstructionReadMoreWhy";
import ConstructionReadMoreChoose from "./ConstructionReadMoreChoose";
import ConstructionReadMoreMaking from './ConstructionReadMoreMaking';

const ConstructionReadMoreDrop = () => {
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
        <ConstructionReadMoreBreaking/>
        <ConstructionReadMoreHow />
        <ConstructionReadMoreUnderstand />
        <ConstructionReadMoreWhy />
        <ConstructionReadMoreChoose/>
        <ConstructionReadMoreMaking/>
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ConstructionReadMoreDrop;
