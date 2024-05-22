import React from "react";
import "./NavBar.css";
import logo from "./../../Images/Buildurspace-removebg-preview.png";
const Logo = () => {
  return (
    <div className="navBarLogoContainer">
      <img src={logo} alt="" />
    </div>
  );
};

export default Logo;
