import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../Footer/Footer";
import BookReadmore from "../InteriorBook/BookReadmore";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import Partners from "../../HomePage/Partners/Partners";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorInspire from "../InteriorInspire/InteriorInspire";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";
import CabinetHead from "./CabinetHead";


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
      <Footer />
    </div>
  );
};

export default InteriorCabinet;
