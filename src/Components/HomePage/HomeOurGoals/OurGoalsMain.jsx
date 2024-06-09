import React from "react";
import "./OurGoals.css";
import OurGoalsCard from "./OurGoalsCard";

const OurGoalsMain = () => {
  return (
    <div className="ourGoalMainContainer">
      <OurGoalsCard
        para="  To be a market leader with the Brand’s soul vision set and mission
              improvising,fulfilling to cater to the vision, the brand’s humans
              come together"
        head="TO BE A MARKET LEADER"
      />
      <OurGoalsCard
        para="With trends, styles, themes and complimentary materials / finishes / colours used to make it welcoming at the same time."
        head="INTERNATIONAL QUALITY DESIGNS"
      />
      <OurGoalsCard
        para="Customers always come with researched ideas that is brought to reality with an entire organisation’s contribution"
        head="IDEAS THAT IS BROUGHT TO REALITY"
      />
      <OurGoalsCard
        para="Customers always remember the team members they worked with and our patience to learn with every project, attention to detail and capturing requirements create lasting relationship"
        head="LASTING RELATIONSHIP"
      />
    </div>
  );
};

export default OurGoalsMain;
