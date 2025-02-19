import React, { useRef, useState } from "react";
import KogiluContent from "./KogiluContent";

const KogiluReadmore = () => {
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
        {" "}
        <p>
          A reputed{" "}
          <a href="https://buildurspace.com/house-construction-services-in-kogilu">
            Home Construction Services in Kogilu
          </a>{" "}
          should understand the local terrain, climate, and regulations.
          BuildUrSpace ensures that every project adheres to legal requirements,
          safety standards, and environmental considerations. With a focus on
          durable materials, energy-efficient solutions, and structural
          integrity, BuildUrSpace guarantees homes that stand the test of time.
        </p>
      </p>
      <div ref={switchRef} className="locationReadDisplayContainer">
        <KogiluContent />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default KogiluReadmore;
