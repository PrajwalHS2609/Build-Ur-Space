import React from "react";
import "./Footer.css";
import BioFooter from "./BioFooter";
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
            <li>Home Constructions</li>
            <li>Home Interior</li>
          </ul>
        </div>
        <div className="footerContent">
          <ul>
            <h2>Contact</h2>
          </ul>
        </div>
        <div className="footerContent">
          <ul>
            <h2>Social Media</h2>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer2">
<li>Privacy Policy</li>
<li>Terms & Conditions</li>
    </div>
    </div>
  );
};

export default Footer;
