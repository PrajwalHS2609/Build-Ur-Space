import React from "react";
import { Helmet } from "react-helmet";
import InteriorInspire from "../InteriorInspire/InteriorInspire";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import BookReadmore from "../InteriorBook/BookReadmore";
import GlassHead from "./GlassHead";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";

const InteriorGlass = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Glass Partition in Bangalore for Home & Office | Glass Partition
          Service in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Glass Partition in Bangalore for Home & Office. Whether you’re looking to enhance the aesthetics of your home or office, our glass partition in Bangalore services provide the perfect blend of functionality and elegance."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/glass-partition-in-bangalore-for-home-and-office"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <GlassHead />
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

export default InteriorGlass;
