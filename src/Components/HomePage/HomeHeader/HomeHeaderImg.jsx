import React from "react";
import "./HomeHeader.css";
import HomeHeaderImgTxt from "./HomeHeaderImgTxt";
const HomeHeaderImg = () => {
  return (
    <div className="homeHeaderImgContainer">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <HomeHeaderImgTxt/>
    </div>
  );
};

export default HomeHeaderImg;
