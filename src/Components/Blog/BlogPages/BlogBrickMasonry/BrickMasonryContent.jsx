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

const BrickMasonryContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg
        img="https://img.freepik.com/free-photo/brick-piles-placed-factory-floor_1150-15102.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
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
