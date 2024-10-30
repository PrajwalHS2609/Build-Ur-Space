import React from "react";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import Portfolio from "../Portfolio/Portfolio";
import ConstructionHead from "./ConstructionHead";
import BrandWeUse from "../HomePage/BrandWeUse/BrandWeUse";
import PackageConstruction from "./PackageConstruction";
import { Helmet } from "react-helmet";
import ConstructionTypeMain from "./ConstructionType/ConstructionTypeMain";
import HomeConstructionImg from "../HomePage/HomeImg/HomeConstructionImg";
import ConstructionReadMore from "./ConstructionReadMore/ConstructionReadMore";

const Construction = () => {
  return (
    <div>
      <Helmet>
        <title>
          Commercial & Home Construction in Bangalore, Chitradurga & Bellery
        </title>
        <meta
          name="description"
          content="Commercial & Home Construction in Bangalore, Chitradurga & Bellery. Delivering the highest quality in Turnkey Home & Commerical Construction services."
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg/>
      <ConstructionReadMore/>
    </div>
  );
};

export default Construction;
