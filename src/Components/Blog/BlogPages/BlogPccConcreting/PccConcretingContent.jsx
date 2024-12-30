import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import pccConcretingBanner from "./../../../../Images/BlogImgs/PccConcreting/Banner.png";
import PccConcretingHead from "./PccConcretingHead";
import PccConcretingWhat from "./PccConcretingWhat";
import PccConcretingKey from "./PccConcretingKey";
import PccConcretingApplication from "./PccConcretingApplication";
import PccConcretingSteps from "./PccConcretingSteps";
import PccConcretingWhyChoose from "./PccConcretingWhyChoose";
import PccConcretingTips from "./PccConcretingTips";
import PccConcretingCommon from "./PccConcretingCommon";
import PccConcretingFuture from "./PccConcretingFuture";
import PccConcretingPartner from "./PccConcretingPartner";

const PccConcretingContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg img={pccConcretingBanner} alt="PCC Concreting Banner" />
      <PccConcretingHead />
      <PccConcretingWhat />
      <PccConcretingKey />
      <PccConcretingApplication />
      <PccConcretingSteps />
      <PccConcretingWhyChoose />
      <PccConcretingTips />
      <PccConcretingCommon />
      <PccConcretingFuture />
      <PccConcretingPartner />
    </div>
  );
};

export default PccConcretingContent;
