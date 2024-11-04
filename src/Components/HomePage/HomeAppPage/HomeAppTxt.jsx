import React from "react";
import "./HomeAppPage.css";
import appCheck from "./../../../Images/appCheck.png"
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
            <li><img src={appCheck} alt="appCheck" />Explore packages, floor plans, and design recommendations</li>
            <li><img src={appCheck} alt="appCheck" />Capture construction progress in 3D</li>
            <li><img src={appCheck} alt="appCheck" />Track the project in real-time until completion</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeAppTxt;
