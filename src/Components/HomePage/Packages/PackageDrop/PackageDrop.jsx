import React, { useState } from "react";
import "../Package.css";
const PackageDrop = () => {
  let [toggle, setToggle] = useState(false);
  let handleDrop = () => {
    let drop = document.querySelector(".packageDropDown");
    let nondrop = document.querySelector(".packageDropDown");


    if (!toggle) {
      setToggle(true);
      drop.style.display = "flex";
    } else {
      setToggle(false);
      nondrop.style.display = "none";
    }
  };

  return (
    <div className="packageDropContainer">
      <div className="packageContent" onClick={handleDrop}>
        <div className="packageDropTxt">
          <h3>Designs & Drawings</h3>
        </div>
        <div className="packageDropIcon">
          <h3>{toggle ? "-" : "+"}</h3>
        </div>
      </div>
      <div className="packageDropDown">
        <li>Layout</li>
        <li>Basic</li>
        <li>Design</li>
        <li>3D</li>
      </div>
    </div>
  );
};

export default PackageDrop;
