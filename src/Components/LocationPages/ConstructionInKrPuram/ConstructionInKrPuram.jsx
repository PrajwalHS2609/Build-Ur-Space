import React from "react";
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
import KrPuramReadmore from "./KrPuramReadmore";
import { Helmet } from "react-helmet";
import KrPuramHead from "./KrPuramHead";

const ConstructionInKrPuram = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in KR Puram at Lowest Price Sq.Ft{" "}
        </title>
        <meta
          name="description"
          content="House Construction Company in KR Puram at Lowest Price Sq.Ft. Our team understands the complexities involved in house construction, from planning and design to materials selection and execution."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-kr-puram"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <KrPuramHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <KrPuramReadmore />
    </div>
  );
};

export default ConstructionInKrPuram;
