import React from "react";
import WaterProofingHead from "./WaterProofingHead.jsx/WaterProofingHead";
import WaterProofingWhy from "./WaterProofingWhy/WaterProofingWhy";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";
import WaterproofingCement from "./WaterproofingCement";
import WaterproofingLiquid from "./WaterproofingLiquid";
import WaterProofingPolyurethane from "./WaterProofingPolyurethane";
import WaterProofingEpdm from "./WaterProofingEpdm";
import WaterProofingPvc from "./WaterProofingPvc";
import WaterProofingCrystalline from "./WaterProofingCrystalline";
import WaterProofingSelfAdhesive from "./WaterProofingSelfAdhesive";
import WaterProofingBituminous from "./WaterProofingBituminous";
import WaterProofingBentonite from "./WaterProofingBentonite";
import WaterProofingAcrylic from "./WaterProofingAcrylic";
import WaterProofChoose from "./WaterProofingChoose/WaterProofChoose";
import waterProofingBanner from "./../../../../Images/WaterProofingBlog/Banner.png";

const WaterProofingContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg
        img={waterProofingBanner}
        alt="waterProofing"
      />
      <WaterProofingHead />
      <WaterProofingWhy />
      <WaterproofingCement />
      <WaterproofingLiquid />
      <WaterProofingBituminous />
      <WaterProofingPolyurethane />
      <WaterProofingEpdm />
      <WaterProofingPvc />
      <WaterProofingCrystalline />
      <WaterProofingSelfAdhesive />
      <WaterProofingBentonite />
      <WaterProofingAcrylic />
      <WaterProofChoose/>
    </div>
  );
};

export default WaterProofingContent;
