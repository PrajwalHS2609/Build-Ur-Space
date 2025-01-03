import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import ToughenedGlassDoorReadMore from "./ToughenedGlassDoorReadMore";
import ToughenedGlassDoorHead from './ToughenedGlassDoorHead';

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
    </div>
  );
};

export default InteriorToughenedGlassDoor;
