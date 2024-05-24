import React from "react";
import "./HomeHeader.css";
import  banner from "./../../../Images/banner.png"
import splitImg from "./../../../Images/Split .png"
import splitContent from "./../../../Images/Split Content.png"
const HomeHeaderImg = () => {
  return (
    <>
    <div className="homeHeaderImgContainer">
      <img
        src={banner}
        alt=""
      />
    </div>
    <div className="respHomeHeaderImgContainer">
      <img
        src={splitImg}
        alt=""
      />
      <img
        src={splitContent}
        alt=""
      />
    </div>
    </>
  );
};

export default HomeHeaderImg;
