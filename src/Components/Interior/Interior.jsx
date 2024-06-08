import React from "react";
import InteriorTypes from "./InteriorTypes/InteriorTypes";
import Footer from "../Footer/Footer";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import "./Interior.css";
import InteriorHead from "./InteriorHead/InteriorHead";
import InteriorWhy1 from "./InteriorWhy/InteriorWhy1";
import { Helmet } from "react-helmet";
const Interior = () => {
  return (
    <div className="InteriorContainer">
      <Helmet>
        <title>
          Commerical & Home Interior Design in Bangalore, Chitradurga & Bellery
        </title>
        <meta
          name="description"
          content="Commerical & Home Interior Design in Bangalore, Chitradurga & Bellery. We offer comprehensive interior services, including end-to-end solutions, renovations, and modular designs, catering to both homes and offices."
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <Footer />
    </div>
  );
};

export default Interior;
