import React from "react";
import "./InteriorTypes.css";
import { Link } from "react-router-dom";
const InteriorTypesCard = (props) => {
  return (
    <div className="interiorTypeCardContainer">
      <Link to={props.link}>
        <div className="interiorTypeCardImg">
          <img src={props.img} alt="" />
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
          {/* <FontAwesomeIcon
          icon={faAngleRight}
          className="inIcon"
        ></FontAwesomeIcon> */}
        </div>
      </Link>
    </div>
  );
};

export default InteriorTypesCard;
