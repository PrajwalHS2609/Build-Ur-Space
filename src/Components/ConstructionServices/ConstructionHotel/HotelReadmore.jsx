import React, { useRef, useState } from "react";
import HotelTailored from "./HotelTailored";
import HotelKeyFactors from "./HotelKeyFactors";
import HotelProcess from "./HotelProcess";
import HotelEnhancing from "./HotelEnhancing";
import HotelMaximize from "./HotelMaximize";
import HotelRole from "./HotelRole";
import HotelFuture from "./HotelFuture";
import HotelPartner from "./HotelPartner";

const HotelReadmore = () => {
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
    <div className="constructionReadContainer">
      <HotelTailored />
      <HotelKeyFactors />
      <div ref={switchRef} className="constructionReadDisplayContainer">
        <HotelProcess />
        <HotelEnhancing />
        <HotelMaximize />
        <HotelRole />
        <HotelFuture />
        <HotelPartner />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default HotelReadmore;
