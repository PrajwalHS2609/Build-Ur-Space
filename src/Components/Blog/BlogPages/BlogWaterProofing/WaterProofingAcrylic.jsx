import React from "react";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";
import point from "./../../../../Images/point.png";
import waterProofingAcrylic from "./../../../../Images/WaterProofingBlog/Acrylic Waterproofing.png";
const WaterProofingAcrylic = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={waterProofingAcrylic} alt="waterProofingAcrylic" />
      <h5>10. Acrylic Waterproofing</h5>
      <p>
        Acrylic waterproofing is a liquid-applied system that provides a
        protective waterproofing layer for various surfaces. Known for its
        flexibility and ease of application, it’s a go-to choice for many
        homeowners seeking top waterproofing materials for home protection.
      </p>
      <ul>
        <h4>Advantages:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> High flexibility and crack
            resistance.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Can be applied on various surfaces.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Reflects sunlight, reducing heat
            absorption.
          </span>
        </li>
      </ul>
      <ul>
        <h4>Best Use:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Excellent for roofs, terraces, and
            exterior walls.
          </span>
        </li>{" "}
      </ul>
      <br />
    </div>
  );
};

export default WaterProofingAcrylic;
