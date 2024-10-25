import React from "react";
import point from "./../../../../Images/point.png";
import check from "./../../../../Images/check.png";
import house from "./../../../../Images/homeRed.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const CompositeBrickMasonry = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img="https://img.freepik.com/free-photo/brick-piles-placed-factory-floor_1150-15102.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt="Composite Brick Masonry"
      />
      <h5>4. Composite Brick Masonry</h5>
      <p>
        Composite brick masonry involves using a combination of two or more
        materials to form the structure. This{" "}
        <a href="https://buildurspace.com/current-types-of-brick-masonry-in-use-today">
          type of brick masonry for home construction
        </a>{" "}
        can include bricks combined with materials such as concrete blocks,
        stones, or hollow bricks. The idea behind this type of masonry is to
        maximize the benefits of each material while minimizing the drawbacks.
      </p>
      <ul>
        <h4>Features:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Different materials used in
            combination with bricks
          </span>
          <span>
            <img src={point} alt="point" /> Can include concrete blocks, stone,
            or hollow bricks in specific layers
          </span>
          <span>
            <img src={point} alt="point" /> Often used to reduce construction
            costs without sacrificing strength
          </span>
        </li>
      </ul>
      <ul>
        <h4>Benefits:</h4>
        <li>
          <span>
            <img src={check} alt="check" /> Cost-effective as it reduces the
            amount of high-cost brick used{" "}
          </span>
          <span>
            <img src={check} alt="check" /> Can enhance the thermal or
            structural properties of the wall
          </span>
          <span>
            <img src={check} alt="check" /> Allows for greater flexibility in
            design and application
          </span>
        </li>
      </ul>
      <ul>
        <h4>Applications:</h4>
        <li>
          <span>
            <img src={house} alt="house" /> Homes and buildings where cost and
            strength need to be balanced
          </span>
          <span>
            <img src={house} alt="house" /> Multi-story residential buildings
            that require strong lower levels and lighter upper floors
          </span>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default CompositeBrickMasonry;
