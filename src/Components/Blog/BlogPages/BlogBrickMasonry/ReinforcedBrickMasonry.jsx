import React from "react";
import point from "./../../../../Images/point.png";
import check from "./../../../../Images/check.png";
import house from "./../../../../Images/homeRed.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import reinforcedBrickMasonry from "./../../../../Images/Brick_Masonry/Reinforced Brick Masonry.png";

const ReinforcedBrickMasonry = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={reinforcedBrickMasonry}
        alt="Reinforced Brick Masonry"

      />
      <h5>3. Reinforced Brick Masonry</h5>
      <p>
        Reinforced brick masonry combines the traditional strength of{" "}
        <a href="https://buildurspace.com/current-types-of-brick-masonry-in-use-today">
          brick masonry for home construction
        </a>{" "}
        with modern engineering techniques. In this method, steel reinforcements
        (such as bars or mesh) are embedded into the mortar between the bricks.
        This enhances the load-bearing capacity and structural integrity of the
        walls, making them ideal for high-stress environments like
        earthquake-prone areas.
      </p>
      <ul>
        <h4>Features:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Steel reinforcements embedded within the brick and mortar layers
          </span>
          <span>
            <img src={point} alt="point" /> Enhanced strength and load-bearing
            capacity
          </span>
          <span>
            <img src={point} alt="point" /> Increased resistance to seismic
            forces
          </span>
        </li>
      </ul>
      <ul>
        <h4>Benefits:</h4>
        <li>
          <span>
            <img src={check} alt="check" /> Improved structural stability and
            safety in earthquake-prone regions{" "}
          </span>
          <span>
            <img src={check} alt="check" /> Can be used for taller buildings
            with greater load requirements
          </span>
          <span>
            <img src={check} alt="check" /> Offers the same aesthetic appeal as
            traditional brick masonry
          </span>
        </li>
      </ul>
      <ul>
        <h4>Applications:</h4>
        <li>
          <span>
            <img src={house} alt="house" /> Homes and buildings in areas prone
            to earthquakes or extreme weather conditions
          </span>
          <span>
            <img src={house} alt="house" /> High-rise structures requiring
            additional support and strength
          </span>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default ReinforcedBrickMasonry;
