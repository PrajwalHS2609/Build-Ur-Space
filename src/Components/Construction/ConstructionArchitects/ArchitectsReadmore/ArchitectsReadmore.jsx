import React, { useRef, useState } from "react";
import "./ArchitectsReadmore.css";
import ArchitectsWhy from "./../ArchitectsWhy";
import ArchitectsLeading from "../ArchitectsLeading";
import ArchitectsSustainable from "./../ArchitectsSustainable";
import ArchitectsProcess from "./../ArchitectsProcess";
import ArchitectsUrban from "../ArchitectsUrban";
import ArchitectsResidential from "./../ArchitectsResidential";
import ArchitectsCommercial from "./../ArchitectsCommercial";
import ArchitectsExpertise from "./../ArchitectsExpertise";
const ArchitectsReadmore = () => {
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
      <ArchitectsWhy />
      <ArchitectsLeading />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <ArchitectsSustainable />
        <ArchitectsProcess />
        <ArchitectsResidential />
        <ArchitectsCommercial />
        <ArchitectsUrban />
        <ArchitectsExpertise />
      </div>
      <button className="openBut" onClick={open} id="openBut" >
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ArchitectsReadmore;
