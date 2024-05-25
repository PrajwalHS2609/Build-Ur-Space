import React from "react";
import "./HomeHeader.css";
import NewBanner from "./../../../Images/NewBanner.png"
import splitImg from "./../../../Images/Split .png";
import splitContent from "./../../../Images/Split Content.png";
import HomeFrom from "../HomeForm/HomeFrom";
import RespHomeForm from "../HomeForm/RespHomeForm";
const HomeHeaderImg = () => {
  return (
    <>
      <div className="homeHeaderImgContainer">
        <img src={NewBanner} alt="" />
        <HomeFrom />
      </div>
      <div className="respHomeHeaderImgContainer">
        <img src={splitImg} alt="" />
        <img src={splitContent} alt="" />
      </div>
      <RespHomeForm />
    </>
  );
};

export default HomeHeaderImg;
