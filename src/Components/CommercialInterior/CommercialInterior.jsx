import React from "react";
import CommercialSectorsMain from "./CommercialSectors/CommercialSectorsMain";
import "./CommercialSectors/CommercialInterior.css";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import Footer from "../Footer/Footer";
import InteriorWhy from "./../Interior/InteriorWhy/InteriorWhy";
import InteriorHead from "./../Interior/InteriorHead/InteriorHead";
import { Helmet } from "react-helmet";
import WhatsApp from "../HomePage/WhatsApp/WhatsApp";
import CommercialInspire from "./CommercialSectors/CommercialInspire";
const CommercialInterior = () => {
  return (
    <div className="CommercialInteriorContainer">
      <Helmet>
        <title>
          Commercial Interior Design in Bangalore, Chitradurga & Bellery
        </title>
        <meta
          name="description"
          content="Commercial Interior Design in Bangalore, Chitradurga & Bellery. We bring a fresh perspective to commercial interiors with a clear focus on creating aesthetic, functional and future-ready spaces."
        />
      </Helmet>
      <InteriorHead />
      <CommercialSectorsMain />
      <CommercialInspire/>
      <HomeAppPage />
      <InteriorWhy />
      <Testimonial />
      <WhatsApp/>
      <Partners />
      <Footer />
    </div>
  );
};

export default CommercialInterior;
