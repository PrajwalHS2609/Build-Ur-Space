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
        para=" Delivering seamless and comprehensive residential turnkey solutions, from concept to completion, for a hassle-free and stylish living experience."
      />
      <HomeWhatCard
        img={kitchen}
        head=" LIGHT ROOF STRUCTURE (PEB)"
        para="PEB structures are highly adaptable, suitable for a wide range of industrial applications warehouses  commercial spaces"
      />
      <HomeWhatCard
        img={commercial}
        head=" COMMERCIAL SPACES"
        para=" Purpose-built structures designed for conducting business activities and providing services, ranging from offices and retail spaces to hospitality establishments."
      />
    </div>
  );
};

export default InteriorWhatMain;
