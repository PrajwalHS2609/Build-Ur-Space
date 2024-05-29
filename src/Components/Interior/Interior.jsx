import React from "react";
import InteriorTypes from "./InteriorTypes/InteriorTypes";
import Footer from "../Footer/Footer";
import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import "./Interior.css"
const Interior = () => {
  return (
    <div className="InteriorContainer">
      <HomeHeader />
      <InteriorTypes />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <Partners />
      <Footer />
    </div>
  );
};

export default Interior;
