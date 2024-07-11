import React from "react";
import HomeWhatCard from "../HomeWhatWeDo/HomeWhatCard";
import "./../../HomePage/HomeWhatWeDo/HomeWhat.css";
import turnkey from "./../../../Images/Interior Logo for Home/trunkey.png";
import kitchen from "./../../../Images/Interior Logo for Home/kitchen.png";
import commercial from "./../../../Images/Interior Logo for Home/commercial.png";

const InteriorWhatMain = () => {
  return (
    <div className="whatMainContainer">
      <HomeWhatCard
        img={turnkey}
        head=" RESIDENTIAL
      TURNKEY"
        para=" Delivering seamless and comprehensive residential interior turnkey solutions, from concept to completion, for a hassle-free and stylish living experience."
      />
      <HomeWhatCard
        img={kitchen}
        head="Modular Kitchen"
        para="Transforming culinary spaces with versatile and customizable modular kitchens for efficient  organization and style"
      />
      <HomeWhatCard
        img={commercial}
        head=" COMMERCIAL SPACES"
        para="Designing functional and aesthetical pleasing commercial interiors like Offices,retail spaces,restaurants etc to optimize workspace efficiency and enhance the overall user experience."
      />
    </div>
  );
};

export default InteriorWhatMain;
