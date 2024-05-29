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
const HomePage = () => {
  return (
    <div className="homePageContainer">
      <HomeHeader />
      <HomeWelcome />
      <HomeServices />
      <HomeWhat />
      <OurProcess />
      <HomeAppPage />
      <HomeAbout />
      <HomeWhy />
      <Testimonial />
      <Partners />
      <Faq />
      <Footer />
    </div>
  );
};

export default HomePage;
