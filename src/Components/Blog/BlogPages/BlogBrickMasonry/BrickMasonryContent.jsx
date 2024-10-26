import React from "react";
import BrickMasonryHead from "./BrickMasonryHead";
import SolidBrickMasonry from "./SolidBrickMasonry/SolidBrickMasonry";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import VeneerBrickMasonry from "./VeneerBrickMasonry";
import ReinforcedBrickMasonry from "./ReinforcedBrickMasonry";
import CompositeBrickMasonry from "./CompositeBrickMasonry";
import CavityBrickMasonry from "./CavityBrickMasonry";
import ThinBrickMasonry from "./ThinBrickMasonry";
import EcoBrickMasonry from "./EcoBrickMasonry";
import ModularBrickMasonry from "./ModularBrickMasonry";
import brickMasonryBanner from "./../../../../Images/Brick_Masonry/Banner.png";

const BrickMasonryContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg
        img={brickMasonryBanner}
        alt="Brick Masonry"
      />
      <BrickMasonryHead />
      <SolidBrickMasonry />
      <VeneerBrickMasonry />
      <ReinforcedBrickMasonry />
      <CompositeBrickMasonry />
      <CavityBrickMasonry />
      <ThinBrickMasonry />
      <EcoBrickMasonry />
      <ModularBrickMasonry />
    </div>
  );
};

export default BrickMasonryContent;
