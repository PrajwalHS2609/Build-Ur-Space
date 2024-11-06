import React from "react";
import KengeriService from './KengeriService';
import KengeriBenefits from './KengeriBenefits';
import KengeriExpertise from './KengeriExpertise';
import KengeriClient from './KengeriClient';
import KengeriCustomer from './KengeriCustomer';
import KengeriStep from './KengeriStep';

const KengeriReadmore = () => {
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
      <KengeriService />
      <div ref={switchRef} className="architectsReadDisplayContainer">
        <KengeriBenefits />
        <KengeriExpertise />
        <KengeriClient />
        <KengeriCustomer />
        <KengeriStep />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default KengeriReadmore;
