import React from "react";
import frenchDoors from "./../../../../Images/BlogImgs/Trending Window and Door/French Doors.png";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const FrenchDoors = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={frenchDoors} alt="frenchDoors" />
      <h5>2. French Doors: Classic Meets Modern</h5>
      <p>
        French doors are a classic design that never goes out of style, now
        available with modern touches for today’s homes. Traditional French
        doors have glass panes extending the entire length, bringing in plenty
        of light while providing a touch of elegance. They are commonly used as
        patio doors or even interior doors between rooms, offering versatility
        in design.
      </p>
      <ul>
        <h4>Key Benefits of French Doors:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> French doors bring in a lot of
            natural light, making any space appear larger and more inviting.
          </span>
          <span>
            <img src={point} alt="point" /> They work well in various settings,
            from traditional to ultra-modern.
          </span>
          <span>
            <img src={point} alt="point" /> Modern versions have improved energy
            efficiency with double or triple glazing and more durable frames.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FrenchDoors;
