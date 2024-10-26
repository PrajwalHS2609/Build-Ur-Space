import React from "react";
import point from "./../../../../../Images/point.png";
import check from "./../../../../../Images/check.png";
import house from "./../../../../../Images/homeRed.png";
import WaterProofingImg from "../../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import solidBrickMasonry from "./../../../../../Images/Brick_Masonry/Solid Brick Masonry.png";
const SolidBrickMasonry = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={solidBrickMasonry} alt="Solid Brick Masonry" />
      <h5>1. Solid Brick Masonry</h5>
      <p>
        Solid brick masonry, also known as traditional brick masonry, is one of
        the oldest types of brick construction. This method involves laying
        bricks in overlapping rows, known as courses, to create a solid
        structure.{" "}
        <a href="https://heckmannbuildingprods.com/blog/difference-between-solid-masonry-and-brick-veneer">
          Solid brick masonry for home construction
        </a>{" "}
        is prized for its strength and durability, making it a preferred choice
        for homes built to last.
      </p>
      <ul>
        <h4>Features:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Solid walls made entirely of bricks
          </span>
          <span>
            <img src={point} alt="point" />
            No gaps or cavities between the layers{" "}
          </span>
          <span>
            <img src={point} alt="point" />
            Thick walls that provide excellent thermal mass{" "}
          </span>
        </li>
      </ul>
      <ul>
        <h4>Benefits:</h4>
        <li>
          <span>
            <img src={check} alt="check" /> Superior durability and resistance
            to harsh weather conditions{" "}
          </span>
          <span>
            <img src={check} alt="check" /> Excellent sound insulation, making
            it ideal for urban environments{" "}
          </span>
          <span>
            <img src={check} alt="check" /> High thermal mass helps in
            maintaining indoor temperature, reducing heating and cooling costs{" "}
          </span>
        </li>
      </ul>
      <ul>
        <h4>Applications:</h4>
        <li>
          <span>
            <img src={house} alt="house" /> Traditional homes and buildings in
            areas with extreme climates
          </span>
          <span>
            <img src={house} alt="house" />
            Buildings requiring enhanced structural strength and insulation
          </span>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default SolidBrickMasonry;
