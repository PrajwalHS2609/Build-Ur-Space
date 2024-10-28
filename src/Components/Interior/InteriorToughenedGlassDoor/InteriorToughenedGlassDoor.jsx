import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";
import ToughenedGlassDoorHead from "./ToughenedGlassDoorHead";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import ToughenedGlassDoorReadMore from "./ToughenedGlassDoorReadMore";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import Footer from "../../Footer/Footer";

const InteriorToughenedGlassDoor = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Toughened Glass Door in Bangalore | Toughened Glass Door Cost in
          Bangalore
        </title>
        <meta
          name="description"
          content="Toughened Glass Door in Bangalore. If you're looking to add sophistication, durability, and elegance to your residential or commercial property."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/toughened-glass-door-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <ToughenedGlassDoorHead />
      </div>
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <ToughenedGlassDoorReadMore />
      <WhatsApp />
      <Footer />
    </div>
  );
};

export default InteriorToughenedGlassDoor;
