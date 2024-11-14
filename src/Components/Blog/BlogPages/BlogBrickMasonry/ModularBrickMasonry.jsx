import React from "react";
import point from "./../../../../Images/point.png";
import check from "./../../../../Images/check.png";
import house from "./../../../../Images/homeRed.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import BrickMasonryFooter from "./BrickMasonryFooter";
import modularBrickMasonry from "./../../../../Images/BlogImgs/Brick_Masonry/Modular Brick Masonry.png";

const ModularBrickMasonry = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={modularBrickMasonry} alt="Modular Brick Masonry" />
      <h5>8. Modular Brick Masonry</h5>
      <p>
        Modular brick masonry is an{" "}
        <a href="https://buildurspace.com/current-types-of-brick-masonry-in-use-today">
          advanced type of brick masonry for home construction
        </a>{" "}
        where bricks are designed to specific dimensions that allow for more
        efficient construction. These bricks are smaller and lighter than
        traditional bricks, allowing for faster construction and less waste.
      </p>
      <ul>
        <h4>Features:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Smaller, precisely dimensioned
            bricks
          </span>
          <span>
            <img src={point} alt="point" /> Designed to fit together with
            minimal cutting or waste
          </span>
          <span>
            <img src={point} alt="point" /> Often used in modern architectural
            designs
          </span>
        </li>
      </ul>
      <ul>
        <h4>Benefits:</h4>
        <li>
          <span>
            <img src={check} alt="check" /> Faster construction due to uniform
            brick sizes{" "}
          </span>
          <span>
            <img src={check} alt="check" /> Less material waste, reducing
            overall costs
          </span>
          <span>
            <img src={check} alt="check" /> Aesthetic flexibility for modern
            home designs
          </span>
        </li>
      </ul>
      <ul>
        <h4>Applications:</h4>
        <li>
          <span>
            <img src={house} alt="house" /> Modern homes with sleek, minimalist
            designs
          </span>
          <span>
            <img src={house} alt="house" /> Buildings that require fast
            construction times without sacrificing quality
          </span>
        </li>
      </ul>
      <br />
      <BrickMasonryFooter />
    </div>
  );
};

export default ModularBrickMasonry;
