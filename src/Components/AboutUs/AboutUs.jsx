import React from "react";
import HomeOurApproach from "../HomePage/HomeOurApproach/HomeOurApproach";
import HomeOurMission from "../HomePage/HomeOurMission/HomeOurMission";
import HomeOurVision from "../HomePage/HomeOurVision/HomeOurVision";
import OurGoals from "../HomePage/HomeOurGoals/OurGoals";
import HomeAbout from "../HomePage/HomeAbout/HomeAbout";
import HomeOurPhilo from "../HomePage/HomeOurPhilo/HomeOurPhilo";
import "./AboutUs.css";
import { Helmet } from "react-helmet";
const AboutUs = () => {
  return (
    <div className="AboutUs">
      <Helmet>
        <title>
          About Build Ur Space - Home & Commercial Construction Company
        </title>
        <meta
          name="description"
          content="This company was founded by Mr. Sri Harsha, With a team of highly skilled and creative designers, & engineers."
        />
      </Helmet>
      <HomeAbout />
      <HomeOurApproach />
      <HomeOurPhilo />
      <HomeOurVision />
      <HomeOurMission />
      <OurGoals />
    </div>
  );
};

export default AboutUs;
