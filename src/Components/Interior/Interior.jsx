import React from "react";
import InteriorTypes from "./InteriorTypes/InteriorTypes";
import Footer from "../Footer/Footer";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import "./Interior.css"
import InteriorHead from "./InteriorHead/InteriorHead";
import InteriorWhy from "./InteriorWhy/InteriorWhy";
const Interior = () => {
  return (
    <div className="InteriorContainer">
      <InteriorHead />
      <InteriorTypes />
      <HomeAppPage />
      <InteriorWhy />
      <Testimonial />
      <Partners />
      <Footer />
    </div>
  );
};

export default Interior;
