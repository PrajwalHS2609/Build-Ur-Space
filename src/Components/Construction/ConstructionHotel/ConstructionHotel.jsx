import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../ConstructionHead";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import HotelHead from "./HotelHead";
import HotelImp from "./HotelImp";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../PackageConstruction";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import Partners from "../../HomePage/Partners/Partners";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import HotelReadmore from "./HotelReadmore";

const ConstructionHotel = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hotel Construction in Bangalore | Hotel Construction Cost in Bangalore
        </title>
        <meta
          name="description"
          content="Hotel Construction in Bangalore. We delivering projects that combine style, functionality, and sustainability. Book A Free Consultation! "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/hotel-construction-in-bangalore"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <HotelHead />
        <HotelImp />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <HotelReadmore />
    </div>
  );
};

export default ConstructionHotel;
