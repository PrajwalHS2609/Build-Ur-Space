import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeWhy from "./HomeWhy/HomeWhy";
import HomeServices from "./HomeServices/HomeServices";
import"./HomePage.css"
import HomeOurApproach from "./HomeOurApproach/HomeOurApproach";
import HomeOurPhilo from "./HomeOurPhilo/HomeOurPhilo";
import HomeOurVision from "./HomeOurVision/HomeOurVision";
import HomeOurMission from "./HomeOurMission/HomeOurMission";
import HomeWelcome from "./HomeWelcome/HomeWelcome";
import HomeWhat from "./HomeWhatWeDo/HomeWhat";
import OurProcess from "./HomeOurProcess/OurProcess";
import OurGoals from "./HomeOurGoals/OurGoals";
import HomeAbout from "./HomeAbout/HomeAbout";
const HomePage = () => {
  return (
    <div className="homePageContainer">
      <HomeHeader />
      <HomeWelcome/>
      <HomeAbout/>
      <HomeServices/>
      <HomeWhy />
      <HomeOurApproach/>
      <HomeOurPhilo/>
      <HomeOurVision/>
      <HomeOurMission/>
      <OurGoals/>
      <HomeWhat/>
      <OurProcess/>
    </div>
  );
};

export default HomePage;
