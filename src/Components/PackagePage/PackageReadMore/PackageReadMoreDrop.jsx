import React, { useRef, useState } from "react";
import PackageReadMoreKey from "./PackageReadMoreKey";
import PackageReadMoreHow from "./PackageReadMoreHow";
import PackageReadMoreBenefits from "./PackageReadMoreBenefits";
import PackageReadMoreSignific from "./PackageReadMoreSignific";

const PackageReadMoreDrop = () => {
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
        <PackageReadMoreSignific />
        <PackageReadMoreKey />
        <PackageReadMoreHow />
        <PackageReadMoreBenefits />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default PackageReadMoreDrop;
