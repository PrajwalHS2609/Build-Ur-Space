import React from "react";
import "./../HomePage/HomeHeader/HomeHeader.css";
import constructionBanner from "./../../Images/Build ur Space- Construction Banner Image.png";
import constructionImg from "./../../Images/ConstructionHead.png";
import splitContent from "./../../Images/Split Content.png";
import HomeFrom from "../HomePage/HomeForm/HomeFrom";
import RespHomeForm from "../HomePage/HomeForm/RespHomeForm";
const ConstructionHead = () => {
  return (
    <>
      <div className="homeHeaderImgContainer">
        <img src={constructionBanner} alt="" />
        <HomeFrom />
      </div>
      <div className="respHomeHeaderImgContainer">
        <img src={constructionImg} alt="" />
        <img src={splitContent} alt="" />
      </div>
      <RespHomeForm />
    </>
  );
};

export default ConstructionHead;
