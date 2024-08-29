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
  faPinterest,
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
          <div className="footerContent" id="footerContent1">
            <ul>
              <h2>Our Services</h2>
              <li>
                <Link to={"/home-and-commercial-construction"}>
                  Home Constructions
                </Link>
              </li>
              <li>
                <Link to={"/home-and-commercial-interior-design"}>
                  Home Interior
                </Link>
              </li>
              <li>
                <Link to={"/commercial-interior-design"}>
                  Commercial Interior
                </Link>
              </li>
              <li>
                <Link to={"/about-us"}>About Us</Link>
              </li>
              <li>
                <Link to={"/home-construction-packages"}>Packages</Link>
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
                <p>
                  <a href="tel:9741111036">+91 9741111036</a>
                </p>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="footIcon"
                ></FontAwesomeIcon>
                <p><a href="mailto:hello@buildurspace.com">hello@buildurspace.com</a> </p>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faGlobe}
                  className="footIcon"
                ></FontAwesomeIcon>
                <p>
                  <a href="www.buildurspace.com"> www.buildurspace.com</a>
                </p>
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
            <h2>Social Media</h2>
            <div className="socialListContainer">
              <div className="socialList">
                <a href="https://x.com/build_ur_space">
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="socialIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="socialList">
                <a href="https://www.instagram.com/buildurspace/">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="socialIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="socialList">
                <a href="https://www.facebook.com/buildurspace">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="socialIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="socialList">
                <a href="https://www.youtube.com/@build_ur_space">
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="socialIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="socialList">
                <a href="https://www.linkedin.com/company/buildurspace">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="socialIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
              <div className="socialList">
                <a href="https://in.pinterest.com/build_ur_space/">
                  <FontAwesomeIcon
                    icon={faPinterest}
                    className="socialIcon"
                  ></FontAwesomeIcon>
                </a>
              </div>
            </div>
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
