import React, { useRef, useState } from "react";
import RentalWhy from './RentalWhy';
import RentalTailored from './RentalTailored';
import RentalUnderstanding from './RentalUnderstanding';
import RentalSustainable from './RentalSustainable';
import RentalMaximize from './RentalMaximize';
import RentalProcess from './RentalProcess';
import RentalDesigning from './RentalDesigning';
import RentalLegal from './RentalLegal';
import RentalLongTerm from './RentalLongTerm';

const RentalReadmore = () => {
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
      <RentalWhy />
      <RentalTailored />
      <div ref={switchRef} className="constructionReadDisplayContainer">
        <RentalUnderstanding />
        <RentalSustainable />
        <RentalMaximize />
        <RentalProcess />
        <RentalDesigning />
        <RentalLegal />
        <RentalLongTerm/>
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default RentalReadmore;
