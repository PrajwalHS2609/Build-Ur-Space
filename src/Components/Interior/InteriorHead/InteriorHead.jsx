import React from "react";
import "./../../HomePage/HomeHeader/HomeHeader.css"
import  interiorBanner from "./../../../Images/Build ur Space- Interior Banner Image.png"
import interiorImg from "./../../../Images/Interiorhead.png"
import splitContent from "./../../../Images/Split Content.png";
import HomeFrom from "../../HomePage/HomeForm/HomeFrom";
import RespHomeForm from "../../HomePage/HomeForm/RespHomeForm";
const InteriorHead = () => {
  return (
    <>
      <div className="homeHeaderImgContainer">
        <img src={interiorBanner} alt="" />
        <HomeFrom />
      </div>
      <div className="respHomeHeaderImgContainer">
        <img src={interiorImg} alt="" />
        <img src={splitContent} alt="" />
      </div>
      <RespHomeForm />
    </>
  );
};

export default InteriorHead;
