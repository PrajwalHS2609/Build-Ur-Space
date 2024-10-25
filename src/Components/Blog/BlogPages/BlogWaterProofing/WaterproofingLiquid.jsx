import React from "react";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";

const WaterproofingLiquid = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img="https://img.freepik.com/free-photo/worker-performs-overhaul-roof-residential-building_181624-61003.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt="Liquid Waterproofing Membrane"
        loading="lazy"
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
