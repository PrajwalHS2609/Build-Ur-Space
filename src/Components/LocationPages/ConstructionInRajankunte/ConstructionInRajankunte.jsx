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
import RajankunteHead from "./RajankunteHead";
import RajankunteReadmore from "./RajankunteReadmore";

const ConstructionInRajankunte = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Rajankunte | Home Construction Cost in
          Rajankunte{" "}
        </title>
        <meta
          name="description"
          content="House Construction Company in Rajankunte, Bangalore. Buildurspace trusted name in the industry, delivering high-quality construction services tailored to meet individual needs."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-rajankunte"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <RajankunteHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <RajankunteReadmore />
    </div>
  );
};

export default ConstructionInRajankunte;
