import React, { useRef, useState } from "react";
import YelahankaNewContent from "./YelahankaNewContent";

const YelahankaNewReadmore = () => {
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
        in Yelahanka New Town is the availability of skilled architects,
        engineers, and construction professionals who work diligently to bring
        the client's vision to life. From conceptualization to final execution,
        every stage of construction is handled with utmost professionalism.
        Clients can rely on{" "}
        <a href="https://buildurspace.com/house-construction-services-in-yelahanka-new-town">
          House Construction Services in Yelahanka New Town
        </a>{" "}
        to provide transparency in costs, timelines, and material selection,
        ensuring there are no hidden surprises during the construction process.
      </p>{" "}
      <div ref={switchRef} className="locationReadDisplayContainer">
        <YelahankaNewContent />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default YelahankaNewReadmore;
