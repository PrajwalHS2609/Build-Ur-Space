import React from "react";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import interiorPaintMaximizeBanner from "./../../../../Images/BlogImgs/Trending Interior Paint Colors and Expert Tips/Maximizing Impact with Accent Walls.png";

const InteriorPaintMaximize = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={interiorPaintMaximizeBanner}
        alt="Interior Paint Maximize Banner"
      />
      <h5>Maximizing Impact with Accent Walls</h5>
      <p>
        One way to make the most of your chosen{" "}
        <a href="https://buildurspace.com/home-and-commercial-interior-design">home interior paint colors</a> is by incorporating accent
        walls. An accent wall painted in a bold or contrasting shade can serve
        as a focal point, adding depth and interest to the room. For example:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> A deep navy accent wall in a white
            living room creates a striking effect.
          </span>
          <span>
            <img src={point} alt="point" /> Mustard yellow in a neutral-toned
            kitchen adds a pop of energy.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default InteriorPaintMaximize;
