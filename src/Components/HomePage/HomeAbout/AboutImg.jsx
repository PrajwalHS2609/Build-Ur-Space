import React from "react";
import "./HomeAbout.css";
import aboutImg from "./../../../Images/AboutUs/aboutUsImg.jpg";
const AboutImg = () => {
  return (
    <div className="aboutImgContainer">
      <img src={aboutImg} alt="" srcset="" loading="lazy" />
    </div>
  );
};

export default AboutImg;
