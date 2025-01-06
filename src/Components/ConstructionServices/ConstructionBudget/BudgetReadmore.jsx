import React, { useRef, useState } from 'react'
import BudgetKey from './BudgetKey';
import BudgetApproach from './BudgetApproach';
import BudgetBenefits from './BudgetBenefits';
import BudgetPopular from './BudgetPopular';
import BudgetBuilding from './BudgetBuilding';

const BudgetReadmore = () => {
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
      <BudgetKey />
      <div ref={switchRef} className="constructionReadDisplayContainer">
        <BudgetApproach />
        <BudgetBenefits />
        <BudgetPopular/>
        <BudgetBuilding/>
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  )
}

export default BudgetReadmore
