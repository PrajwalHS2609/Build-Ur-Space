import React, { useRef, useState } from 'react'
import JewelleryKey from './JewelleryKey';
import JewelleryWhyChoose from './JewelleryWhyChoose';
import JewelleryProcess from './JewelleryProcess';
import JewelleryRecent from './JewelleryRecent';

const JewelleryReadmore = () => {
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
      <JewelleryKey />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <JewelleryWhyChoose />
        <JewelleryProcess />
        <JewelleryRecent />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  )
}

export default JewelleryReadmore
