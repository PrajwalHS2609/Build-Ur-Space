import React from "react";
import "./OurProcess.css";
import OurProcessCard from "./OurProcessCard";
import img1 from "./../../../Images/Free Consulation.png";
import img2 from "./../../../Images/Sign Off.png";
import img3 from "./../../../Images/Icon1.png";
import img4 from "./../../../Images/Construction.png";
const OurProcessMain = () => {
  return (
    <div className="ourProcessMainContainer">
      <OurProcessCard img={img1} txt="FREE CONSULTATION" />
      <OurProcessCard img={img2} txt="SIGN OFF" />
      <OurProcessCard img={img3} txt="DESIGN  DEVELOPMENT" />
      <OurProcessCard img={img4} txt="CONSTRUCTION" />
    </div>
  );
};

export default OurProcessMain;
