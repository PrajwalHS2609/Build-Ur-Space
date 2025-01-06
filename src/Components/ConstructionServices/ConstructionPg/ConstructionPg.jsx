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
import PgHead from "./PgHead";
import PgWhy from "./PgWhy";
import PgReadmore from "./PgReadmore";

const ConstructionPg = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          PG Construction in Bangalore | Paying Guest Construction in Bangalore
        </title>
        <meta
          name="description"
          content="PG Construction in Bangalore offers an ideal solution for property investors looking to maximize their returns. Book A Free Consultation!"
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/pg-construction-in-bangalore   "
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="constructionWrapper">
        <PgHead />
        <PgWhy />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <PgReadmore />
    </div>
  );
};

export default ConstructionPg;
