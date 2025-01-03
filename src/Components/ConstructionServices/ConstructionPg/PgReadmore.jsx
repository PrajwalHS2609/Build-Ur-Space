import React, { useRef, useState } from "react";
import PgTailored from './PgTailored';
import PgDesigning from './PgDesigning';
import PgNavigation from './PgNavigation';
import PgSustainable from './PgSustainable';
import PgMaximize from './PgMaximize';
import PgProcess from './PgProcess';
import PgTenant from './PgTenant';
import PgLongTerm from './PgLongTerm';

const PgReadmore = () => {
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
      <PgTailored />
      <PgDesigning />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <PgNavigation />
        <PgSustainable />
        <PgMaximize />
        <PgProcess />
        <PgTenant />
        <PgLongTerm />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default PgReadmore;
