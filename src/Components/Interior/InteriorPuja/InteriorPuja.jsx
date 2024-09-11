import React from "react";
import { Helmet } from "react-helmet";
import InteriorInspire from "../InteriorInspire/InteriorInspire";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import BookReadmore from "../InteriorBook/BookReadmore";
import Footer from "../../Footer/Footer";
import PujaHead from "./PujaHead";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";


const InteriorPuja = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Modular Puja Unit in Bangalore for Home - Buildurspace</title>
        <meta
          name="description"
          content="Modular Puja Unit in Bangalore for Home. Whether you have a spacious home or a cozy apartment, our modular puja units are customized to suit your needs, offering both functionality and aesthetic appeal."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/modular-puja-unit-in-bangalore-for-home"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <PujaHead />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <BookReadmore />
      <Footer />
    </div>
  );
};

export default InteriorPuja;
