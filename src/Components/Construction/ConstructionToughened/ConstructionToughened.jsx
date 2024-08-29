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
import ToughenedReadmore from "./ToughenedReadmore";
import ToughenedHead from "./ToughenedHead";
import Footer from "../../Footer/Footer";

const ConstructionToughened = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Toughened Glass Skylight in Bangalore for Home | Skylight Glasses Cost
          in Bangalore
        </title>
        <meta
          name="description"
          content="Toughened Glass Skylight in Bangalore for Home. We specialize in offering premium toughened glass skylights that enhance the beauty and functionality of homes in Bangalore."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/toughened-glass-skylight-in-bangalore-for-home"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <ToughenedHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <ToughenedReadmore />
      <Footer />
    </div>
  );
};

export default ConstructionToughened;
