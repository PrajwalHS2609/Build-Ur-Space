import React from "react";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";

const WaterProofingBituminous = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img="https://img.freepik.com/free-photo/worker-performs-overhaul-roof-residential-building_181624-61003.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt="waterProofing"
      />
      <h5>3. Bituminous Waterproofing</h5>
      <p>
        Bituminous waterproofing is commonly used for roofs and foundation
        walls, offering an excellent solution for areas prone to water exposure.
        Bitumen, a sticky, black, and viscous substance, is the core component
        of this method. As one of the top waterproofing materials for home
        projects, bituminous membranes are highly effective at protecting your
        home from water penetration.
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
            <img src={point} alt="point" /> Durable and long-lasting.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Effective in both hot and cold
            climates.
          </span>
        </li>
      </ul>
      <ul>
        <h4>Best Use:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Best for roof waterproofing and
            foundation protection.
          </span>
        </li>{" "}
      </ul>
      <br />
    </div>
  );
};

export default WaterProofingBituminous;
