import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../ConstructionHead";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import PackageConstruction from "../PackageConstruction";
import Portfolio from "../../Portfolio/Portfolio";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import Footer from "../../Footer/Footer";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import GlassHead from "./GlassHead";
import GlassWhy from "./GlassWhy";
import GlassReadmore from "./GlassReadmore";

const ConstructionGlass = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Glass Partition in Bangalore for Home & Office | Glass Partition
          Service in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Glass Partition in Bangalore for Home & Office. Whether you’re looking to enhance the aesthetics of your home or office, our glass partition in Bangalore services provide the perfect blend of functionality and elegance."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/glass-partition-in-bangalore-for-home-and-office"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <GlassHead />
        <GlassWhy />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <GlassReadmore />
      <Footer />
    </div>
  );
};

export default ConstructionGlass;
