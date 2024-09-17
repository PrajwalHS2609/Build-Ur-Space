import React, { useRef, useState } from 'react'
import NelamangalaWhyChoose from './NelamangalaWhyChoose';
import NelamangalaBenefits from './NelamangalaBenefits';
import NelamangalaService from './NelamangalaService';
import NelamangalaDiff from './NelamangalaDiff';
import NelamangalaCustomer from './NelamangalaCustomer';

const NelamangalaReadmore = () => {
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
    <NelamangalaWhyChoose />
    <div ref={switchRef} className="architectsReadDisplayContainer">
      <NelamangalaBenefits />
      <NelamangalaService />
      <NelamangalaDiff />
      <NelamangalaCustomer/>
    </div>
    <button className="openBut" onClick={open} id="openBut">
      Read {toggle ? "Less" : "More"}
    </button>
  </div>
  )
}

export default NelamangalaReadmore
