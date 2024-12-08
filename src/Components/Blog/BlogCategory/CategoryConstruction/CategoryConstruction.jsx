import React from "react";
import WaterProofingHeader from "../../BlogPages/BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import CategoryDoorsAndWindowsCard from "./../CategoryDoorsAndWindows/CategoryDoorsAndWindowsCard";
import howLongBanner from "./../../../../Images/BlogImgs/How_Long_to_Build/Banner.png";

const CategoryConstruction = () => {
  return (
    <div className="categoryDoorsAndWindows">
      <WaterProofingHeader head="Construction" />

      <div className="categoryDoorsAndWindows-Wrapper">
        <CategoryDoorsAndWindowsCard
          img={howLongBanner}
          head="How Long to Build a 30x40 Feet House in Bangalore?"
          para="Building a house is one of the most exciting, yet complex, projects anyone can undertake. If you are planning to construct a 30x40 Feet House in Bangalore, it’s essential to..."
          link="/how-long-to-build-a-30x40-feet-house-in-bangalore"
        />
      </div>
    </div>
  );
};

export default CategoryConstruction;
