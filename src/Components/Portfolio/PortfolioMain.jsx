import React from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";
import kiran from "./../../Images/kiran.png";
import raja from "./../../Images/raja.png";
import chetan from "./../../Images/chetan.png";
const PortfolioMain = () => {
  return (
    <div className="portfolioMainContainer">
      <PortfolioCard
        img={kiran}
        name="Kiran's Home"
        loc="Hegde Nagar, Bangalore"
        floor="G+3.5"
        area="4,650 sq.ft."
        duration="1.5 yrs"
      />
      <PortfolioCard
        img={raja}
        name="Rajashekhar's Home"
        loc="Bellary"
        floor="G"
        area="2,150 sq.ft."
        duration="10 months"
      />
      <PortfolioCard
        img={chetan}
        name="Chetan's  Home"
        loc="chitradurga"
        floor="G"
        area="1650 sq.ft."
        duration="10 months"
      />
      {/* <PortfolioCard
        img="https://www.buildahome.in/_next/image?url=https%3A%2F%2Fwww.buildahome.in%2Fwp%2Fwp-content%2Fuploads%2F2024%2F04%2FNew-scaled.jpg&w=1920&q=75"
        name="Mr. Badri & Mr. Dheeraj’s Dream Home"
        loc="Amruthhalli, Bangalore"
        floor="G+4"
        area="5,359 sq.ft."
        cost="1.18 Crore"
      /> */}
    </div>
  );
};

export default PortfolioMain;
