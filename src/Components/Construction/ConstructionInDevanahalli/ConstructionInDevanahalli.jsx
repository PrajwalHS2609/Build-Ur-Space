import React from "react";
import { Helmet } from "react-helmet";
import Portfolio from "../../Portfolio/Portfolio";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import ConstructionHead from "../ConstructionHead";
import PackageConstruction from "../PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import Partners from "../../HomePage/Partners/Partners";
import DevanahalliReadmore from "./DevanahalliReadmore";
import DevanahalliHead from "./DevanahalliHead";

const ConstructionInDevanahalli = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Devanahalli at Lowest Price Sq.Ft{" "}
        </title>
        <meta
          name="description"
          content="House Construction Company in Devanahalli at Lowest Price Sq.Ft. Our team understands the complexities involved in house construction, from planning and design to materials selection and execution."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-devanahalli"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <DevanahalliHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <DevanahalliReadmore />
    </div>
  );
};

export default ConstructionInDevanahalli;
