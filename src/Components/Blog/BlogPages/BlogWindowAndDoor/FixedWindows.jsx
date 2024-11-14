import React from "react";
import fixedWindows from "./../../../../Images/BlogImgs/Trending Window and Door/Fixed Windows.png";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const FixedWindows = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={fixedWindows}
        alt="fixedWindows"
      />
      <h5>8. Fixed Windows: Adding Light Without Ventilation </h5>
      <p>
        Fixed windows are stationary and do not open, making them ideal for
        rooms where ventilation is not a priority. These windows are often used
        in conjunction with other types of windows and are perfect for framing
        outdoor views or filling spaces with natural light. The Latest Window
        Designs for House offer creative fixed window shapes and configurations,
        adding visual interest without compromising on energy efficiency.
      </p>
      <ul>
        <h4>Key Benefits of Fixed Windows:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> They bring in light without
            affecting the energy efficiency of your home.
          </span>
          <span>
            <img src={point} alt="point" /> Creative shapes add design
            flexibility, ideal for modern homes.
          </span>
          <span>
            <img src={point} alt="point" /> Low maintenance, as they don’t have
            moving parts.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FixedWindows;
