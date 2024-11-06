import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../ConstructionHead";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import MagadiHead from "./MagadiHead";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import MagadiReadmore from "./MagadiReadmore";

const ConstructionInMagadi = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>House Construction Company in Magadi Road within Budget </title>
        <meta
          name="description"
          content="House Construction Company in Magadi Road within Budget, we deliver top-notch services, guiding you through each step with expertise, transparency, and a focus on quality."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-magadi-road"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <MagadiHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <MagadiReadmore />
    </div>
  );
};

export default ConstructionInMagadi;
