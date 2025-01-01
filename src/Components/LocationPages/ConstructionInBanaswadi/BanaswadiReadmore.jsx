import React, { useRef, useState } from "react";
import BanaswadiWhyChoose from "./BanaswadiWhyChoose";
import BanaswadiService from "./BanaswadiService";
import BanaswadiBenefits from "./BanaswadiBenefits";
import BanaswadiTrust from "./BanaswadiTrust";

const BanaswadiReadmore = () => {
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
      <BanaswadiWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <BanaswadiService />
        <BanaswadiBenefits />
        <BanaswadiTrust />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default BanaswadiReadmore;
