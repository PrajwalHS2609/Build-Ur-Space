import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";
import PvcCeilingHead from "./PvcCeilingHead";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import PvcCeilingReadMore from "./PvcCeilingReadMore";
import WhatsApp from "./../../HomePage/WhatsApp/WhatsApp";
import Footer from "./../../Footer/Footer";

const InteriorPvcCeiling = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          PVC False Ceiling in Bangalore | PVC False Ceiling Cost in Bangalore
        </title>
        <meta
          name="description"
          content="PVC False Ceiling in Bangalore. This innovative ceiling solution is not only visually appealing but also offers practical benefits that make it a popular choice for both residential and commercial spaces."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/pvc-false-ceiling-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <PvcCeilingHead />
      </div>
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <PvcCeilingReadMore />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default InteriorPvcCeiling;
