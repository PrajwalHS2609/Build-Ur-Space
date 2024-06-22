import React from "react";
import "./InteriorInspire.css";
import { Link } from "react-router-dom";

const InteriorInspireCard = (props) => {
  const handlePopup = () => {
    let popUp = document.querySelector(".inspirePopUp");
    popUp.style.display = "flex";
  };

  return (
    <div className="inspireCardContainer">
      <div
        className="inspireImgContent1"
        id="inspireImgContent"
        onClick={handlePopup}
      >
        <Link to={""}>
          <img src={props.img1} alt="" />
          <h3>{props.h1}</h3>
        </Link>
      </div>
      <div
        className="inspireImgContent1"
        id="inspireImgContent"
        onClick={handlePopup}
      >
        <Link to={""}>
          <img src={props.img2} alt="" />
          <h3>{props.h2}</h3>
        </Link>
      </div>
      <div
        className="inspireImgContent1"
        id="inspireImgContent"
        onClick={handlePopup}
      >
        <Link to={""}>
          <img src={props.img3} alt="" />
          <h3>{props.h3}</h3>
        </Link>
      </div>
      <div
        className="inspireImgContent1"
        id="inspireImgContent"
        onClick={handlePopup}
      >
        <Link to={""}>
          <img src={props.img4} alt="" />
          <h3>{props.h4}</h3>
        </Link>
      </div>
    </div>
  );
};

export default InteriorInspireCard;
