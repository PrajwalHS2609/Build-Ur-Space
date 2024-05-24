import React from "react";
import "./OurProcess.css";
const OurProcessCard = (props) => {
  return (
    <div className="ourProcessCardContainer">
      <div className="ourProcessImg">
        <img src={props.img} alt="" />
      </div>
      <div className="ourProcessTxt">
        <h3>{props.txt}</h3>
      </div>
    </div>
  );
};

export default OurProcessCard;
