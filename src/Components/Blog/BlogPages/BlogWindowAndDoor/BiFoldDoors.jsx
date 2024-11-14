import React from "react";
import biFoldDoors from "./../../../../Images/BlogImgs/Trending Window and Door/Bi-Fold Doors.png";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const BiFoldDoors = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={biFoldDoors} alt="biFoldDoors" />
      <h5>4. Bi-Fold Doors: Versatile and Space-Saving</h5>
      <p>
        Bi-fold doors are an innovative choice in Modern Window & Door Designs
        that fold back in sections, creating an expansive opening. They’re
        perfect for homes with large outdoor areas, as they fully open to blur
        the boundaries between indoors and outdoors. Bi-fold doors come in
        various frame materials, including aluminum and wood, and are often used
        in living rooms, dining rooms, and even kitchens to create a spacious
        atmosphere.
      </p>
      <ul>
        <h4>Key Benefits of Bi-Fold Doors:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> They offer maximum flexibility, as
            you can fold back sections to customize the opening width.
          </span>
          <span>
            <img src={point} alt="point" /> Available in modern materials,
            bi-fold doors are energy-efficient and durable.
          </span>
          <span>
            <img src={point} alt="point" /> When closed, they offer large glass
            areas that bring in natural light and views.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default BiFoldDoors;
