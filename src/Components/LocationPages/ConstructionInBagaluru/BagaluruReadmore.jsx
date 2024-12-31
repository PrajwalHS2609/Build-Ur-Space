import React, { useRef, useState } from 'react'
import BagaluruWhyChoose from './BagaluruWhyChoose';
import BagaluruService from './BagaluruService';
import BagaluruWhat from './BagaluruWhat';
import BagaluruProcess from './BagaluruProcess';
import BagaluruBudget from './BagaluruBudget';
import BagaluruTestimonial from './BagaluruTestimonial';

const BagaluruReadmore = () => {
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
      <BagaluruWhyChoose />
      <div ref={switchRef} className="locationReadDisplayContainer">
        <BagaluruService />
        <BagaluruWhat />
        <BagaluruProcess />
        <BagaluruBudget />
        <BagaluruTestimonial />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  )
}

export default BagaluruReadmore
