import React from "react";
import smartWindows from "./../../../../Images/BlogImgs/Trending Window and Door/Smart Windows.png";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const SmartWindows = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={smartWindows} alt="smartWindows" />
      <h5>9. Smart Windows: The Future of Window Design </h5>
      <p>
        Smart windows are a high-tech innovation that can transform your home.
        These windows use electrochromic glass, which allows you to adjust the
        opacity with a simple control, providing privacy, light control, and
        energy efficiency. Smart windows are increasingly popular in Modern
        Window & Door Designs due to their convenience and futuristic appeal.
      </p>
      <ul>
        <h4>Key Benefits of Custom Doors:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> They offer adjustable opacity,
            replacing the need for curtains or blinds.
          </span>
          <span>
            <img src={point} alt="point" /> Energy-efficient, reducing heating
            and cooling costs.
          </span>
          <span>
            <img src={point} alt="point" /> Perfect for homeowners looking to
            embrace technology in their home design.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SmartWindows;
