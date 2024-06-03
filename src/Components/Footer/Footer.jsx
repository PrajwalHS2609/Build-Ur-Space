import React from "react";
import "./Footer.css";
import BioFooter from "./BioFooter";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faGlobe,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faXTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,

} from "@fortawesome/free-brands-svg-icons";
import seo from "./../../Images/TSS.png";
const Footer = () => {
  return (
    <div className="footWrapper">
      <div className="footerContainer">
        <div className="footer1">
          <div className="footerContent" id="BioFooter">
            <BioFooter />
          </div>
          <div className="footerContent">
            <ul>
              <h2>Our Services</h2>
              <li>
                <Link to={"/home-construction"}>Home Constructions</Link>
              </li>
              <li>
                <Link to={"/home-interior"}>Home Interior</Link>
              </li>
              <li>
                <Link to={"/"}>Commercial Interior</Link>
              </li>
              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link to={"/packages"}>Packages</Link>
              </li>
              <li></li>
            </ul>
          </div>
          <div className="footerContent">
            <ul>
              <h2>Contact Us</h2>
              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="footIcon"
                ></FontAwesomeIcon>
                <p> <a href="tel:9742255110">+91 9742255110</a></p>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="footIcon"
                ></FontAwesomeIcon>
                <p> hello@buildurspace.com</p>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="footIcon"
                ></FontAwesomeIcon>
                <p> www.buildurspace.com</p>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="footIcon"
                ></FontAwesomeIcon>
                <p>
                  #25, 1st floor, 4th cross, Trupthi complex, above Poorvika
                  mobiles, Sanjay Nagar main road, Bengaluru - 94
                </p>
              </li>
            </ul>
          </div>
          <div className="footerContent" id="socialFooter">
            <ul>
              <h2>Social Media</h2>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="socialIcon"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="socialIcon"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="socialIcon"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="socialIcon"
                  ></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="socialIcon"
                  ></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer2">
        <li>Privacy Policy</li>
        <li>
          <a href="https://tryseoservices.com/">
            <img src={seo} alt="" />
          </a>
        </li>
        <li>Terms & Conditions</li>
      </div>
    </div>
  );
};

export default Footer;
