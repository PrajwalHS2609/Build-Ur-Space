import React, { useRef, useState } from "react";
import GypsumPartitionWhyChoose from "./GypsumPartitionWhyChoose";
import GypsumPartitionService from "./GypsumPartitionService";
import GypsumPartitionDiff from "./GypsumPartitionDiff";
import GypsumPartitionProcess from "./GypsumPartitionProcess";
import GypsumPartitionWhy from "./GypsumPartitionWhy";
import GypsumPartitionStarted from "./GypsumPartitionStarted";

const GypsumPartitionReadMore = () => {
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
      <GypsumPartitionWhyChoose />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <GypsumPartitionService />
        <GypsumPartitionDiff />
        <GypsumPartitionProcess />
        <GypsumPartitionWhy />
        <GypsumPartitionStarted />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default GypsumPartitionReadMore;
