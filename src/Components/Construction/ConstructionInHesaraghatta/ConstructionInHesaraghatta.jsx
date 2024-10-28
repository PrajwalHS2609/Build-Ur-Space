import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../ConstructionHead";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Partners from "../../HomePage/Partners/Partners";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import HesaraghattaReadmore from "./HesaraghattaReadmore";
import HesaraghattaHead from './HesaraghattaHead';
const ConstructionInHesaraghatta = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Hesaraghatta| Home Construction Cost in
          Hesaraghatta
        </title>
        <meta
          name="description"
          content="House Construction Company in Hesaraghatta, Bangalore. Buildurspace trusted name in the industry, delivering high-quality construction services tailored to meet individual needs."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-hesaraghatta"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <HesaraghattaHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <HesaraghattaReadmore />
    </div>
  );
};

export default ConstructionInHesaraghatta;
