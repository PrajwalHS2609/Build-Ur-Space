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

const WaterProofingContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg
        img="https://img.freepik.com/free-photo/worker-performs-overhaul-roof-residential-building_181624-61003.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
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
