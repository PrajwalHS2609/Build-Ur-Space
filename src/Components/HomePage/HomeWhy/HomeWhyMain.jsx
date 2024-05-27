import React from "react";
import "./HomeWhy.css";
import HomeWhyCard from "./HomeWhyCard";
import icon1 from "../../../Images/user.png";
import icon2 from "../../../Images/puzzle.png";
import icon3 from "../../../Images/calendar.png"
import icon4 from "../../../Images/quality.png";
import icon5 from "../../../Images/No_hidden_cost.png";
import icon6 from "../../../Images/Sqft.png";
import icon7 from "../../../Images/10_years.png";
import icon8 from "../../../Images/file.png"
const HomeWhyMain = () => {
  return (
    <div className="homeWhyMainContainer">
      <HomeWhyCard
        img={icon1}
        // head="Safe Money Transaction"
        para="Human-centric design"
      />
      <HomeWhyCard
        img={icon2}
        // head="Absolute Transparency"
        para=" End-to-end solution"
      />
      <HomeWhyCard
        img={icon3}
        // head="Assured Quality Control"
        para=" Timely Delivery"
      />
      <HomeWhyCard img={icon4} para=" Superior Quality check" />
      <HomeWhyCard img={icon5} para="No hidden cost" />
      <HomeWhyCard
        img={icon6}
        para=" 72,000+ sq ft area constructed 
& delivered "
      />
      <HomeWhyCard
        img={icon7}
        para="10 years warranty*,
 1-year service warranty"
      />
      <HomeWhyCard img={icon8} para="No sub-contracting" />
    </div>
  );
};

export default HomeWhyMain;
