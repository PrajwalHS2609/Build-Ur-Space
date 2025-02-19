import React from "react";
import YelahankaHead from "./YelahankaHead";
import YelahankaReadmore from "./YelahankaReadmore";
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

const ConstructionInYelahanka = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Yelahanka at Lowest Price Per.Sqft{" "}
        </title>{" "}
        <meta
          name="description"
          content="House Construction Company in Yelahanka can bring your vision to life with top-notch expertise, exceptional service, and a deep understanding of the local area’s construction needs.  "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-services-in-yelahanka "
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="locationWrapper">
        <YelahankaHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <YelahankaReadmore />
    </div>
  );
};

export default ConstructionInYelahanka;
