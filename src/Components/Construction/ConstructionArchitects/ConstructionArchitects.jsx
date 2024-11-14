import React from "react";
import { Helmet } from "react-helmet";
import ConstructionHead from "../ConstructionHead";
import ArchitectsHead from "./ArchitectsHead/ArchitectsHead";
import ConstructionTypeMain from "../ConstructionType/ConstructionTypeMain";
import ArchitectsRole from "./ArchitectsRole";
import ArchitectsReadmore from "./ArchitectsReadmore/ArchitectsReadmore";
import HomeWhy from "../../HomePage/HomeWhy/HomeWhy";
import Testimonial from "../../HomePage/Testimonial/Testimonial";
import BrandWeUse from "../../HomePage/BrandWeUse/BrandWeUse";
import HomeAppPage from "../../HomePage/HomeAppPage/HomeAppPage";
import "./ArchitectsHead/ArchitectsHead.css";
import HomeConstructionImg from "../../HomePage/HomeImg/HomeConstructionImg";
import Partners from "../../HomePage/Partners/Partners";
import Portfolio from "../../Portfolio/Portfolio";
import PackageConstruction from "../PackageConstruction";
const ConstructionArchitects = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Architects in Bangalore for Residential & Commercial Space
        </title>
        <meta
          name="description"
          content="Architects in Bangalore for Residential & Commercial Space. Build Ur Space, have a deep understanding of these factors and tailor their designs to meet the specific needs of the environment and the client."
        />
        <link
          rel="canonical"
          href="https://buildurspace.com/architects-in-bangalore"
        />
      </Helmet>
      <ConstructionHead />
      <ConstructionTypeMain />
      <div className="ArchitectsWrapper">
        <ArchitectsHead />
        <ArchitectsRole />
      </div>
      <Portfolio />
      <PackageConstruction />
      <HomeAppPage />
      <HomeWhy />
      <Testimonial />
      <BrandWeUse />
      <Partners />
      <HomeConstructionImg />
      <ArchitectsReadmore />
    </div>
  );
};

export default ConstructionArchitects;
