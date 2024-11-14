import React from "react";
import awningWindows from "./../../../../Images/BlogImgs/Trending Window and Door/Awning Windows.png";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const AwningWindows = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={awningWindows} alt="awningWindows" />
      <h5>6. Awning Windows: Perfect for Modern Ventilation</h5>
      <p>
        Awning windows, hinged at the top, open outward from the bottom and are
        perfect for places that require ventilation even in rainy weather. These
        windows add a modern touch to any room and are often combined with other
        window styles for added visual interest. Their practical design makes
        them a popular choice for bathrooms, kitchens, and basements.
      </p>
      <ul>
        <h4>Key Benefits of Awning Windows:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> They provide ventilation while
            protecting interiors from rain.
          </span>
          <span>
            <img src={point} alt="point" /> Compact and functional, they work
            well in smaller spaces and modern homes.
          </span>
          <span>
            <img src={point} alt="point" /> When paired with other windows, they
            add a unique design element.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default AwningWindows;
