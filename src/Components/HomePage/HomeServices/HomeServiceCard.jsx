import React from "react";
import "./HomeServices.css";
const HomeServiceCard = (props) => {
  return (
    <div className="homeServiceCardContainer">
      <div className="homeServiceCardImg">
        <img
          src={props.img}
          alt=""
        />
      </div>
      <div className="homeServiceCardTxt">
        <div className="homeServiceCardCover"></div>
        <h2>{props.txt}</h2>
      </div>
    </div>
  );
};

export default HomeServiceCard;
