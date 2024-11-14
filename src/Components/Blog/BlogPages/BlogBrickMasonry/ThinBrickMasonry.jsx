import React from "react";
import point from "./../../../../Images/point.png";
import check from "./../../../../Images/check.png";
import house from "./../../../../Images/homeRed.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import thinBrickMasonry from "./../../../../Images/BlogImgs/Brick_Masonry/Thin Brick Masonry.png";

const ThinBrickMasonry = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={thinBrickMasonry} alt="Thin Brick Masonry" />
      <h5>6. Thin Brick Masonry</h5>
      <p>
        Thin brick masonry is a modern variation of{" "}
        <a href="https://buildurspace.com/current-types-of-brick-masonry-in-use-today">
          brick masonry for home construction
        </a>{" "}
        where bricks are cut to a fraction of their normal thickness. These thin
        bricks are then attached to the surface of walls to provide the look and
        feel of traditional brick, but with significantly less weight and
        material cost. Thin brick masonry is often used in both residential and
        commercial applications for aesthetic purposes.
      </p>
      <ul>
        <h4>Features:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Thin bricks, typically 1/2 inch
            thick
          </span>
          <span>
            <img src={point} alt="point" /> Applied to the surface of walls
            using adhesive or mortar
          </span>
          <span>
            <img src={point} alt="point" /> Provides the appearance of
            traditional brick walls
          </span>
        </li>
      </ul>
      <ul>
        <h4>Benefits:</h4>
        <li>
          <span>
            <img src={check} alt="check" /> Lightweight and easy to install{" "}
          </span>
          <span>
            <img src={check} alt="check" /> Cost-effective due to reduced
            material usage
          </span>
          <span>
            <img src={check} alt="check" /> Suitable for retrofitting existing
            structures without adding significant load
          </span>
        </li>
      </ul>
      <ul>
        <h4>Applications:</h4>
        <li>
          <span>
            <img src={house} alt="house" /> Residential and commercial buildings
            where the aesthetic of brick is desired without the weight of
            traditional bricks
          </span>
          <span>
            <img src={house} alt="house" /> Ideal for interior walls or exterior
            facades
          </span>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default ThinBrickMasonry;
