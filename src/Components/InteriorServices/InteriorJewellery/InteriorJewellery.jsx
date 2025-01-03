import React from "react";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import InteriorInspire from "../../Interior/InteriorInspire/InteriorInspire";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import JewelleryReadmore from "./JewelleryReadmore";
import JewelleryHead from "./JewelleryHead";
import { Helmet } from "react-helmet";


const InteriorJewellery = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Jewellery Shop Interior Designers in Bangalore | Resort Interior Cost
          in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="As leading Jewellery Shop Interior Designers in Bangalore, we specialize in creating luxurious, elegant, and functional spaces that perfectly showcase your exquisite jewellery collections."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/jewellery-shop-interior-designers-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <JewelleryHead />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <JewelleryReadmore />
    </div>
  );
};

export default InteriorJewellery;
