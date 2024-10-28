import React from "react";
import { Helmet } from "react-helmet";
import GridCeilingHead from "./GridCeilingHead";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorTypes from "../InteriorTypes/InteriorTypes";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import GridCeilingReadMore from "./GridCeilingReadMore";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import Footer from "../../Footer/Footer";

const InteriorGridCeiling = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Grid False Ceiling in Bangalore | Grid False Ceiling Cost in Bangalore
        </title>
        <meta
          name="description"
          content="Grid False Ceiling in Bangalore. This innovative ceiling solution is not only visually appealing but also offers practical benefits that make it a popular choice for both residential and commercial spaces."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/grid-false-ceiling-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <GridCeilingHead />
      </div>
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <GridCeilingReadMore />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default InteriorGridCeiling;
