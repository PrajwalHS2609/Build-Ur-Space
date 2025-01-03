import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import DryWallReadMore from "./DryWallReadMore";
import WhatsApp from "../../HomePage/WhatsApp/WhatsApp";
import DryWallHead from './DryWallHead';
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";

const InteriorDryWall = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Dry Wall Partition in Bangalore | Dry Wall Partition Cost in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Dry Wall Partition in Bangalore. These partitions are not just functional; they are versatile, aesthetically pleasing, and can significantly enhance the usability of your interiors. "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/dry-wall-partition-in-bangalore "
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <DryWallHead />
      </div>
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <DryWallReadMore />
      <WhatsApp />
    </div>
  );
};

export default InteriorDryWall;
