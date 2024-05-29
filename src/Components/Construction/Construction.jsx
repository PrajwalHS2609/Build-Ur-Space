import React from "react";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import HomeHeader from "../HomePage/HomeHeader/HomeHeader";
import Footer from "../Footer/Footer";

import Package from "../PackagePage/Package";
import Portfolio from "../Portfolio/Portfolio";

const Construction = () => {
  return (
    <div>
      <HomeHeader />
      <Portfolio/>
      <Package />
 
    </div>
  );
};

export default Construction;
