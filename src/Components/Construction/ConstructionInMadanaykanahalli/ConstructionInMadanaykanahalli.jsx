import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../ConstructionHead";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import MadanaykanahalliHead from "./MadanaykanahalliHead";
import MadanaykanahalliReadmore from "./MadanaykanahalliReadmore";

const ConstructionInMadanaykanahalli = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Madanaykana Halli within Budget{" "}
        </title>
        <meta
          name="description"
          content="House Construction Company in Madanaykana Halli within Budget. At Build Ur Space, we understand the significance of turning your vision into reality, offering comprehensive construction services that prioritize quality, timeliness, and customer satisfaction. "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-madanayakana-halli"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <MadanaykanahalliHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <MadanaykanahalliReadmore />
    </div>
  );
};

export default ConstructionInMadanaykanahalli;
