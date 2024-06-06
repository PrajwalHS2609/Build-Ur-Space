import React from "react";
import CommercialSectorsMain from "./CommercialSectors/CommercialSectorsMain";
import "./CommercialSectors/CommercialInterior.css";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import Footer from "../Footer/Footer";
import InteriorWhy from './../Interior/InteriorWhy/InteriorWhy';
import InteriorHead from './../Interior/InteriorHead/InteriorHead';
const CommercialInterior = () => {
  return (
    <div className="CommercialInteriorContainer">
      <InteriorHead/>
      <CommercialSectorsMain />
      <HomeAppPage />
      <InteriorWhy />
      <Testimonial />
      <Partners />
      <Footer />
    </div>
  );
};

export default CommercialInterior;
