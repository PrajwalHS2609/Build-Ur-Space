import React from "react";
import point from "./../../../../Images/point.png";
import check from "./../../../../Images/check.png";
import house from "./../../../../Images/homeRed.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import cavityBrickMasonry from "./../../../../Images/BlogImgs/Brick_Masonry/Cavity Wall Brick Masonry.png";

const CavityBrickMasonry = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={cavityBrickMasonry}
        alt="Cavity Wall Brick Masonry"
      />
      <h5>5. Cavity Wall Brick Masonry</h5>
      <p>
        Cavity wall brick masonry involves the construction of two parallel
        brick walls with a gap, or cavity, between them. This cavity can be
        filled with insulating material or left empty to provide ventilation and
        moisture control.{" "}
        <a href="https://www.ultratechcement.com/for-homebuilders/home-building-explained-single/descriptive-articles/cavity-walls-101-understanding-their-advantages-and-where-to-construct-them">
          Cavity wall brick masonry for home construction
        </a>{" "}
        is popular in regions where energy efficiency and moisture control are
        primary concerns.
      </p>
      <ul>
        <h4>Features:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Two separate walls with a cavity in
            between
          </span>
          <span>
            <img src={point} alt="point" /> Cavity can be filled with insulation
            or left empty for ventilation
          </span>
          <span>
            <img src={point} alt="point" /> Often used with damp-proof courses
            to prevent moisture ingress
          </span>
        </li>
      </ul>
      <ul>
        <h4>Benefits:</h4>
        <li>
          <span>
            <img src={check} alt="check" />
            Excellent thermal insulation, reducing energy consumption{" "}
          </span>
          <span>
            <img src={check} alt="check" /> Prevents moisture from penetrating
            the inner walls, preventing mold and dampness
          </span>
          <span>
            <img src={check} alt="check" /> Lightweight construction compared to
            solid brick masonry
          </span>
        </li>
      </ul>
      <ul>
        <h4>Applications:</h4>
        <li>
          <span>
            <img src={house} alt="house" /> Homes in regions with high humidity
            or heavy rainfall
          </span>
          <span>
            <img src={house} alt="house" /> Energy-efficient homes that require
            high levels of insulation
          </span>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default CavityBrickMasonry;
