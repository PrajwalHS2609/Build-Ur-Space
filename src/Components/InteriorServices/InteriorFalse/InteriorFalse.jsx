import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import InteriorInspire from "../../Interior/InteriorInspire/InteriorInspire";
import BookReadmore from "../InteriorBook/BookReadmore";
import FalseHead from "./FalseHead";
import FalseWhy from "./FalseWhy";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";

const InteriorFalse = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          False Ceiling in Bangalore for Home & Office | False Ceiling Cost in
          Bangalore
        </title>
        <meta
          name="description"
          content="False Ceiling in Bangalore for Home & Office. We specialize in creating customized False ceilings that perfectly blend with your space’s design while catering to your specific needs."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/false-ceiling-in-bangalore-for-home-and-office"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <FalseHead />
        <FalseWhy />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <BookReadmore />
    </div>
  );
};

export default InteriorFalse;
