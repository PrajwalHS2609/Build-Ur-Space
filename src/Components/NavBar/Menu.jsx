import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Menu = () => {
  return (
    <>
      <div className="navBarItem1">
        <div className="navInnerItem" id="navInnerItem1">
          <FontAwesomeIcon icon={faPhone} className="navIcon"></FontAwesomeIcon>
          <p>9999999999</p>
        </div>
        <div className="navInnerItem">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="navIcon"
          ></FontAwesomeIcon>
          <p className="navPara">Bangalore</p>
          <p className="navLine"></p>
          <p>Chitradurga</p>
          <p className="navLine"></p>
          <p>Bellary</p>

        </div>
      </div>
      <div className="navBarItem2">
        <li>Home</li>
        <li>Construction</li>
        <li>Interior</li>
        <li>How it Works</li>
        <li>Package</li>
      </div>
    </>
  );
};

export default Menu;
