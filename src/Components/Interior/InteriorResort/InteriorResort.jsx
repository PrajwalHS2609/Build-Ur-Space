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
import ResortReadmore from "./ResortReadmore";
import ResortHead from "./ResortHead";
import ResortWhyChoose from "./ResortWhyChoose";

const InteriorResort = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Resort Interior Designers in Bangalore | Resort Interior Cost in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Buildurspace is your go-to partner for top-tier Resorts Interiors in Bangalore, where we take your vision and bring it to life with precision and creativity."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/resort-interior-designers-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <ResortHead />
        <ResortWhyChoose />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <ResortReadmore />
    </div>
  );
};

export default InteriorResort;
