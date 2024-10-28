import React from "react";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faBars,
  faX,
  faChevronDown,
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
            <a href="tel:9741111036">+91 9741111036</a>
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
          <span>
            Other Services{" "}
            <FontAwesomeIcon
              icon={faChevronDown}
              className="dropIcon"
            ></FontAwesomeIcon>
            <div className="dropScroll">
              <div className="dropDown">
                <li>
                  <Link to={"/gypsum-ceilings-in-bangalore"}>
                    Gypsum Ceilings
                  </Link>
                </li>
                <li>
                  <Link to={"/gypsum-partition-in-bangalore"}>
                    Gypsum Partitions
                  </Link>
                </li>
                <li>
                  <Link to={"/dry-wall-partition-in-bangalore"}>
                    Dry Wall Partition{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"/grid-false-ceiling-in-bangalore"}>
                    Grid False Ceiling{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"/pvc-false-ceiling-in-bangalore"}>
                    PVC False Ceiling
                  </Link>
                </li>
                <li>
                  <Link to={"/wooden-false-ceiling-in-bangalore"}>
                    Wooden False Ceiling{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"/toughened-glass-door-in-bangalore"}>
                    Toughened Glass Door{" "}
                  </Link>
                </li>
                <li>
                  <Link to={"/toughened-glass-partition-in-bangalore"}>
                    Toughened Glass Partition{" "}
                  </Link>
                </li>
              </div>
            </div>
          </span>
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
