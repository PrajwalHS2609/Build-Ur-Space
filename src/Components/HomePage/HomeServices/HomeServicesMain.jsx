import React from "react";
import "./HomeServices.css";
import HomeServiceCard from "./HomeServiceCard";
import interior from "./../../../Images/InteriorService.jpg";
import construction from "./../../../Images/constructionService.jpg";
const HomeServicesMain = () => {
  return (
    <div className="homeServiceMainContainer">
      <HomeServiceCard
        img={construction}
        txt="CONSTRUCTION"
        link="/home-and-commercial-construction"
      />
      <HomeServiceCard
        img={interior}
        txt=" INTERIOR"
        link="/home-and-commercial-interior-design"
      />
    </div>
  );
};

export default HomeServicesMain;
