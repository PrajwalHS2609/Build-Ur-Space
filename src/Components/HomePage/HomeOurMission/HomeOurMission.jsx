import React from "react";
import "./HomeOurMission.css";
import OurMissionList from "./OurMissionList";
import HomeOur2 from "../HomeOur/HomeOur2";
import img from "./../../../Images/AboutUs/focused-red-pawn-surrounded-by-white-ones.jpg"
const HomeOurMission = () => {
  return <>
  <HomeOur2
  h1="OUR"
  h2="MISSION"
  txt={<OurMissionList/>}
  img={img}
  />
  </>;
};

export default HomeOurMission;
