import React from "react";
import RRNagarContent from "./RRNagarContent";

const RRNagarReadmore = () => {
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
        One of the key advantages of hiring a{" "}
        <a href="https://buildurspace.com/rental-house-construction-in-bangalore">
          house construction company in RR Nagar
        </a>{" "}
        is the expertise they bring in material selection and procurement. By
        leveraging industry knowledge and supplier networks, they source
        high-quality construction materials at competitive prices, ensuring
        cost-effectiveness without compromising on quality. From cement and
        steel to tiles and fittings, a trusted house construction company in RR
        Nagar ensures that all materials used are durable and sourced from
        reputed manufacturers.
      </p>
      <div ref={switchRef} className="locationReadDisplayContainer">
        <RRNagarContent />
      </div>
      <button className="openBut" onClick={open} id="openBut">
        Read {toggle ? "Less" : "More"}
      </button>
    </div>
  );
};

export default RRNagarReadmore;
