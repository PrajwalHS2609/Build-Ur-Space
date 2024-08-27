import React, { useRef, useState } from "react";
import ShopKey from "./ShopKey";
import ShopProcess from "./ShopProcess";
import ShopBenefits from "./ShopBenefits";
import ShopCase from "./ShopCase";
import ShopPartners from "./ShopPartners";

const ShopReadmore = () => {
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
      <ShopKey />
      <ShopProcess />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <ShopBenefits />
        <ShopCase />
        <ShopPartners />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ShopReadmore;
