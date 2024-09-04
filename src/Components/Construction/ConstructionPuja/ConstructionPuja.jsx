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
import PujaReadmore from "./PujaReadmore";
import Footer from "../../Footer/Footer";
import PujaHead from "./PujaHead";

const ConstructionPuja = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Modular Puja Unit in Bangalore for Home - Buildurspace</title>
        <meta
          name="description"
          content="Modular Puja Unit in Bangalore for Home. Whether you have a spacious home or a cozy apartment, our modular puja units are customized to suit your needs, offering both functionality and aesthetic appeal."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/modular-puja-unit-in-bangalore-for-home"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <PujaHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <PujaReadmore />
      <Footer />
    </div>
  );
};

export default ConstructionPuja;
