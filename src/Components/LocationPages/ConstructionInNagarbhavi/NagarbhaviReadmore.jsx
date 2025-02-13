import React, { useRef, useState } from 'react'
import NagarbhaviWhyChoose from './NagarbhaviWhyChoose';
import NagarbhaviService from './NagarbhaviService';
import NagarbhaviProcess from './NagarbhaviProcess';
import NagarbhaviBenefits from './NagarbhaviBenefits';
import NagarbhaviStarted from './NagarbhaviStarted';

const NagarbhaviReadmore = () => {
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
  <div className="locationReadContainer">
    <NagarbhaviWhyChoose />
    <div ref={switchRef} className="locationReadDisplayContainer">
      <NagarbhaviService />
      <NagarbhaviProcess />
      <NagarbhaviBenefits />
      <NagarbhaviStarted />
    </div>
    <button className="openBut" onClick={open} id="openBut">
      Read {toggle ? "Less" : "More"}
    </button>
  </div>
  )
}

export default NagarbhaviReadmore
