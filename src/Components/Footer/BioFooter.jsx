import React from "react";
import "./Footer.css";
import logo from "./../../Images/mainLogo.png";
const BioFooter = () => {
  return (
    <div className="bioFooterContainer">
      <img src={logo} alt="" />
      <p>
        At BUILD UR SPACE, we understand the importance of creating spaces that
        meet your functional needs and reflect your unique style and
        personality. Whether you want to build a new structure or transform an
        existing space, we're here to bring your vision to life.
      </p>
    </div>
  );
};

export default BioFooter;
