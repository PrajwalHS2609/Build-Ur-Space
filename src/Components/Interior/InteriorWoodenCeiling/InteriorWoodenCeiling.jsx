import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import Footer from "../../Footer/Footer";
import WoodenCeilingHead from "./WoodenCeilingHead";
import WoodenCeilingReadMore from "./WoodenCeilingReadMore";

const InteriorWoodenCeiling = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Wooden False Ceiling in Bangalore | Wooden False Ceiling Cost in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Wooden False Ceiling in Bangalore. This architectural element has become a popular choice for both residential and commercial spaces, offering versatility in design, insulation, and acoustics."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/wooden-false-ceiling-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <WoodenCeilingHead />
      </div>
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <WoodenCeilingReadMore />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default InteriorWoodenCeiling;
