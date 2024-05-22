import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeWhy from "./HomeWhy/HomeWhy";
import HomeServices from "./HomeServices/HomeServices";
import"./HomePage.css"
import HomeAppPage from "./HomeAppPage/HomeAppPage";
const HomePage = () => {
  return (
    <div className="homePageContainer">
      <HomeHeader />
      <HomeServices/>
      <HomeWhy />
      <HomeAppPage/>
    </div>
  );
};

export default HomePage;
