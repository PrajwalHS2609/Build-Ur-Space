import React from "react";
import "./HomeOurVision.css";
import house from "../../../Images/holding house.jpg"
const HomeOurVision = () => {
  return (
    <div className="ourVisionContainer">
      <div className="ourVisionWrapper">
        <div className="ourVisionContent1">
          <div className="ourVisionhead">
            <h1>
              Our <span>Vision</span>
            </h1>
          </div>
          <div className="ourVisionItem1">
            <p>
              <ul>
                <li>
                  "A <span>Designer home</span> is the dream fueling every
                  project tackled by BUILD UR SPACE."
                </li>
                <li>
                  our vision is to ensure that every house deserves to have a
                  Designer living.
                </li>
                <li>
                  <span>BUILD UR SPACE:</span> where dreams transform into
                  reality!
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="ourVisionContent2">
        <div className="ourVisionItem2">
          <img
            src={house}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeOurVision;
