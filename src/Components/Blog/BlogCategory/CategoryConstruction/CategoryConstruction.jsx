import React from "react";
import WaterProofingHeader from "../../BlogPages/BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import CategoryDoorsAndWindowsCard from "./../CategoryDoorsAndWindows/CategoryDoorsAndWindowsCard";
import howLongBanner from "./../../../../Images/BlogImgs/How_Long_to_Build/Banner.png";
import pccConcretingBanner from "./../../../../Images/BlogImgs/PccConcreting/Banner.png";

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
        <CategoryDoorsAndWindowsCard
          img={pccConcretingBanner}
          alt="PCC Concreting Banner"
          link="/building-strong-foundations-with-durable-pcc-concreting-for-your-projects"
          head="Building Strong Foundations with Durable PCC Concreting for Your Projects"
          para="When embarking on any construction project, the foundation is the most critical element that determines its strength and..."
        />
      </div>
    </div>
  );
};

export default CategoryConstruction;
