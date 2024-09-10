import React from "react";
import KanakapuraHead from "./KanakapuraHead";
import KanakapuraReadmore from "./KanakapuraReadmore";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import Footer from "../../Footer/Footer";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import PackageConstruction from "../PackageConstruction";
import Portfolio from "../../Portfolio/Portfolio";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import ConstructionHead from "../ConstructionHead";
import { Helmet } from "react-helmet";

const ConstructionInKanakapura = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          House Construction Company in Kanakapura Road at Lowest Price Sq.Ft{" "}
        </title>
        <meta
          name="description"
          content="House Construction Company in Kanakapura Road at Lowest Price Sq.Ft. Our team understands the complexities involved in house construction, from planning and design to materials selection and execution."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/house-construction-company-in-kanakapura-road"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <KanakapuraHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <KanakapuraReadmore />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default ConstructionInKanakapura;
