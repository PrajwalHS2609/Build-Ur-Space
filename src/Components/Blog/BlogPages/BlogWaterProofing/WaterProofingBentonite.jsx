import React from "react";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";
import point from "./../../../../Images/point.png";

const WaterProofingBentonite = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img="https://img.freepik.com/free-photo/worker-performs-overhaul-roof-residential-building_181624-61003.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt="waterProofing"
      />
      <h5>9. Bentonite Waterproofing</h5>
      <p>
        Bentonite is a natural clay material that expands when exposed to
        moisture, making it an effective top waterproofing material for home
        foundations and basements. When the bentonite swells, it creates a
        waterproof barrier that blocks water from seeping through.
      </p>
      <ul>
        <h4>Advantages:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Natural and eco-friendly material.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Highly effective at blocking water
            penetration.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Long-lasting protection.
          </span>
        </li>
      </ul>
      <ul>
        <h4>Best Use:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Suitable for foundations,
            retaining walls, and underground structures.
          </span>
        </li>{" "}
      </ul>
      <br />
    </div>
  );
};

export default WaterProofingBentonite;
