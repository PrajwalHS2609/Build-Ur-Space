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
import RestaurantReadmore from "./RestaurantReadmore";
import Footer from "../../Footer/Footer";
import RestaurantHead from "./RestaurantHead";
import RestaurantWhyChoose from "./RestaurantWhyChoose";

const InteriorRestaurant = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Restaurant Interiors in Bangalore | Restaurant Interiors Cost in
          Bangalore{" "}
        </title>
        <meta
          name="description"
          content="Restaurant Interiors in Bangalore. Our approach blends innovative design with practical solutions to create workspaces that inspire creativity and efficiency."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/restaurant-interiors-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <RestaurantHead />
        <RestaurantWhyChoose />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <RestaurantReadmore />
      <Footer />
    </div>
  );
};

export default InteriorRestaurant;