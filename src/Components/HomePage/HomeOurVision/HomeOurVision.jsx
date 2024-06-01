import React from "react";
import house from "../../../Images/holding house.jpg"
import HomeOur1 from "../HomeOur/HomeOur1";
import OurVisionList from "./OurVisionList";
const HomeOurVision = () => {
  return (
   <>
   <HomeOur1
   h1="OUR"
   h2="VISION"
   txt={<OurVisionList/>}
   img={house}
   />
   </>
  );
};

export default HomeOurVision;
