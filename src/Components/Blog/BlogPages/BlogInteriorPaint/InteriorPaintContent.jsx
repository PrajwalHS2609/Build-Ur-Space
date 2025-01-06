import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import interiorPaintBanner from "./../../../../Images/BlogImgs/Trending Interior Paint Colors and Expert Tips/Banner.png";
import InteriorPaintHead from "./InteriorPaintHead";
import InteriorPaintTop from "./InteriorPaintTop";
import InteriorPaintHow from "./InteriorPaintHow";
import InteriorPaintTips from "./InteriorPaintTips";
import InteriorPaintMaximize from "./InteriorPaintMaximize";
import InteriorPaintColor from "./InteriorPaintColor";
import InteriorPaintTrending from "./InteriorPaintTrending";
import InteriorPaintSustainable from "./InteriorPaintSustainable";

const InteriorPaintContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg img={interiorPaintBanner} alt="Interior Paint Banner" />
      <InteriorPaintHead />
      <InteriorPaintTop />
      <InteriorPaintHow />
      <InteriorPaintTips />
      <InteriorPaintMaximize />
      <InteriorPaintColor />
      <InteriorPaintTrending />
      <InteriorPaintSustainable />
    </div>
  );
};

export default InteriorPaintContent;
