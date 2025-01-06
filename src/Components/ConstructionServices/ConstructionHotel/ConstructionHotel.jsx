import React from "react";
import { Helmet } from "react-helmet";
import HotelHead from "./HotelHead";
import HotelImp from "./HotelImp";
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
import HotelReadmore from "./HotelReadmore";
import "./../ConstructionService.css";

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
      <div className="constructionWrapper">
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
