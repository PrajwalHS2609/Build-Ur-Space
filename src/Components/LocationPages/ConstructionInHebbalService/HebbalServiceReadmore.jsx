import React, { useRef, useState } from "react";
import HebbalServiceContent from './HebbalServiceContent';

const HebbalServiceReadmore = () => {
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
        One of the biggest advantages of opting for House Construction Services
        in Hebbal is the availability of skilled architects, engineers, and
        construction professionals who work diligently to bring the client's
        vision to life. From conceptualization to final execution, every stage
        of construction is handled with utmost professionalism. Clients can rely
        on{" "}
        <a href="https://buildurspace.com">
          House Construction Services in Hebbal
        </a>{" "}
        to provide transparency in costs, timelines, and material selection,
        ensuring there are no hidden surprises during the construction process.
      </p>
      <div ref={switchRef} className="locationReadDisplayContainer">
        <HebbalServiceContent />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default HebbalServiceReadmore;
