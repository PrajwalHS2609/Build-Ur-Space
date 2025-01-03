import React, { useRef, useState } from "react";
import RetailStoreKey from './RetailStoreKey';
import RetailStoreTailored from './RetailStoreTailored';

const RetailStoreReadmore = () => {
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
      <RetailStoreKey />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <RetailStoreTailored />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default RetailStoreReadmore;
