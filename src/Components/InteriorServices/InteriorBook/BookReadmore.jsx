import React, { useRef, useState } from "react";
import BookBenefits from "./BookBenefits";
import BookHow from "./BookHow";
import BookTransform from "./BookTransform";
import BookFeature from "./BookFeature";

const BookReadmore = () => {
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
      <BookFeature />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <BookBenefits />
        <BookHow />
        <BookTransform />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default BookReadmore;
