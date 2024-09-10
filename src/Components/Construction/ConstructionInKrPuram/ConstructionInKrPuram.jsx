import React from "react";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import Partners from "../../HomePage/Partners/Partners";
import KrPuramReadmore from "./KrPuramReadmore";
import Footer from "../../Footer/Footer";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import ConstructionHead from "../ConstructionHead";
import { Helmet } from "react-helmet";
import KrPuramHead from "./KrPuramHead";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";

const ConstructionInKrPuram = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in KR Puram at Lowest Price Sq.Ft{" "}
        </title>
        <meta
          name="description"
          content="House Construction Company in KR Puram at Lowest Price Sq.Ft. Our team understands the complexities involved in house construction, from planning and design to materials selection and execution."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-kr-puram"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <KrPuramHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <KrPuramReadmore />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default ConstructionInKrPuram;
