import React from "react";
import "./HomeAppPage.css";
import HomeAppTxt from "./HomeAppTxt";
const HomeAppPage = () => {
  return (
    <div className="homeAppContainer">
        <div className="homeAppUnderline"></div>
        <div className="homeAppWrapper">
      <div className="homeAppContent1">
        <HomeAppTxt/>
      </div>
      <div className="homeAppContent2">
        <img
          src="https://www.bricknbolt.com/assets/images/offerLandingPageBanner.webp"
          alt=""
        />
      </div>
      </div>
    </div>
  );
};

export default HomeAppPage;
