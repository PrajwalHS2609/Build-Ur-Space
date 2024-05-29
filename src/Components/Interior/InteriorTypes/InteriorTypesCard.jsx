import React from "react";
import "./InteriorTypes.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
const InteriorTypesCard = (props) => {
  return (
    <div className="interiorTypeCardContainer">
      <div className="interiorTypeCardImg">
        <img
          src={props.img}
          alt=""
        />
      </div>
      <div className="interiorTypeCardTxt">
        <div className="interiorTypeCardHead">
          <h2>{props.head}</h2>
        </div>
        <div className="interiorTypeCardPara">
          <p>{props.para}</p>
        </div>
      </div>
      <div className="interiorTypeCardNavi">
        <FontAwesomeIcon
          icon={faAngleRight}
          className="inIcon"
        ></FontAwesomeIcon>
      </div>
    </div>
  );
};

export default InteriorTypesCard;
