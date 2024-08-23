import React from "react";
import "./InteriorInspire.css";
import { Link } from "react-router-dom";

const InteriorInspireCard = (props) => {
  // const handlePopup = () => {
  //   let popUp = document.querySelector(".inspirePopUp");
  //   popUp.style.display = "flex";
  //   console.log("pop");
  // };

  return (
    <div
      className="inspireImgContent1"
      id="inspireImgContent"
      onClick={props.onClick}
    >
      <Link to={""}>
        <img src={props.img1} alt="" />
        <h3>{props.h1}</h3>
      </Link>
    </div>
  );
};

export default InteriorInspireCard;
