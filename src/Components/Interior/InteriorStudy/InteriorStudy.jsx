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
import StudyReadmore from "./StudyReadmore";
import StudyWhy from "./StudyWhy";
import StudyHead from "./StudyHead";

const InteriorStudy = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Modular Study Table in Bangalore for Home - Buildurspace</title>
        <meta
          name="description"
          content="Modular Study Table in Bangalore for Home. At Buildurspace, we bring you the best solution to enhance your home office or study area with our innovative and stylish."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/modular-study-table-in-bangalore-for-home"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <StudyHead />
        <StudyWhy />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <StudyReadmore />
    </div>
  );
};

export default InteriorStudy;
