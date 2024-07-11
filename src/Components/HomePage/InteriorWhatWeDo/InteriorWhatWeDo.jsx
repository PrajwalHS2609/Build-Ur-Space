import React from "react";
import HomeWhatHead from "../HomeWhatWeDo/HomeWhatHead";
import "./../../HomePage/HomeWhatWeDo/HomeWhat.css";
import InteriorWhatMain from "./InteriorWhatMain";

const InteriorWhatWeDo = () => {
  return (
    <div className="whatContainer">
      <HomeWhatHead head="INTERIOR"/>
      <InteriorWhatMain />
    </div>
  );
};

export default InteriorWhatWeDo;
