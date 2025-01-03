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
import RentalReadmore from "./RentalReadmore";
import RentalHead from "./RentalHead";
import RentalImp from "./RentalImp";

const ConstructionRental = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Rental House Construction in Bangalore | Rental Properties
          Construction in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Rental House Construction in Bangalore is not just about building a structure; it’s about creating a sustainable source of income while contributing to the city's urban landscape"
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/rental-house-construction-in-bangalore"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <RentalHead />
        <RentalImp />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <RentalReadmore />
    </div>
  );
};

export default ConstructionRental;
