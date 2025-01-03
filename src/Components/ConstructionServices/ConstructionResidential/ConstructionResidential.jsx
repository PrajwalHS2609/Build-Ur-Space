import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../../Construction/ConstructionHead";
import ConstructionTypeMain from "../../Construction/ConstructionType/ConstructionTypeMain";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../../Construction/PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import ResidentialHead from "./ResidentialHead";
import ResidentialWhyChoose from "./ResidentialWhyChoose";
import ResidentialReadmore from "./ResidentialReadmore";

const ConstructionResidential = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Residential House Construction in Bangalore | House Construction Cost
          in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Residential House Construction in Bangalore. ✓ Modern Homes ✓Traditional Homes ✓Sustainable Homes ✓Luxury Homes. Book A Free Consultancy! "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/residential-house-construction-in-bangalore"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <ResidentialHead />
        <ResidentialWhyChoose />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <ResidentialReadmore />
    </div>
  );
};

export default ConstructionResidential;
