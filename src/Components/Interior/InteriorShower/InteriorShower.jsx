import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";
import ShowerHead from "./ShowerHead";
import InteriorInspire from "../InteriorInspire/InteriorInspire";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import BookReadmore from "../InteriorBook/BookReadmore";

const InteriorShower = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Shower Partition in Bangalore for Home | Shower Partition Cost in
          Bangalore
        </title>
        <meta
          name="description"
          content="Shower Partition in Bangalore for Home. We specialize in delivering high-quality shower partitions tailored to meet the unique needs of homes in Bangalore."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/shower-partition-in-bangalore-for-home"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <ShowerHead />
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

export default InteriorShower;
