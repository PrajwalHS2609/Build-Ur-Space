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
          <p>
            <a href="tel:9742255110">+91 9742255110</a>
          </p>
        </div>
        <div className="navInnerItem" id="navInnerItem2">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="navIcon"
          ></FontAwesomeIcon>
          <p className="navPara">
            <Link to={"/contact-us"}>Bangalore</Link>
          </p>
          <div className="navLine"></div>
          <p>
            <Link to={"/contact-us"}>Chitradurga</Link>
          </p>
          <div className="navLine"></div>
          <p>
            <Link to={"/contact-us"}>Bellary</Link>
          </p>
        </div>
      </div>
      <div className="navBarItem2">
        <li>
          <Link to={"/"}>
            <img src={favicon} alt="favicon" />
          </Link>
        </li>
        <li>
          <Link to={"/home-and-commercial-construction"}>Construction</Link>
        </li>
        <li>
          <Link to={"/home-and-commercial-interior-design"}>Interior</Link>
        </li>
        <li>
          <Link to={"/home-construction-packages"}>Packages</Link>
        </li>

        <li>
          <Link to={"/about-us"}>About Us</Link>
        </li>
        <li>
          <Link to={"/contact-us"}>Contact Us</Link>
        </li>
      </div>
      <ul onClick={showSideBar} className="mainMenu">
        <FontAwesomeIcon icon={faBars} className="hamIcon"></FontAwesomeIcon>
      </ul>
      <div className="respMenu">
        <div className="respMenuScroll">
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/"}>
                Home
              </Link>
            </h2>
            <h2 className="cross">
              <FontAwesomeIcon
                icon={faX}
                onClick={hideSideBar}
                className="respIcon"
              ></FontAwesomeIcon>
            </h2>
          </ul>
          <ul className="serviceDrop">
            <h2>
              <Link
                onClick={hideSideBar}
                to={"/home-and-commercial-construction"}
              >
                Constructions
              </Link>
            </h2>
          </ul>
          <ul>
            <h2>
              <Link
                onClick={hideSideBar}
                to={"/home-and-commercial-interior-design"}
              >
                Interiors
              </Link>
            </h2>
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/about-us"}>
                About Us
              </Link>
            </h2>
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/home-construction-packages"}>
                Packages
              </Link>
            </h2>
          </ul>
          <ul>
            <h2>
              <Link onClick={hideSideBar} to={"/contact-us"}>
                Contact Us
              </Link>
            </h2>
          </ul>
          <ul>
            <div className="respMenuSpace"></div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Menu;
