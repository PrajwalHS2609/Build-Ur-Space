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
import ContractorsReadmore from "./ContractorsReadmore";
import ContractorsHead from "./ContractorsHead";
import ContractorsWhyChoose from "./ContractorsWhyChoose";

const ConstructionContractors = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Contractors in Bangalore | Building Contractors in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Contractors in Bangalore. We offering comprehensive services that cover every aspect of construction and renovation. Book A Free Consultancy!"
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/contractors-in-bangalore"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="constructionWrapper">
        <ContractorsHead />
        <ContractorsWhyChoose />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <ContractorsReadmore />
    </div>
  );
};

export default ConstructionContractors;
