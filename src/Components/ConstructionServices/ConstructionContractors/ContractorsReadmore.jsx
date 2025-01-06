import React, { useRef, useState } from "react";
import ContractorsComprehensive from "./ContractorsComprehensive";
import ContractorsProcess from "./ContractorsProcess";
import ContractorsSuccess from "./ContractorsSuccess";
import ContractorsWhy from "./ContractorsWhy";

const ContractorsReadmore = () => {
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
      <ContractorsComprehensive />
      <ContractorsProcess />
      <div ref={switchRef} className="constructionReadDisplayContainer">
        <ContractorsSuccess />
        <ContractorsWhy />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ContractorsReadmore;
