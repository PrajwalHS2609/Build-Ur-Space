import React from "react";
import "./OurGoals.css";

const OurGoalsCard = (props) => {
  return (
    <div className="ourGoalCardContainer">
      <div className="ourGoalCardContent">
        <div className="ourGoalCardList">
          <ul>
            <li>{props.para}</li>
          </ul>
        </div>
      </div>
      <div className="ourGoalCardHead">
        <h3>{props.head}</h3>
      </div>
    </div>
  );
};

export default OurGoalsCard;
