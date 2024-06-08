import React from "react";
import "./Package.css";
import Footer from "../Footer/Footer";
import PackageHead from "./PackageHead";
import PackageMain from "./PackageMain";
import HomeWhy from "../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
import { Helmet } from "react-helmet";
const Package = () => {
  return (
    <div className="packageContainer">
      <Helmet>
        <title>
          Home Construction Packages in Bangalore, Chitradurga & Bellery
        </title>
        <meta
          name="description"
          content="Home Construction Packages in Bangalore, Chitradurga & Bellery. Delivering the highest quality in Turnkey Home Construction services."
        />
      </Helmet>
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
