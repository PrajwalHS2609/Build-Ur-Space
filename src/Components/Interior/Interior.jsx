import React, { Suspense } from "react";
import InteriorTypes from "./InteriorTypes/InteriorTypes";
import Footer from "../Footer/Footer";
import HomeAppPage from "../HomePage/HomeAppPage/HomeAppPage";
import Testimonial from "../HomePage/Testimonial/Testimonial";
import Partners from "../HomePage/Partners/Partners";
import "./Interior.css";
import InteriorHead from "./InteriorHead/InteriorHead";
import InteriorWhy1 from "./InteriorWhy/InteriorWhy1";
import { Helmet } from "react-helmet";
import HomeInteriorImg from "../HomePage/HomeImg/HomeInteriorImg";
// import InteriorInspire from "./InteriorInspire/InteriorInspire";
const InteriorInspire = React.lazy(() =>
  import("./InteriorInspire/InteriorInspire")
);

const Interior = () => {
  return (
    <div className="InteriorContainer">
      <Helmet>
        <title>
          Commerical & Home Interior Design in Bangalore, Chitradurga & Bellery
        </title>
        <meta
          name="description"
          content="Commerical & Home Interior Design in Bangalore, Chitradurga & Bellery. We offer comprehensive interior services, including end-to-end solutions, renovations, and modular designs, catering to both homes and offices."
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <Suspense fallback={<p>Loading....</p>}>
        <InteriorInspire />
      </Suspense>
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <Footer />
    </div>
  );
};

export default Interior;
