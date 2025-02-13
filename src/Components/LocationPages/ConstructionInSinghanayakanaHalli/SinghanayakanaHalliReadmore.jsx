import React, { useRef, useState } from "react";
import SinghanayakanaHalliContent from "./SinghanayakanaHalliContent";

const SinghanayakanaHalliReadmore = () => {
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
        One of the significant benefits of working with a{" "}
        <a href="https://buildurspace.com/">
          {" "}
          reputable house construction company in Singhanayakana Halli
        </a>{" "}
        is access to skilled labor and cutting-edge technology. Experienced
        professionals bring expertise in masonry, carpentry, plumbing,
        electrical work, and finishing touches, ensuring that every aspect of
        the home is meticulously crafted. The use of high-quality materials
        enhances the longevity of the structure, reducing maintenance costs in
        the long run. Additionally, modern construction techniques integrate
        sustainable and eco-friendly materials, making your home
        energy-efficient and environmentally responsible.
      </p>
      <div ref={switchRef} className="locationReadDisplayContainer">
        <SinghanayakanaHalliContent />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default SinghanayakanaHalliReadmore;
