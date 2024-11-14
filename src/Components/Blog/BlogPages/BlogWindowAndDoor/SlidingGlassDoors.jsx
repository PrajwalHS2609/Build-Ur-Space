import React from "react";
import slidingGlassDoors from "./../../../../Images/BlogImgs/Trending Window and Door/Sliding Glass Doors.png";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const SlidingGlassDoors = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={slidingGlassDoors} alt="slidingGlassDoors" />
      <h5>1. Sliding Glass Doors: Bringing the Outdoors In </h5>
      <p>
        Sliding glass doors are a timeless favorite among modern homeowners.
        Their large glass panels allow for ample natural light, providing a
        seamless transition between indoor and outdoor spaces. Modern sliding
        doors have thin, durable frames made of materials like aluminum or steel
        that maximize the view, adding a minimalist touch that’s perfect for
        contemporary homes. These doors are also highly functional, making it
        easy to move between indoor and outdoor areas.
      </p>
      <ul>
        <h4>Key Benefits of Sliding Glass Doors:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> They enhance natural lighting in
            the room, reducing the need for artificial lighting.
          </span>
          <span>
            <img src={point} alt="point" /> Durable materials like aluminum
            and fiberglass make them energy-efficient and long-lasting.
          </span>
          <span>
            <img src={point} alt="point" /> The smooth operation and large
            glass panels offer an uninterrupted view and access to the outdoors.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SlidingGlassDoors;
