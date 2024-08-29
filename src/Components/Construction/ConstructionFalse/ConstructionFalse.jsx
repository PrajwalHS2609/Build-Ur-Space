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
import FalseReadmore from "./FalseReadmore";
import FalseHead from "./FalseHead";
import FalseWhy from "./FalseWhy";
import Footer from "../../Footer/Footer";

const ConstructionFalse = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          False Ceiling in Bangalore for Home & Office | False Ceiling Cost in
          Bangalore
        </title>
        <meta
          name="description"
          content="False Ceiling in Bangalore for Home & Office. We specialize in creating customized False ceilings that perfectly blend with your space’s design while catering to your specific needs."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/false-ceiling-in-bangalore-for-home-and-office"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <FalseHead />
        <FalseWhy />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <FalseReadmore />
      <Footer />
    </div>
  );
};

export default ConstructionFalse;
