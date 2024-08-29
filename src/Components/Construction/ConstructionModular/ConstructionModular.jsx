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
import ModularReadmore from "./ModularReadmore";
import ModularHead from "./ModularHead";
import ModularBenefits from "./ModularBenefits";
import Footer from "../../Footer/Footer";

const ConstructionModular = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Modular Wardrobes in Bangalore for Home | Modular Wardrobes Cost in
          Bangalore
        </title>
        <meta
          name="description"
          content="Modular Wardrobes in Bangalore for Home. Modular wardrobes are designed to maximize storage efficiency while enhancing the aesthetic appeal of your living spaces."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/modular-wardrobes-in-bangalore-for-home"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <ModularHead />
        <ModularBenefits />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <ModularReadmore />
      <Footer />
    </div>
  );
};

export default ConstructionModular;
