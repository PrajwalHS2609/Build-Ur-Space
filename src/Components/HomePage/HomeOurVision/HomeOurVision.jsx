import React from "react";
import "./HomeOurVision.css";
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
            src="https://img.freepik.com/free-photo/real-estate-agent-client-holding-toy-house_23-2148301688.jpg?t=st=1716402834~exp=1716406434~hmac=48ab6063d1d451bd793af52f4ee65ad3a45367a87a51e0fe4bc212a4aa0c31c1&w=996"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomeOurVision;
