import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import favicon from "./../../Images/favicon.png";
const Menu = () => {
  return (
    <>
      <div className="navBarItem1">
        <div className="navInnerItem" id="navInnerItem1">
          <FontAwesomeIcon icon={faPhone} className="navIcon"></FontAwesomeIcon>
          <p>+91 9742255110</p>
        </div>
        <div className="navInnerItem" id="navInnerItem2">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="navIcon"
          ></FontAwesomeIcon>
          <p className="navPara">Bangalore</p>
          <div className="navLine"></div>
          <p>Chitradurga</p>
          <div className="navLine"></div>
          <p>Bellary</p>
        </div>
      </div>
      <div className="navBarItem2">
        <li>
          <Link to={"/"}>
            <img src={favicon} alt="favicon" />
          </Link>
        </li>
        <li>Construction</li>
        <li>Interior</li>
        <li>
          <Link to={"/package"}>Package</Link>
        </li>

        <li>
          <Link to={"/about-us"}>About Us</Link>
        </li>
        <li>Contact Us</li>
      </div>
    </>
  );
};

export default Menu;
