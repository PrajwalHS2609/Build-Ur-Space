import React, { useRef, useState } from "react";
import SahakarNagarContent from "./SahakarNagarContent";

const SahakarNagarReadmore = () => {
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
      <p>
        BuildUrSpace specializes in customized{" "}
        <a href="https://buildurspace.com/house-construction-services-in-sahakar-nagar">
          house construction services in Sahakar Nagar
        </a>
        , understanding the unique needs of homeowners. From selecting the best
        construction materials to implementing modern architectural designs, we
        prioritize durability and aesthetics. Every project we undertake is
        executed with a keen focus on precision, ensuring long-lasting
        structures that withstand the test of time.
      </p>{" "}
      <div ref={switchRef} className="locationReadDisplayContainer">
        <SahakarNagarContent />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default SahakarNagarReadmore;
