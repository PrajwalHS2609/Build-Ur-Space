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
import KindergartenHead from "./KindergartenHead";
import KindergartenReadmore from "./KindergartenReadmore";

const InteriorKindergarten = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Kindergarten Interior Designers in Bangalore | Kids School Interiors
          Cost in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Kindergarten Interior Designers in Bangalore. At BuildUrSpace, we specialize in crafting spaces that nurture creativity, curiosity, and comfort for children. "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/kindergarten-interiors-designers-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <KindergartenHead />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <KindergartenReadmore />
    </div>
  );
};

export default InteriorKindergarten;
