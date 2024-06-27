  import React from "react";
import "./HomeAppPage.css";
import HomeAppTxt from "./HomeAppTxt";
import houseApp from "./../../../Images/Mobile App.png";
const HomeAppPage = () => {
  return (
    <div className="homeAppContainer">
      <div className="homeAppUnderline"></div>
      <div className="homeAppWrapper">
        <div className="homeAppContent1">
          <HomeAppTxt />
        </div>
        <div className="homeAppContent2">
          <img src={houseApp} alt="houseApp" />
        </div>
      </div>
    </div>
  );
};

export default HomeAppPage;
