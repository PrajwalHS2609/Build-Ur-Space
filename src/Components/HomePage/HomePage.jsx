import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeWhy from "./HomeWhy/HomeWhy";
import HomeServices from "./HomeServices/HomeServices";
import "./HomePage.css";
import HomeWelcome from "./HomeWelcome/HomeWelcome";
import HomeWhat from "./HomeWhatWeDo/HomeWhat";
import OurProcess from "./HomeOurProcess/OurProcess";
import Footer from "../Footer/Footer";
import Faq from "./Faq/Faq";
import Partners from "./Partners/Partners";
import Testimonial from "./Testimonial/Testimonial";
import HomeAppPage from "./HomeAppPage/HomeAppPage";
import HomeAbout from "./HomeAbout/HomeAbout";
import BrandWeUse from "./BrandWeUse/BrandWeUse";
import { Helmet } from "react-helmet";
import HomeConstructionImg from "./HomeImg/HomeConstructionImg";
const HomePage = () => {
  return (
    <div className="homePageContainer">
      <Helmet>
        <title>
          Construction & Interior Designer in Bangalore, Chitradurga & Bellery
        </title>
        <meta
          name="description"
          content="Construction & Interior Designer in Bangalore, Chitradurga & Bellery. We understand the importance of creating spaces that meet your functional needs and reflect your unique style and personality."
        />
      </Helmet>
      <HomeHeader />
      <HomeWelcome />
      <HomeServices />
      <HomeAbout />
      <HomeWhat />
      <OurProcess />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <Faq />
      <HomeConstructionImg/>
      <Footer />
    </div>
  );
};

export default HomePage;
