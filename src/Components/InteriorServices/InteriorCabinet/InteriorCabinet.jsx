import React from "react";
import { Helmet } from "react-helmet";
import BookReadmore from "../InteriorBook/BookReadmore";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import CabinetHead from "./CabinetHead";
import InteriorInspire from "../../Interior/InteriorInspire/InteriorInspire";


const InteriorCabinet = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Modular Cabinets in Bangalore for Home | Modular Cabinets Cost in
          Bangalore
        </title>
        <meta
          name="description"
          content="Modular Cabinets in Bangalore for Home. These cabinets are designed to maximize space, enhance aesthetics, and provide tailored storage solutions for every room in your home."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/modular-cabinets-in-bangalore-for-home"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <CabinetHead />
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

export default InteriorCabinet;
