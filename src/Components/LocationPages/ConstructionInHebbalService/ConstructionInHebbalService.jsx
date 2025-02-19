import React from "react";
import HebbalServiceHead from "./HebbalServiceHead";
import HebbalServiceReadmore from "./HebbalServiceReadmore";
import { Helmet } from "react-helmet";
import ConstructionHead from "../../Construction/ConstructionHead";
import ConstructionTypeMain from "../../Construction/ConstructionType/ConstructionTypeMain";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../../Construction/PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import Partners from './../../HomePage/Partners/Partners';
import BrandWeUse from './../../HomePage/BrandWeUse/BrandWeUse';

const ConstructionInHebbalService = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Hebbal at Lowest Price Per.Sqft{" "}
        </title>{" "}
        <meta
          name="description"
          content="House Construction Company in Hebbal can bring your vision to life with top-notch expertise, exceptional service, and a deep understanding of the local area’s construction needs. "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-services-in-hebbal"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="locationWrapper">
        <HebbalServiceHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <HebbalServiceReadmore />
    </div>
  );
};

export default ConstructionInHebbalService;
