import React, { useRef, useState } from "react";
import HomeService from "./HomeService";
import HomeHow from "./HomeHow";
import HomeBenefits from "./HomeBenefits";
import HomeTransform from "./HomeTransform";

const HomeReadmore = () => {
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
      <HomeService />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <HomeHow />
        <HomeBenefits />
        <HomeTransform />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default HomeReadmore;
