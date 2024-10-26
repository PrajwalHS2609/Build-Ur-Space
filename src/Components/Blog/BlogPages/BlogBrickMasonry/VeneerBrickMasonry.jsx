import React from "react";
import point from "./../../../../Images/point.png";
import check from "./../../../../Images/check.png";
import house from "./../../../../Images/homeRed.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import veneerBrickMasonry from "./../../../../Images/Brick_Masonry/Brick Veneer Masonry.png";

const VeneerBrickMasonry = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={veneerBrickMasonry}
        alt="Brick Veneer Masonry"
      />
      <h5>2. Brick Veneer Masonry</h5>
      <p>
        Brick veneer is a more{" "}
        <a href="https://buildurspace.com/current-types-of-brick-masonry-in-use-today">
          modern type of brick masonry for home construction
        </a>{" "}
        that offers the aesthetic appeal of solid brick while being more
        cost-effective and efficient. In this method, a single layer of bricks
        is attached to the exterior of a wooden or steel frame structure. This
        creates the illusion of a solid brick wall, but with significantly
        reduced weight and material costs.
      </p>
      <ul>
        <h4>Features:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Bricks are used as a facing
            material, not for structural support{" "}
          </span>
          <span>
            <img src={point} alt="point" /> Attached to a framed structure using
            metal ties{" "}
          </span>
          <span>
            <img src={point} alt="point" /> Leaves a cavity between the veneer
            and the structural wall{" "}
          </span>
        </li>
      </ul>
      <ul>
        <h4>Benefits:</h4>
        <li>
          <span>
            <img src={check} alt="check" />
            Lighter and more cost-effective than solid brick masonry
          </span>
          <span>
            <img src={check} alt="check" /> Faster to construct and easier to
            repair
          </span>
          <span>
            <img src={check} alt="check" /> Provides a stylish brick appearance
            without the structural weight
          </span>
        </li>
      </ul>
      <ul>
        <h4>Applications:</h4>
        <li>
          <span>
            <img src={house} alt="house" /> Residential homes and modern
            buildings that require aesthetic appeal without the cost of full
            brick walls
          </span>
          <span>
            <img src={house} alt="house" /> Ideal for energy-efficient homes
            that need insulation between the veneer and the interior wall{" "}
          </span>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default VeneerBrickMasonry;
