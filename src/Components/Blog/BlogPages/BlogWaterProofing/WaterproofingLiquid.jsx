import React from "react";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";
import waterproofingLiquid from "./../../../../Images/WaterProofingBlog/Liquid Waterproofing Membrane.png";

const WaterproofingLiquid = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={waterproofingLiquid}
        alt="Liquid Waterproofing Membrane"
      />
      <h5>2. Liquid Waterproofing Membrane</h5>
      <p>
        Liquid waterproofing membranes are another excellent choice among the
        top waterproofing materials for home protection. These membranes are
        applied in liquid form and dry to form a seamless, flexible, and
        waterproof coating. They can be used on both flat and irregular
        surfaces, making them highly versatile.
      </p>
      <ul>
        <h4>Advantages:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Provides seamless coverage.
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Highly flexible and durable.
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Can be applied on a variety of surfaces, including roofs, balconies,
            and terraces.
          </span>
        </li>
      </ul>
      <ul>
        <h4>Best Use:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Perfect for roofs, terraces, and
            balconies where flexibility is key.
          </span>
        </li>{" "}
      </ul>
      <br />
    </div>
  );
};

export default WaterproofingLiquid;
