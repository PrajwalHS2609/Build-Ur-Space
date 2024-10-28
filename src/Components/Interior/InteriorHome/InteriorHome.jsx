import React from "react";
import { Helmet } from "react-helmet";

import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeReadmore from "./HomeReadmore";
import HomeHead from "./HomeHead";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import InteriorInspire from "../InteriorInspire/InteriorInspire";
import HomeWhyChoose from "./HomeWhyChoose";

const InteriorHome = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Home Interiors in Bangalore | Home Interiors Cost in Bangalore
        </title>
        <meta
          name="description"
          content="Home Interiors in Bangalore. Whether you're looking to redesign a single room or transform your entire home, our expert team is here to bring your vision to life with the finest home interiors in Bangalore"
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/home-interiors-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <HomeHead />
        <HomeWhyChoose/>
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <HomeReadmore />

    </div>
  );
};

export default InteriorHome;
