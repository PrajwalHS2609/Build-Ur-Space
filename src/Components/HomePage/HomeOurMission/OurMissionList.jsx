import React from "react";
import "./HomeOurMission.css";
const OurMissionList = () => {
  return (
    <div className="ourMissionListContainer">
      <div className="ourMissionListHead">
        <h1>
          Our <span>Mission</span>
        </h1>
      </div>
      <div className="ourMissionListContent">
        <ul>
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
        </ul>
      </div>
    </div>
  );
};

export default OurMissionList;
