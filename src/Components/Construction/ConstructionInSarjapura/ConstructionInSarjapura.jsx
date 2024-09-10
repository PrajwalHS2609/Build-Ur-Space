import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../ConstructionHead";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import Partners from "../../HomePage/Partners/Partners";
import SarjapuraReadmore from "./SarjapuraReadmore";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import Footer from "../../Footer/Footer";
import SarjapuraHead from "./SarjapuraHead";

const ConstructionInSarjapura = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Sarjapura Road at Lowest Price Sq.Ft{" "}
        </title>
        <meta
          name="description"
          content="House Construction Company in Sarjapura Road at Lowest Price Sq.Ft. Our team understands the complexities involved in house construction, from planning and design to materials selection and execution."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-sarjapura"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <SarjapuraHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <SarjapuraReadmore />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default ConstructionInSarjapura;
