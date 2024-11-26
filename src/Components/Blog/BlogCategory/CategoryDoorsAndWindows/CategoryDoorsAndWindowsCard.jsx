import React from "react";
import "./CategoryDoorsAndWindows.css";
import { Link } from "react-router-dom";
const categoryDoorsAndWindowsCard = (props) => {
  return (
    <div className="categoryDoorsAndWindowsCard">
      <div className="categoryDoorsAndWindowsCard-Img">
        <img src={props.img} alt={props.alt} loading="lazy" />
      </div>
      <div className="categoryDoorsAndWindowsCard-Title">
        <h2>{props.head}</h2>
      </div>
      <div className="categoryDoorsAndWindowsCard-Para">
        <p>{props.para}</p>
      </div>
      <div className="categoryDoorsAndWindowsCard-Btn">
        <button>
          <Link to={props.link}>Know More</Link>
        </button>
      </div>
    </div>
  );
};

export default categoryDoorsAndWindowsCard;
