import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import HowLongHead from "./HowLongHead";
import HowLongFactors from "./HowLongFactors";
import HowLongTimeline from "./HowLongTimeline";
import HowLongCost from "./HowLongCost";
import HowLongDelay from "./HowLongDelay";
import HowLongSpeedUp from "./HowLongSpeedUp";

const HowLongContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg
        img="https://images.unsplash.com/photo-1542621334-a254cf47733d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXByaW50fGVufDB8fDB8fHww"
        alt="HowLong"
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
