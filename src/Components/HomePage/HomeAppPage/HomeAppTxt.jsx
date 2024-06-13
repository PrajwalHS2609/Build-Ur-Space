import React from "react";
import "./HomeAppPage.css";
const HomeAppTxt = () => {
  return (
    <div className="homeAppTxtContainer">
      <div className="homeAppHead">
        <div className="homeAppHeading">
          <h2>Building Your Dream Home, with Real-Time App Tracking</h2>
        </div>
      </div>
      <div className="homeAppPara">
        <p>
          Monitor the progress of your house construction, raise queries, view
          inspection reports, and more.
        </p>
        <div className="homeAppParaList">
          <ul>
            <li>Explore packages, floor plans, and design recommendations</li>
            <li>Capture construction progress in 3D</li>
            <li>Track the project in real-time until completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeAppTxt;
