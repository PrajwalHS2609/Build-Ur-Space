import React from "react";
import "./HomeWhat.css";
import HomeWhatCard from "./HomeWhatCard";
import img1 from "./../../../Images/residentTurnkey.png";
import img2 from "./../../../Images/PEB.png";
import img3 from "./../../../Images/commercialSpace.png";

const HomeWhatMain = () => {
  return (
    <div className="whatMainContainer">
      <HomeWhatCard
        img={img1}
        head=" RESIDENTIAL
      TURNKEY"
        para=" Delivering seamless and comprehensive residential turnkey solutions, from concept to completion, for a hassle-free and stylish living experience."
      />
      <HomeWhatCard
        img={img2}
        head=" LIGHT ROOF STRUCTURE (PEB)"
        para="PEB structures are highly adaptable, suitable for a wide range of industrial applications warehouses  commercial spaces"
      />
      <HomeWhatCard
        img={img3}
        head=" COMMERCIAL
 SPACES"
        para=" Purpose-built structures designed
 for conducting business activities
 and providing services, ranging
 from offices and retail spaces to
 hospitality establishments."
      />
    </div>
  );
};

export default HomeWhatMain;
