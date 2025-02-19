import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../../Construction/ConstructionHead";
import ConstructionTypeMain from "../../Construction/ConstructionType/ConstructionTypeMain";
import KannurHead from "./KannurHead";
import KannurReadmore from "./KannurReadmore";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../../Construction/PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";

const ConstructionInKannur = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Kannur at Lowest Price Per.Sqft{" "}
        </title>
        <meta
          name="description"
          content="House Construction Company in Kannur can bring your vision to life with top-notch expertise, exceptional service, and a deep understanding of the local area’s construction needs. "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-kannur"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <KannurHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <KannurReadmore />
    </div>
  );
};

export default ConstructionInKannur;
