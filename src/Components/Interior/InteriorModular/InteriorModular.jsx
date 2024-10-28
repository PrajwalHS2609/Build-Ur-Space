import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";
import InteriorInspire from "../InteriorInspire/InteriorInspire";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import BookReadmore from "../InteriorBook/BookReadmore";
import ModularHead from "./ModularHead";
import ModularBenefits from "./ModularBenefits";

const InteriorModular = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Modular Wardrobes in Bangalore for Home | Modular Wardrobes Cost in
          Bangalore
        </title>
        <meta
          name="description"
          content="Modular Wardrobes in Bangalore for Home. Modular wardrobes are designed to maximize storage efficiency while enhancing the aesthetic appeal of your living spaces."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/modular-wardrobes-in-bangalore-for-home"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <ModularHead />
        <ModularBenefits />
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

export default InteriorModular;
