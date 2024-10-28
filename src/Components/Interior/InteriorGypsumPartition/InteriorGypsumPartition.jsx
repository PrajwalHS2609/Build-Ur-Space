import React from "react";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";
import GypsumPartitionHead from "./GypsumPartitionHead";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import GypsumCelingReadMore from "../InteriorGypsumCeling/GypsumCelingReadMore";

import { Helmet } from "react-helmet";

const InteriorGypsumPartition = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Gypsum Partition in Bangalore | Gypsum Partition Cost in Bangalore
        </title>
        <meta
          name="description"
          content="Gypsum Partition in Bangalore have emerged as a leading choice for homeowners and businesses looking to redefine their environments"
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/gypsum-partition-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <GypsumPartitionHead />
      </div>
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <GypsumCelingReadMore />
    </div>
  );
};

export default InteriorGypsumPartition;
