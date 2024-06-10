import React from "react";
import "./HomeServices.css";
import { Link } from "react-router-dom";
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
        <h2><Link to={props.link}>{props.txt}</Link></h2>
      </div>
    </div>
  );
};

export default HomeServiceCard;
