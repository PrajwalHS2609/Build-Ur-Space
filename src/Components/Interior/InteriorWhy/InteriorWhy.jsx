import React from "react";
import "./../../HomePage/HomeWhy/HomeWhy.css";
import HomeWhyCard from "../../HomePage/HomeWhy/HomeWhyCard";
import icon1 from "../../../Images/Customer_Centric.png";
import icon2 from "../../../Images/puzzle.png";
import icon3 from "../../../Images/calender-45.png";
import icon4 from "../../../Images/Superior_Quality_Check.png";
import icon5 from "../../../Images/No_hidden_cost.png";
import icon6 from "../../../Images/Sqft.png";
import icon7 from "../../../Images/10_years.png";
import icon8 from "../../../Images/No_Sub_Contract.png";
const InteriorWhy = () => {
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
        para="Delivery in 45 days"
      />
      <HomeWhyCard img={icon4} para=" Superior Quality check" />
      <HomeWhyCard img={icon5} para="No hidden cost" />
      <HomeWhyCard
        img={icon6}
        para="  117,000+ sq ft area designed 
& delivered  "
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

export default InteriorWhy;
