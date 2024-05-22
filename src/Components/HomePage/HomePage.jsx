import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeWhy from "./HomeWhy/HomeWhy";
import HomeServices from "./HomeServices/HomeServices";
import"./HomePage.css"
import HomeOurApproach from "./HomeOurApproach/HomeOurApproach";
import HomeOurPhilo from "./HomeOurPhilo/HomeOurPhilo";
const HomePage = () => {
  return (
    <div className="homePageContainer">
      <HomeHeader />
      <HomeServices/>
      <HomeWhy />
      <HomeOurApproach/>
      <HomeOurPhilo/>
    </div>
  );
};

export default HomePage;
