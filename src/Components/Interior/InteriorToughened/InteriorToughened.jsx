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
import BookReadmore from "../InteriorBook/BookReadmore";
import Footer from "../../Footer/Footer";
import ToughenedHead from "./ToughenedHead";


const InteriorToughened = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Toughened Glass Skylight in Bangalore for Home | Skylight Glasses Cost
          in Bangalore
        </title>
        <meta
          name="description"
          content="Toughened Glass Skylight in Bangalore for Home. We specialize in offering premium toughened glass skylights that enhance the beauty and functionality of homes in Bangalore."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/toughened-glass-skylight-in-bangalore-for-home"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <ToughenedHead />
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

export default InteriorToughened;
