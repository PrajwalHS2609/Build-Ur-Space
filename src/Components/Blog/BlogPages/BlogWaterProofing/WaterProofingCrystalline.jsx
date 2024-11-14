import React from "react";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";
import point from "./../../../../Images/point.png";
import waterProofingCrystalline from "./../../../../Images/BlogImgs/WaterProofingBlog/Crystalline Waterproofing.png";

const WaterProofingCrystalline = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={waterProofingCrystalline}
        alt="waterProofing"
      />
      <h5>7. Crystalline Waterproofing</h5>
      <p>
        Crystalline waterproofing is a unique method that involves the use of
        crystalline compounds that penetrate concrete and react with water to
        form insoluble crystals. These crystals block water pathways, making
        this one of the most innovative top waterproofing materials for home
        foundations and structures.
      </p>
      <ul>
        <h4>Advantages:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Self-sealing properties (crystals continue to grow and block water
            paths).
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Long-lasting and durable.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Effective even under high water
            pressure.
          </span>
        </li>
      </ul>
      <ul>
        <h4>Best Use:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Ideal for foundations, basements, and retaining walls.
          </span>
        </li>{" "}
      </ul>
      <br />
    </div>
  );
};

export default WaterProofingCrystalline;
