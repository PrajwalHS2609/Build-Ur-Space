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
import HoskoteHead from "./HoskoteHead";

import HoskoteReadmore from "./HoskoteReadmore";

const ConstructionInHoskote = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Hoskote Road at Lowest Price Sq.Ft{" "}
        </title>
        <meta
          name="description"
          content="House Construction Company in Hoskote Road at Lowest Price Sq.Ft. Our team understands the complexities involved in house construction, from planning and design to materials selection and execution."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-hoskote-road"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <HoskoteHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <HoskoteReadmore />
    </div>
  );
};

export default ConstructionInHoskote;
