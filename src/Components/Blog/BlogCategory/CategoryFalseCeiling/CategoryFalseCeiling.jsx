import React from "react";
import WaterProofingHeader from "../../BlogPages/BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import CategoryDoorsAndWindowsCard from "./../CategoryDoorsAndWindows/CategoryDoorsAndWindowsCard";
import falseCeilingBanner from "./../../../../Images/BlogImgs/False_ceiling/Banner.png";

const CategoryFalseCeiling = () => {
  return (
    <div className="categoryDoorsAndWindows">
      <WaterProofingHeader head="False Ceiling" />

      <div className="categoryDoorsAndWindows-Wrapper">
        <CategoryDoorsAndWindowsCard
          img={falseCeilingBanner}
          head="Everything You Need to Know About False Ceiling Costs in Bangalore"
          para="False ceilings, also known as drop ceilings or suspended ceilings, are becoming an integral part of modern interior design in Bangalore. Not only do they enhance..."
          link="/everything-you-need-to-know-about-false-ceiling-costs-in-bangalore"
        />
      </div>
    </div>
  );
};

export default CategoryFalseCeiling;
