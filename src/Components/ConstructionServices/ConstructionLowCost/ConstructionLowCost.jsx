import React from "react";
import { Helmet } from "react-helmet";
import LowCostHead from "./LowCostHead";
import LowCostUnderstanding from "./LowCostUnderstanding";
import ConstructionHead from "../../Construction/ConstructionHead";
import ConstructionTypeMain from "../../Construction/ConstructionType/ConstructionTypeMain";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../../Construction/PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import LowCostReadmore from "./LowCostReadmore";

const ConstructionLowCost = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Low Cost House Construction in Bangalore | House Construction Cost in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Low Cost Construction in Bangalore. We providing innovative solutions to build your dream home without breaking the bank. Book A Free Consultation!"
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/low-cost-house-construction-in-bangalore"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <LowCostHead />
        <LowCostUnderstanding />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <LowCostReadmore />
    </div>
  );
};

export default ConstructionLowCost;
