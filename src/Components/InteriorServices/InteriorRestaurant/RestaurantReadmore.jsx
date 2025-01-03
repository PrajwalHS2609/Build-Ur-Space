import React, { useRef, useState } from "react";
import RestaurantKey from "./RestaurantKey";
import RestaurantBenefits from "./RestaurantBenefits";
import RestaurantProcess from "./RestaurantProcess";

const RestaurantReadmore = () => {
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
      <RestaurantKey />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <RestaurantBenefits />
        <RestaurantProcess />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default RestaurantReadmore;
