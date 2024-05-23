import React from "react";
import "./HomeOurMission.css";
import OurMissionImg from "./OurMissionImg";
import OurMissionList from "./OurMissionList";
const HomeOurMission = () => {
  return (
    <div className="ourMissionContainer">
      <div className="ourMissionContent1">
        <OurMissionList/>
      </div>
      <div className="ourMissionContent2">
        <OurMissionImg/>
      </div>
    </div>
  );
};

export default HomeOurMission;
