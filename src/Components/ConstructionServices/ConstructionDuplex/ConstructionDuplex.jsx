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
import DuplexReadmore from "./DuplexReadmore";
import DuplexHead from "./DuplexHead";
import DuplexWhyChoose from "./DuplexWhyChoose";

const ConstructionDuplex = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Duplex House Construction in Bangalore | Duplex Construction Cost in
          Bangalore
        </title>
        <meta
          name="description"
          content="Duplex House Construction in Bangalore. ✓Urban Duplexes, ✓Luxury Duplex Homes & ✓Eco-Friendly Duplexes. Book A Free Consultancy!"
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/duplex-house-construction-in-bangalore"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="constructionWrapper">
        <DuplexHead />
        <DuplexWhyChoose />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <DuplexReadmore />
    </div>
  );
};

export default ConstructionDuplex;
