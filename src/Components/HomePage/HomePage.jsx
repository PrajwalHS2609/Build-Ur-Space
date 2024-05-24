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
const HomePage = () => {
  return (
    <div className="homePageContainer">
      <HomeHeader />
      <HomeWelcome/>
      <HomeServices/>
      <HomeWhy />
      <HomeOurApproach/>
      <HomeOurPhilo/>
      <HomeOurVision/>
      <HomeOurMission/>
      <HomeWhat/>
    </div>
  );
};

export default HomePage;
