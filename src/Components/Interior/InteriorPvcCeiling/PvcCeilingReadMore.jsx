import React, { useRef, useState } from 'react'
import PvcCeilingWhyChoose from './PvcCeilingWhyChoose';
import PvcCeilingApplication from './PvcCeilingApplication';
import PvcCeilingAdvantage from './PvcCeilingAdvantage';
import PvcCeilingProcess from './PvcCeilingProcess';
import PvcCeilingUpgrade from './PvcCeilingUpgrade';

const PvcCeilingReadMore = () => {
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
    <PvcCeilingAdvantage />
    <div ref={switchRef} className="architectsReadDisplayContainer">
      <PvcCeilingApplication />
      <PvcCeilingWhyChoose />
      <PvcCeilingProcess />
      <PvcCeilingUpgrade />
    </div>
    <button className="openBut" onClick={open} id="openBut">
      Read {toggle ? "Less" : "More"}
    </button>
  </div>
  )
}

export default PvcCeilingReadMore
