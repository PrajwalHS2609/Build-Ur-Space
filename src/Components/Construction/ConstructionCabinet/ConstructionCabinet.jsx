import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../ConstructionHead";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import PackageConstruction from "../PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import CabinetReadMore from "./CabinetReadMore";
import Footer from "../../Footer/Footer";
import CabinetHead from "./CabinetHead";
import Portfolio from "../../Portfolio/Portfolio";

const ConstructionCabinet = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Modular Cabinets in Bangalore for Home | Modular Cabinets Cost in
          Bangalore
        </title>
        <meta
          name="description"
          content="Modular Cabinets in Bangalore for Home. These cabinets are designed to maximize space, enhance aesthetics, and provide tailored storage solutions for every room in your home."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/modular-cabinets-in-bangalore-for-home"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <CabinetHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <CabinetReadMore />
      <Footer />
    </div>
  );
};

export default ConstructionCabinet;
