import React from "react";
import "./Footer.css";
import logo from "./../../Images/mainLogo.png";
const BioFooter = () => {
  return (
    <div className="bioFooterContainer">
      <img src={logo} alt="" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque,
        expedita voluptatem. Voluptate earum inventore hic ipsa ipsam quae
        facere quaerat sapiente ipsum, ratione sint excepturi provident magnam
        ad, accusantium tempore?
      </p>
    </div>
  );
};

export default BioFooter;
