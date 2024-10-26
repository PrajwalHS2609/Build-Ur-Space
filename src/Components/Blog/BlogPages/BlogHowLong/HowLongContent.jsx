import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import HowLongHead from "./HowLongHead";
import HowLongFactors from "./HowLongFactors";
import HowLongTimeline from "./HowLongTimeline";
import HowLongCost from "./HowLongCost";
import HowLongDelay from "./HowLongDelay";
import HowLongSpeedUp from "./HowLongSpeedUp";
import howLongBanner from "./../../../../Images/How_Long_to_Build/Banner.png"

const HowLongContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg
        img={howLongBanner}
        alt="howLongBanner"
      />
      <HowLongHead />
      <HowLongFactors />
      <HowLongTimeline/>
      <HowLongSpeedUp/>
      <HowLongDelay />
      <HowLongCost />
    </div>
  );
};

export default HowLongContent;
