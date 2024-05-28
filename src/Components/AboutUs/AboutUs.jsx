import React from "react";
import HomeOurApproach from "../HomePage/HomeOurApproach/HomeOurApproach";
import HomeOurMission from "../HomePage/HomeOurMission/HomeOurMission";
import HomeOurVision from "../HomePage/HomeOurVision/HomeOurVision";
import OurGoals from "../HomePage/HomeOurGoals/OurGoals";
import HomeAbout from "../HomePage/HomeAbout/HomeAbout";
import HomeOurPhilo from "../HomePage/HomeOurPhilo/HomeOurPhilo";
import "./AboutUs.css"
import Footer from './../Footer/Footer';
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <HomeAbout />
      <HomeOurApproach />
      <HomeOurPhilo />
      <HomeOurVision />
      <HomeOurMission />
      <OurGoals />
      <Footer/>
    </div>
  );
};

export default AboutUs;
