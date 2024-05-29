import React from "react";
import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";

const PortfolioMain = () => {
  return (
    <div className="portfolioMainContainer">
      <PortfolioCard
        img="https://www.buildahome.in/_next/image?url=https%3A%2F%2Fwww.buildahome.in%2Fwp%2Fwp-content%2Fuploads%2F2024%2F04%2F10-2-scaled.jpg&w=1920&q=75"
        name="Mr. Vishwanath’s Dream Home"
        loc="Chandrapura, Bangalore"
        floor="G+2"
        area="3,450 sq.ft."
        cost="72 Lakhs"
      />
      <PortfolioCard
        img="https://www.buildahome.in/_next/image?url=https%3A%2F%2Fwww.buildahome.in%2Fwp%2Fwp-content%2Fuploads%2F2024%2F04%2F02-2.jpg&w=1920&q=75"
        name="Mr. Ajay Kulkarni’s Dream Home"
        loc="Kodigehalli, Bangalore"
        floor="G+2"
        area="3,599 sq.ft."
        cost="69.2 Lakhs"
      />
      <PortfolioCard
        img="https://www.buildahome.in/_next/image?url=https%3A%2F%2Fwww.buildahome.in%2Fwp%2Fwp-content%2Fuploads%2F2024%2F04%2F01-4.jpg&w=1920&q=75"
        name="Mr. Sudarshan’s Dream Home"
        loc="Kanakapura, Bangalore"
        floor="G+1"
        area="2,302 sq.ft."
        cost="53 Lakhs"
      />
          <PortfolioCard
        img="https://www.buildahome.in/_next/image?url=https%3A%2F%2Fwww.buildahome.in%2Fwp%2Fwp-content%2Fuploads%2F2024%2F04%2FNew-scaled.jpg&w=1920&q=75"
        name="Mr. Badri & Mr. Dheeraj’s Dream Home"
        loc="Amruthhalli, Bangalore"
        floor="G+4"
        area="5,359 sq.ft."
        cost="1.18 Crore"
      />
    </div>
  );
};

export default PortfolioMain;
