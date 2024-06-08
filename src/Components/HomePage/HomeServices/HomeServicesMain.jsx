import React from "react";
import "./HomeServices.css";
import HomeServiceCard from "./HomeServiceCard";
import interior from "./../../../Images/InteriorService.jpg";
import construction from "./../../../Images/constructionService.jpg";
const HomeServicesMain = () => {
  return (
    <div className="homeServiceMainContainer">
      <HomeServiceCard img={construction} txt="CONSTRUCTION" />
      <HomeServiceCard img={interior} txt=" INTERIOR" />
    </div>
  );
};

export default HomeServicesMain;
