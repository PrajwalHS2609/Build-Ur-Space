import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../ConstructionHead";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import ChikkabanavaraHead from "./ChikkabanavaraHead";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import ChikkabanavaraReadmore from "./ChikkabanavaraReadmore";

const ConstructionInChikkabanavara = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Chikkabanavara | Home Construction Cost
          in Chikkabanavara
        </title>
        <meta
          name="description"
          content="House Construction Company in Chikkabanavara, Bangalore. Buildurspace trusted name in the industry, delivering high-quality construction services tailored to meet individual needs."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-chikkabanavara"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <ChikkabanavaraHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <ChikkabanavaraReadmore />
    </div>
  );
};

export default ConstructionInChikkabanavara;
