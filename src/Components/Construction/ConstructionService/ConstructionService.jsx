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
import ServiceReadmore from "./ServiceReadmore";
import ServiceHead from "./ServiceHead";
import ServiceWhyChoose from "./ServiceWhyChoose";
import Footer from "../../Footer/Footer";

const ConstructionService = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
           Construction Service in Bangalore | Construction Cost in Bangalore
        </title>
        <meta
          name="description"
          content="Construction Service in Bangalore. We cater to a diverse range of needs, from residential to commercial projects. Book A Free Consultancy!"
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/construction-service-in-bangalore"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <ServiceHead />
        <ServiceWhyChoose />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <ServiceReadmore />
      <Footer />
    </div>
  );
};

export default ConstructionService;
