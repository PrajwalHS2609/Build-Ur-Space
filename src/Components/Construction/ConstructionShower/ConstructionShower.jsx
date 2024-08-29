import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../ConstructionHead";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import PackageConstruction from "../PackageConstruction";
import Portfolio from "../../Portfolio/Portfolio";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import ShowerReadmore from "./ShowerReadmore";
import Footer from "../../Footer/Footer";
import ShowerHead from "./ShowerHead";

const ConstructionShower = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Shower Partition in Bangalore for Home | Shower Partition Cost in
          Bangalore
        </title>
        <meta
          name="description"
          content="Shower Partition in Bangalore for Home. We specialize in delivering high-quality shower partitions tailored to meet the unique needs of homes in Bangalore."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/shower-partition-in-bangalore-for-home"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <ShowerHead />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <ShowerReadmore />
      <Footer />
    </div>
  );
};

export default ConstructionShower;
