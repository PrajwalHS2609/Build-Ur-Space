import React from "react";
import "./HomeWhat.css";

const HomeWhatCard = (props) => {
  return (
    <div className="whatCardContainer">
      <div className="whatImgContainer">
        <img src={props.img} alt="" />
      </div>
      <div className="whatCardHeadContainer">
        <h3> {props.head}</h3>
      </div>
      <div className="whatTxtContainer">
        <p>
         {props.para}
        </p>
      </div>
    </div>
  );
};

export default HomeWhatCard;
