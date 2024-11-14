import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import essentialVastuBanner from "./../../../../Images/BlogImgs/EssentialVastuBanner.png";
import EssentialVastuRightPlot from "./EssentialVastuRightPlot";
import EssentialVastuOrientation from "./EssentialVastuOrientation";
import EssentialVastuPlacement from "./EssentialVastuPlacement";
import EssentialVastuLivingRoom from "./EssentialVastuLivingRoom";
import EssentialVastuBedroom from "./EssentialVastuBedroom";
import EssentialVastuKitchen from "./EssentialVastuKitchen";
import EssentialVastuBathroom from "./EssentialVastuBathroom";
import EssentialVastuStudyRoom from "./EssentialVastuStudyRoom";
import EssentialVastuDiningRoom from "./EssentialVastuDiningRoom";
import EssentialVastuLighting from "./EssentialVastuLighting";
import EssentialVastuAddition from "./EssentialVastuAddition";
import EssentialVastuCommon from "./EssentialVastuCommon";
import EssentialVastuAdjust from "./EssentialVastuAdjust";
import EssentialVastuFinal from "./EssentialVastuFinal";
import EssentialVastuHead from "./EssentialVastuHead";

const EssentialVastuContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg img={essentialVastuBanner} alt="essentialVastuBanner" />
      <EssentialVastuHead/>
      <EssentialVastuRightPlot />
      <EssentialVastuOrientation />
      <EssentialVastuPlacement />
      <EssentialVastuLivingRoom />
      <EssentialVastuBedroom />
      <EssentialVastuKitchen />
      <EssentialVastuBathroom />
      <EssentialVastuStudyRoom />
      <EssentialVastuDiningRoom />
      <EssentialVastuLighting />
      <EssentialVastuAddition />
      <EssentialVastuCommon />
      <EssentialVastuAdjust />
      <EssentialVastuFinal />
    </div>
  );
};

export default EssentialVastuContent;
