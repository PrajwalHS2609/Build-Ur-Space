import React from "react";
import { Helmet } from "react-helmet";
import GypsumCelingReadMore from "./GypsumCelingReadMore";
import GypsumCelingHead from "./GypsumCelingHead";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";

const InteriorGypsumCeling = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Gypsum Ceilings in Bangalore | Gypsum Ceilings Cost in Bangalore
        </title>
        <meta
          name="description"
          content="Gypsum Ceilings in Bangalore. One of the most sought-after trends in home and office design is the gypsum ceiling. Book an Appointment! "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/gypsum-ceilings-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <GypsumCelingHead />
      </div>
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <GypsumCelingReadMore />
    </div>
  );
};

export default InteriorGypsumCeling;
