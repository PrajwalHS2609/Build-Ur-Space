import React from "react";
import "./Portfolio.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faStairs,
  faArrowsUpDownLeftRight,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const PortfolioCard = (props) => {
  return (
    <div className="portfolioCardContainer">
      <div className="portfolioLink">
        <Link to={"/"}></Link>
      </div>
      <div className="portfolioCardImg">
        <img className="portfolioImg" src={props.img} alt="" />
      </div>
      <div className="portfolioCardLoc">
        <div className="portfolioLocName">
          <h3>{props.name}</h3>
        </div>
        <div className="portfolioLocPara">
          <div className="portfolioLocAdd">
            <div className="portfolioLocAddItem1">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="portoIcon"
              ></FontAwesomeIcon>
            </div>
            <div className="portfolioLocAddItem2">
              <h3>Locations</h3>
              <p>{props.loc}</p>
            </div>
          </div>
          <div className="portfolioLocAdd">
            <div className="portfolioLocAddItem1">
              <FontAwesomeIcon
                icon={faStairs}
                className="portoIcon"
              ></FontAwesomeIcon>
            </div>
            <div className="portfolioLocAddItem2">
              <h3>Floors</h3>
              <p>{props.floor}</p>
            </div>
          </div>
          <div className="portfolioLocAdd">
            <div className="portfolioLocAddItem1">
              <FontAwesomeIcon
                icon={faArrowsUpDownLeftRight}
                className="portoIcon"
              ></FontAwesomeIcon>
            </div>
            <div className="portfolioLocAddItem2">
              <h3>Total Area</h3>
              <p>{props.area}</p>
            </div>
          </div>
          <div className="portfolioLocAdd">
            <div className="portfolioLocAddItem1">
              <FontAwesomeIcon
                icon={faTags}
                className="portoIcon"
              ></FontAwesomeIcon>
            </div>
            <div className="portfolioLocAddItem2">
              <h3>Duration</h3>
              <p>{props.duration}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
