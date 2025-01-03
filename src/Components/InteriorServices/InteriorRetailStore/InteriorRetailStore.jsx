import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import InteriorInspire from "../../Interior/InteriorInspire/InteriorInspire";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import RetailStoreHead from "./RetailStoreHead";
import RetailStoreReadmore from "./RetailStoreReadmore";


const InteriorRetailStore = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Retail Store Interiors in Bangalore | Shop Interiors Cost in Bangalore
        </title>
        <meta
          name="description"
          content="Retail Store Interiors in Bangalore are becoming increasingly important as businesses seek innovative ways to attract and retain customers in a highly competitive market."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/retail-store-interiors-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <RetailStoreHead />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <RetailStoreReadmore />
    </div>
  );
};

export default InteriorRetailStore;
