import React from "react";
import { Helmet } from "react-helmet";
import InteriorHead from "../../Interior/InteriorHead/InteriorHead";
import InteriorTypes from "../../Interior/InteriorTypes/InteriorTypes";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import InteriorWhy1 from "../../Interior/InteriorWhy/InteriorWhy1";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import Partners from "../../HomePage/Partners/Partners";
import InteriorInspire from "../../Interior/InteriorInspire/InteriorInspire";
import HomeInteriorImg from "../../HomePage/HomeImg/HomeInteriorImg";
import HospitalHead from "./HospitalHead";
import HospitalWhyChoose from "./HospitalWhyChoose";
import HospitalReadmore from "./HospitalReadmore";

const InteriorHospital = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Hospital & Clinic Interior Designers in Bangalore | Clinic Interiors
          Cost in Bangalore{" "}
        </title>
        <meta
          name="description"
          content="At Buildurspace, we specialize in designing exceptional hospital & clinic interior designers in Bangalore that reflect the best in modern healthcare design. Call Now!"
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/hospital-and-clinic-interior-designers-in-bangalore"
        />
      </Helmet>
      <InteriorHead />
      <InteriorTypes />
      <div className="ArchitectsWrapper">
        <HospitalHead />
        <HospitalWhyChoose />
      </div>
      <InteriorInspire />
      <HomeAppPage />
      <InteriorWhy1 />
      <Testimonial />
      <Partners />
      <HomeInteriorImg />
      <HospitalReadmore />{" "}
    </div>
  );
};

export default InteriorHospital;
