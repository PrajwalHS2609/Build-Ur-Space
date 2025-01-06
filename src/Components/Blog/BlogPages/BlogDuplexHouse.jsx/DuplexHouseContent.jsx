import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";

import duplexHouseBanner from "./../../../../Images/BlogImgs/Duplex House Construction/Banner.png";
import DuplexHouseHead from './DuplexHouseHead';
import DuplexHouseWhat from './DuplexHouseWhat';
import DuplexHouseAdvantages from './DuplexHouseAdvantages';
import DuplexHousePlanning from './DuplexHousePlanning';
import DuplexHouseSteps from './DuplexHouseSteps';
import DuplexHouseDesign from './DuplexHouseDesign';
import DuplexHouseChoosing from './DuplexHouseChoosing';
import DuplexHouseWhy from './DuplexHouseWhy';

const DuplexHouseContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg img={duplexHouseBanner} alt="Duplex House Banner" />
      <DuplexHouseHead />
      <DuplexHouseWhat />
      <DuplexHouseAdvantages />
      <DuplexHousePlanning />
      <DuplexHouseSteps />
      <DuplexHouseDesign />
      <DuplexHouseChoosing />
      <DuplexHouseWhy />
    </div>
  );
};

export default DuplexHouseContent;
