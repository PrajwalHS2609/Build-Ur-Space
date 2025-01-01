import React from "react";
import { Helmet } from "react-helmet";
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
import HebbalHead from "./HebbalHead";
import HebbalReadmore from "./HebbalReadmore";

const ConstructionInHebbal = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Hebbal at Lowest Price Sq.Ft{" "}
        </title>
        <meta
          name="description"
          content="House Construction Company in Hebbal at Lowest Price Sq.Ft. Our team understands the complexities involved in house construction, from planning and design to materials selection and execution."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-hebbal"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <HebbalHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <HebbalReadmore />
    </div>
  );
};

export default ConstructionInHebbal;
