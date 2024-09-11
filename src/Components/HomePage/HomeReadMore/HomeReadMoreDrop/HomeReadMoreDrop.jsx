import React, { useRef, useState } from "react";
import HomeReadMoreWhyChoose from "../HomeReadMoreWhyChoose";
import HomeReadMoreTransform from "../HomeReadMoreTransform";
import HomeReadMoreProcess from "../HomeReadMoreProcess";
import HomeReadMoreWhy from "../HomeReadMoreWhy";
import "./HomeReadMoreDrop.css";
const HomeReadMoreDrop = () => {
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
        <HomeReadMoreWhyChoose />
        <HomeReadMoreTransform />
        <HomeReadMoreProcess />
        <HomeReadMoreWhy />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default HomeReadMoreDrop;
