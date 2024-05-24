import React from "react";
import "./OurGoals.css"

const OurGoalList = () => {
  return (
    <div className="ourGoalListContainer">
      <div className="ourGoalListHead">
        <h1>
          Our <span>Goals</span>
        </h1>
      </div>
      <div className="ourGoalListContent">
        <ol>
          <li>
            Each home is given its own identity through distinctive and{" "}
            <span>unique designs</span>
          </li>
          <li>
            <span>Smart Space Planning</span> isn't just about furniture but
            also about creating a symphony of spacing, lighting, colors, and
            intricate details that make every project by BUILD UR SPACE a jaw
            dropping masterpiece!
          </li>
          <li>
            <span>End-to-end solutions</span> with customization as the hallmark
            of the brand.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default OurGoalList;
