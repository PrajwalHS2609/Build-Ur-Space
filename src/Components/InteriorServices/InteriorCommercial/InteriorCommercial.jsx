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
import CommercialReadmore from "./CommercialReadmore";
import CommercialHead from "./CommercialHead";

const InteriorCommercial = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Commercial Office Interiors in Bangalore | Office Interiors Cost in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content=": Commercial Office Interiors in Bangalore. Our approach blends innovative design with practical solutions to create workspaces that inspire creativity and efficiency."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/commercial-office-interiors-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <CommercialHead />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <CommercialReadmore />
    </div>
  );
};

export default InteriorCommercial;
