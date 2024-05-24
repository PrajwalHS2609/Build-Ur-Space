import React from "react";
import "./HomeWhy.css";

const HomeWhyCard = (props) => {
  return (
    <div className="homeWhyCardContainer">
      <div className="homeWhyCardImgContainer">
        <img
          src={props.img}
          alt=""
        />
      </div>
      <p>{props.para}</p>
    </div>
  );
};

export default HomeWhyCard;
