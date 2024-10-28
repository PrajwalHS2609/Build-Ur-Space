import React, { useRef, useState } from "react";
import WoodenCeilingWhy from "./WoodenCeilingWhy";
import WoodenCeilingApplication from "./WoodenCeilingApplication";
import WoodenCeilingHow from "./WoodenCeilingHow";
import WoodenCeilingTransform from "./WoodenCeilingTransform";

const WoodenCeilingReadMore = () => {
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
      <WoodenCeilingWhy />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <WoodenCeilingApplication />
        <WoodenCeilingWhy />
        <WoodenCeilingHow />
        <WoodenCeilingTransform />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default WoodenCeilingReadMore;
