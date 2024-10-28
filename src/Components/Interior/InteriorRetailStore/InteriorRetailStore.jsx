import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";
import RetailStoreHead from "./RetailStoreHead";
import RetailStoreReadmore from "./RetailStoreReadmore";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import Partners from "../../HomePage/Partners/Partners";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorInspire from "../InteriorInspire/InteriorInspire";

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
