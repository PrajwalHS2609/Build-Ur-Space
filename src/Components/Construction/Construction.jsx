import React from "react";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import Footer from "../Footer/Footer";
import Portfolio from "../Portfolio/Portfolio";
import ConstructionHead from "./ConstructionHead";
import BrandWeUse from "../HomePage/BrandWeUse/BrandWeUse";
import PackageConstruction from "./PackageConstruction";

const Construction = () => {
  return (
    <div>
      <ConstructionHead />
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <Partners />
      <BrandWeUse />
      <Footer />
    </div>
  );
};

export default Construction;
