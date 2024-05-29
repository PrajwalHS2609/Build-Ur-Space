import React from "react";
import "./Package.css";
import Footer from "../Footer/Footer";
import PackageHead from "./PackageHead";
import PackageMain from "./PackageMain";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
const Package = () => {
  return (
    <div className="packageContainer">
      <PackageHead />
      <PackageMain />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <Partners />
      <Footer />
    </div>
  );
};

export default Package;
