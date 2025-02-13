import React, { useRef, useState } from "react";
import KothnurContent from "./KothnurContent";

const KothnurReadmore = () => {
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
        Choosing BuildUrSpace as your{" "}
        <a href="https://buildurspace.com/home-and-commercial-interior-design">
          house construction company in Kothnur
        </a>
        ensures that you receive expert consultation, transparent pricing, and
        customized solutions tailored to your specific needs. Whether you are
        building a compact residence, a luxury villa, or an independent house,
        our team ensures a hassle-free and streamlined construction process from
        start to finish. We also emphasize eco-friendly construction practices,
        integrating energy-efficient solutions to make homes more sustainable
        and cost-effective in the long run.
      </p>
      <div ref={switchRef} className="locationReadDisplayContainer">
        <KothnurContent />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default KothnurReadmore;
