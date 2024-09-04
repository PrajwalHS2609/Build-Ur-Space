import React from "react";
import InteriorInspire from "../InteriorInspire/InteriorInspire";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import JewelleryReadmore from "./JewelleryReadmore";
import Footer from "../../Footer/Footer";
import JewelleryHead from "./JewelleryHead";
import { Helmet } from "react-helmet";
import InteriorHead from "../InteriorHead/InteriorHead";
import InteriorTypes from "../InteriorTypes/InteriorTypes";

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
      <Footer />
    </div>
  );
};

export default InteriorJewellery;
