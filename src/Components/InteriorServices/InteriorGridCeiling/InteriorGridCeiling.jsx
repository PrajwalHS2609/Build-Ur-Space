import React from "react";
import { Helmet } from "react-helmet";
import GridCeilingHead from "./GridCeilingHead";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import GridCeilingReadMore from "./GridCeilingReadMore";


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
    </div>
  );
};

export default InteriorGridCeiling;
