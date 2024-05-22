import React from "react";
import "./HomeWhy.css";
import HomeWhyHeader from "./HomeWhyHeader";
import HomeWhyMain from "./HomeWhyMain";
const HomeWhy = () => {
  return (
    <div className="homeWhyContainer">
      <div className="homeWhyContent">
        <HomeWhyHeader />
        <HomeWhyMain />
      </div>
    </div>
  );
};

export default HomeWhy;
