import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import InteriorInspire from "../../Interior/InteriorInspire/InteriorInspire";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import SalonHead from "./SalonHead";
import SalonReadmore from "./SalonReadmore";

const InteriorSalon = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Salon Interior Designers in Bangalore | Salon Interiors Cost in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="At Buildurspace, we specialize in crafting exquisite Salon Interior Designers in Bangalore that elevate the ambiance, optimize space, and provide a soothing environment for clients."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/salon-interior-designers-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <SalonHead />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <SalonReadmore />
    </div>
  );
};

export default InteriorSalon;
