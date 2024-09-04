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
import StudyReadmore from "./StudyReadmore";
import Footer from "../../Footer/Footer";
import StudyHead from "./StudyHead";
import StudyWhy from "./StudyWhy";

const ConstructionStudy = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Modular Study Table in Bangalore for Home - Buildurspace</title>
        <meta
          name="description"
          content="Modular Study Table in Bangalore for Home. At Buildurspace, we bring you the best solution to enhance your home office or study area with our innovative and stylish."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/modular-study-table-in-bangalore-for-home"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <StudyHead />
        <StudyWhy />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <StudyReadmore />
      <Footer />
    </div>
  );
};

export default ConstructionStudy;
