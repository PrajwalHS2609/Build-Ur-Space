import React from "react";
import "./WhereToFind.css";

const WhereToFindCard = (props) => {
  return (
    <div className="whereContainerCard">
      <div className="whereContentCard1">
        <div className="whereMap">{props.map}</div>
      </div>
      <div className="whereContentCard2">
        <h2>
         <span> Build Ur Space</span> {props.head}:
        </h2>
        <p>
         <span>Build Ur Space</span>: {props.para}
        </p>
      </div>
    </div>
  );
};

export default WhereToFindCard;
