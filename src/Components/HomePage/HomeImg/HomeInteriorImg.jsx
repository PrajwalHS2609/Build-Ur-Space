import React from "react";
import { Link } from "react-router-dom";
import homeInteriorImg from "./../../../Images/interiors.png";
import "./HomeImg.css";
const HomeInteriorImg = () => {
  return (
    <div className="HomInteriorImg">
      <Link to={"/contact-us"}>
        <img src={homeInteriorImg} alt="" />
      </Link>
    </div>
  );
};

export default HomeInteriorImg;
