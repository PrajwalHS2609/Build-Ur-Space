import React from "react";
import "./NavBar.css";
import logo from "./../../Images/mainLogo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="navBarLogoContainer">
     <Link to={"/"}> <img src={logo} alt="" /></Link>
    </div>
  );
};

export default Logo;
