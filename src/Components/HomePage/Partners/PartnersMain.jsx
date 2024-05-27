import React from "react";
import partner1 from "./../../../Images/Kajaria.jpg";
import partner2 from "./../../../Images/DrFixit.jpg";
import partner3 from "./../../../Images/ACC Cement.jpg";
import partner4 from "./../../../Images/Century_Ply.png";
import partner5 from "./../../../Images/Havells.png";

import "./Partners.css";

const PartnersMain = () => {
  return (
    <div className="partnerMainContainer">
      <marquee
        behavior="scroll"
        direction="left"
        scrollamount="20"
        scrolldelay="10"
        className="partnerMainContent"
      >
        <img src={partner1} alt="Natural1" />

        <img src={partner2} alt="Natural2" />

        <img src={partner3} alt="Natural3" />
        <img src={partner4} alt="Natural4" />
        <img src={partner5} alt="Natural5" />
      </marquee>
    </div>
  );
};

export default PartnersMain;
