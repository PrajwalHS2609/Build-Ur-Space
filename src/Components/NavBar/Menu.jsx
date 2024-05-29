import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faBars,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import favicon from "./../../Images/favicon.png";
const Menu = () => {
  let showSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    sideBar.style.display = "flex";
    sideBar.style.transform = "translateX(0px)";
  };
  let hideSideBar = () => {
    const sideBar = document.querySelector(".respMenu");
    // sideBar.style.display = "none";
    sideBar.style.transform = "translateX(340px)";
  };

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
        <li>
          <Link to={"/house-construction"}>Construction</Link>
        </li>
        <li>
          <Link to={"/house-interior"}>Interior</Link>
        </li>
        <li>
          <Link to={"/packages"}>Packages</Link>
        </li>

        <li>
          <Link to={"/about-us"}>About Us</Link>
        </li>
        <li>Contact Us</li>
      </div>
      <ul onClick={showSideBar} className="mainMenu">
        <FontAwesomeIcon icon={faBars} className="hamIcon"></FontAwesomeIcon>
      </ul>
      <div className="respMenu">
        <div className="respMenuScroll">
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                Home
              </Link>
            </h1>
            <h1 className="cross">
              <FontAwesomeIcon
                icon={faX}
                onClick={hideSideBar}
                className="respIcon"
              ></FontAwesomeIcon>
            </h1>
          </ul>
          <ul className="serviceDrop">
            <h1>
              <Link onClick={hideSideBar} to={"/house-construction"}>
                Constructions
              </Link>
            </h1>
          </ul>
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/house-interior"}>
                Interiors
              </Link>
            </h1>
          </ul>
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/about-us"}>
                About Us
              </Link>
            </h1>
          </ul>
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/packages"}>
                Packages
              </Link>
            </h1>
          </ul>
          <ul>
            <h1>
              <Link onClick={hideSideBar} to={"/"}>
                Contact Us
              </Link>
            </h1>
          </ul>
          <ul>
            <h2></h2>
          </ul>
          
        </div>
      </div>
    </>
  );
};

export default Menu;
