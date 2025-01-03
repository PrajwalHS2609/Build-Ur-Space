import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import ToughenedGlassPartitionReadMore from "./ToughenedGlassPartitionReadMore";
import ToughenedGlassPartitionHead from './ToughenedGlassPartitionHead';

const InteriorToughenedGlassPartition = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Toughened Glass Partition in Bangalore | Toughened Glass Partition
          Cost in Bangalore
        </title>
        <meta
          name="description"
          content="Toughened Glass Partition in Bangalore. If you're looking to add sophistication, durability, and elegance to your residential or commercial property. "
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/toughened-glass-partition-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <ToughenedGlassPartitionHead />
      </div>
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <ToughenedGlassPartitionReadMore />
    </div>
  );
};

export default InteriorToughenedGlassPartition;
