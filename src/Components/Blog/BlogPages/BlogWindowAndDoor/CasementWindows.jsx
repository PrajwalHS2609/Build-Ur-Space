import React from "react";
import casementWindows from "./../../../../Images/BlogImgs/Trending Window and Door/Casement Windows.png";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const CasementWindows = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={casementWindows} alt="casementWindows" />
      <h5>5. Casement Windows: A Timeless Choice with Modern Appeal </h5>
      <p>
        Casement windows, hinged on one side and opening outward, are popular
        for their sleek and functional design. These windows are ideal for
        ventilation, as they allow air to flow in from top to bottom when fully
        opened. Casement windows are available in various styles, making them a
        versatile option that complements both traditional and contemporary
        architecture.
      </p>
      <ul>
        <h4>Key Benefits of Casement Windows:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> They provide excellent ventilation,
            ideal for areas like kitchens and bathrooms.
          </span>
          <span>
            <img src={point} alt="point" /> Secure locking mechanisms enhance
            safety, a key feature in Latest Window Designs for House.
          </span>
          <span>
            <img src={point} alt="point" /> The unobstructed glass panels offer
            a clear view, making them perfect for scenic locations.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default CasementWindows;
