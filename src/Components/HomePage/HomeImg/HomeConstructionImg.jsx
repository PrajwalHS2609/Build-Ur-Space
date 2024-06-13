import React from "react";
import "./HomeImg.css";
import homeConstructImg from "./../../../Images/construction .png";
import { Link } from "react-router-dom";
const HomeConstructionImg = () => {
  return (
    <div className="HomeConstructionImg">
      <Link to={"/contact-us"}>
        <img src={homeConstructImg} alt="" />
      </Link>
    </div>
  );
};

export default HomeConstructionImg;
