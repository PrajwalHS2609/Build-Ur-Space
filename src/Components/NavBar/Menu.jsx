import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
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
          <p>Chitradurga</p>
          <p>Bellary</p>
        </div>
      </div>
      <div className="navBarItem2">
        <li><Link to={"/"}>Home</Link></li>
        <li>Construction</li>
        <li>Interior</li>
        <li>How it Works</li>
        <li><Link to={"/package"}>Package</Link></li>
      </div>
    </>
  );
};

export default Menu;
