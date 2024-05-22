import React from "react";
import "./HomeAppPage.css";
const HomeAppTxt = () => {
  return (
    <div className="homeAppTxtContainer">
      <div className="homeAppHead">
        {/* <div className="appDot"></div> */}
        <div className="homeAppHeading">
          <h1>We Construct Your Dream Home. You Track Progress On App.</h1>
        </div>
      </div>
      <div className="homeAppPara">
        <p>
          Track house construction project progress, raise queries, view
          inspection reports and more.
        </p>
        <div className="homeAppParaList">
          <li>View packages, floor plans, design recommendations</li>
          <li>Capture house construction progress in 3D</li>
          <li>Tracking until project completion</li>
        </div>
      </div>
    </div>
  );
};

export default HomeAppTxt;
