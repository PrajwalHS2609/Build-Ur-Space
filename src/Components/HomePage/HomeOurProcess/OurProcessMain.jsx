import React from "react";
import "./OurProcess.css";
import OurProcessCard from "./OurProcessCard";
import img1 from "./../../../Images/HomeProcess/Free Consulation.png";
import img2 from "./../../../Images/HomeProcess/Sign Off.png";
import img3 from "./../../../Images/HomeProcess/Icon1.png";
import img4 from "./../../../Images/HomeProcess/Construction.png";
import img5 from "./../../../Images/HomeProcess/Handover.png"
const OurProcessMain = () => {
  return (
    <div className="ourProcessMainContainer">
      <OurProcessCard img={img1} txt="FREE CONSULTATION" />
      <OurProcessCard img={img2} txt="SIGN OFF" />
      <OurProcessCard img={img3} txt="DESIGN  DEVELOPMENT" />
      <OurProcessCard img={img4} txt="CONSTRUCTION" />
      <OurProcessCard img={img5} txt="HANDOVER" />
    </div>
  );
};

export default OurProcessMain;
